<?php
namespace SebastianBergmann\Money;


class Money implements \JsonSerializable
{
    private $amount;
    private $currency;
    private static $roundingModes = [
        PHP_ROUND_HALF_UP,
        PHP_ROUND_HALF_DOWN,
        PHP_ROUND_HALF_EVEN,
        PHP_ROUND_HALF_ODD
    ];

    public function __construct($amount, $currency)
    {
        if (!is_int($amount)) {
            throw new InvalidArgumentException('$amount must be an integer');
        }

        $this->amount   = $amount;
        $this->currency = $this->handleCurrencyArgument($currency);
    }

    public static function fromString($value, $currency)
    {
        if (!is_string($value)) {
            throw new InvalidArgumentException('$value must be a string');
        }

        $currency = self::handleCurrencyArgument($currency);

        return new static(
            intval(
                round(
                    $currency->getSubUnit() *
                    round(
                        $value,
                        $currency->getDefaultFractionDigits(),
                        PHP_ROUND_HALF_UP
                    ),
                    0,
                    PHP_ROUND_HALF_UP
                )
            ),
            $currency
        );
    }

    public function jsonSerialize()
    {
        return [
            'amount'   => $this->amount,
            'currency' => $this->currency->getCurrencyCode()
        ];
    }

    public function getAmount()
    {
        return $this->amount;
    }

    public function getConvertedAmount()
    {
        return round($this->amount / $this->currency->getSubUnit(), $this->currency->getDefaultFractionDigits());
    }

    public function getCurrency()
    {
        return $this->currency;
    }

    public function add(Money $other)
    {
        $this->assertSameCurrency($this, $other);

        $value = $this->amount + $other->getAmount();

        $this->assertIsInteger($value);

        return $this->newMoney($value);
    }

    public function subtract(Money $other)
    {
        $this->assertSameCurrency($this, $other);

        $value = $this->amount - $other->getAmount();

        $this->assertIsInteger($value);

        return $this->newMoney($value);
    }

    public function negate()
    {
        return $this->newMoney(-1 * $this->amount);
    }

    public function multiply($factor, $roundingMode = PHP_ROUND_HALF_UP)
    {
        if (!in_array($roundingMode, self::$roundingModes)) {
            throw new InvalidArgumentException(
                '$roundingMode must be a valid rounding mode (PHP_ROUND_*)'
            );
        }

        return $this->newMoney(
            $this->castToInt(
                round($factor * $this->amount, 0, $roundingMode)
            )
        );
    }

    public function allocateToTargets($n)
    {
        if (!is_int($n)) {
            throw new InvalidArgumentException('$n must be an integer');
        }

        $sign       = ($this->amount < 0) ? -1 : 1;
        $amount     = abs($this->amount);
        $low        = $this->newMoney(intval($amount / $n));
        $high       = $this->newMoney($low->getAmount() + 1);
        $remainder  = $amount % $n;
        $result     = [];

        for ($i = 0; $i < $remainder; $i++) {
            $result[] = $high->multiply($sign);
        }

        for ($i = $remainder; $i < $n; $i++) {
            $result[] = $low->multiply($sign);
        }

        return $result;
    }

    public function allocateByRatios(array $ratios)
    {
        /** @var \SebastianBergmann\Money\Money[] $result */
        $result    = [];
        $total     = array_sum($ratios);
        $sign      = ($this->amount < 0) ? -1 : 1;
        $absAmount = abs($this->amount);
        $remainder = $absAmount;

        for ($i = 0; $i < count($ratios); $i++) {
            $amount     = $this->castToInt($absAmount * $ratios[$i] / $total);
            $result[]   = $this->newMoney($amount)->multiply($sign);
            $remainder -= $amount;
        }

        for ($i = 0; $i < $remainder; $i++) {
            $result[$i] = $this->newMoney($result[$i]->getAmount() + $sign);
        }

        return $result;
    }

    public function extractPercentage($percentage, $roundingMode = PHP_ROUND_HALF_UP)
    {
        $percentage = $this->newMoney(
            $this->castToInt(
                round($this->amount / (100 + $percentage) * $percentage, 0, $roundingMode)
            )
        );

        return [
            'percentage' => $percentage,
            'subtotal'   => $this->subtract($percentage)
        ];
    }

    public function compareTo(Money $other)
    {
        $this->assertSameCurrency($this, $other);

        if ($this->amount == $other->getAmount()) {
            return 0;
        }

        return $this->amount < $other->getAmount() ? -1 : 1;
    }

    public function equals(Money $other)
    {
        return $this->compareTo($other) == 0;
    }

    public function greaterThan(Money $other)
    {
        return $this->compareTo($other) == 1;
    }

    public function greaterThanOrEqual(Money $other)
    {
        return $this->greaterThan($other) || $this->equals($other);
    }

    public function lessThan(Money $other)
    {
        return $this->compareTo($other) == -1;
    }

    public function lessThanOrEqual(Money $other)
    {
        return $this->lessThan($other) || $this->equals($other);
    }

    private function assertSameCurrency(Money $a, Money $b)
    {
        if ($a->getCurrency() != $b->getCurrency()) {
            throw new CurrencyMismatchException;
        }
    }

    private function assertIsInteger($amount)
    {
        if (!is_int($amount)) {
            throw new OverflowException;
        }
    }

    private function assertInsideIntegerBounds($amount)
    {
        if (abs($amount) > PHP_INT_MAX) {
            throw new OverflowException;
        }
    }

    private function castToInt($amount)
    {
        $this->assertInsideIntegerBounds($amount);

        return intval($amount);
    }

    private function newMoney($amount)
    {
        return new static($amount, $this->currency);
    }

    private static function handleCurrencyArgument($currency)
    {
        if (!$currency instanceof Currency && !is_string($currency)) {
            throw new InvalidArgumentException('$currency must be an object of type Currency or a string');
        }

        if (is_string($currency)) {
            $currency = new Currency($currency);
        }

        return $currency;
    }
}
