<?php
namespace SebastianBergmann\Money;

class MoneyTest extends \PHPUnit_Framework_TestCase
{
    public function testCanBeConstructedFromIntegerValueAndCurrencyObject()
    {
        $m = new Money(0, new Currency('EUR'));

        $this->assertInstanceOf(Money::class, $m);

        return $m;
    }

    public function testCanBeConstructedFromIntegerValueAndCurrencyString()
    {
        $m = new Money(0, 'EUR');

        $this->assertInstanceOf(Money::class, $m);

        return $m;
    }

    public function testCanBeConstructedFromStringValueAndCurrencyObject()
    {
        $this->assertEquals(
            new Money(1234, new Currency('EUR')),
            Money::fromString('12.34', new Currency('EUR'))
        );
    }

    public function testCanBeConstructedFromStringValueAndCurrencyString()
    {
        $this->assertEquals(
            new Money(1234, new Currency('EUR')),
            Money::fromString('12.34', 'EUR')
        );
    }

//    public function testAmountCanBeRetrieved(Money $m)
//    {
//        $this->assertEquals(0, $m->getAmount());
//    }

    public function testConvertedAmountCanBeRetrieved()
    {
        $m = new Money(1234, 'EUR');
        $this->assertSame(12.34, $m->getConvertedAmount());
    }

//    public function testCurrencyCanBeRetrieved(Money $m)
//    {
//        $this->assertEquals(new Currency('EUR'), $m->getCurrency());
//    }

    public function testAnotherMoneyObjectWithSameCurrencyCanBeAdded()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));
        $c = $a->add($b);

        $this->assertEquals(1, $a->getAmount());
        $this->assertEquals(2, $b->getAmount());
        $this->assertEquals(3, $c->getAmount());
    }

    public function testAnotherMoneyObjectWithSameCurrencyCanBeSubtracted()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));
        $c = $b->subtract($a);

        $this->assertEquals(1, $a->getAmount());
        $this->assertEquals(2, $b->getAmount());
        $this->assertEquals(1, $c->getAmount());
    }

    public function testCanBeNegated()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = $a->negate();

        $this->assertEquals(1, $a->getAmount());
        $this->assertEquals(-1, $b->getAmount());
    }

    public function testCanBeMultipliedByAFactor()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = $a->multiply(2);

        $this->assertEquals(1, $a->getAmount());
        $this->assertEquals(2, $b->getAmount());
    }

    public function testCanBeAllocatedToNumberOfTargets()
    {
        $a = new Money(99, new Currency('EUR'));
        $r = $a->allocateToTargets(10);

        $this->assertEquals(
            [
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(10, new Currency('EUR')),
                new Money(9, new Currency('EUR'))
            ],
            $r
        );
    }

    public function testNegativeAmountCanBeAllocatedToNumberOfTargets()
    {
        $a = new Money(-99, new Currency('EUR'));
        $r = $a->allocateToTargets(10);

        $this->assertEquals(
            [
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-10, new Currency('EUR')),
                new Money(-9, new Currency('EUR'))
            ],
            $r
        );
    }

    public function testPercentageCanBeExtracted()
    {
        $original = new Money(10000, new Currency('EUR'));
        $extract  = $original->extractPercentage(21);

        $this->assertEquals(new Money(8264, new Currency('EUR')), $extract['subtotal']);
        $this->assertEquals(new Money(1736, new Currency('EUR')), $extract['percentage']);
    }

    public function testCanBeAllocatedByRatios()
    {
        $a = new Money(5, new Currency('EUR'));
        $r = $a->allocateByRatios([3, 7]);

        $this->assertEquals(
            [
                new Money(2, new Currency('EUR')),
                new Money(3, new Currency('EUR'))
            ],
            $r
        );
    }

    public function testNegativeAmountCanBeAllocatedByRatios()
    {
        $a = new Money(-5, new Currency('EUR'));
        $r = $a->allocateByRatios([3, 7]);

        $this->assertEquals(
            [
                new Money(-2, new Currency('EUR')),
                new Money(-3, new Currency('EUR'))
            ],
            $r
        );
    }

    public function testCanBeComparedToAnotherMoneyObjectWithSameCurrency()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));

        $this->assertEquals(-1, $a->compareTo($b));
        $this->assertEquals(1, $b->compareTo($a));
        $this->assertEquals(0, $a->compareTo($a));
    }

    public function testCanBeComparedToAnotherMoneyObjectWithSameCurrency2()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));

        $this->assertFalse($a->greaterThan($b));
        $this->assertTrue($b->greaterThan($a));
    }

    public function testCanBeComparedToAnotherMoneyObjectWithSameCurrency3()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));

        $this->assertFalse($b->lessThan($a));
        $this->assertTrue($a->lessThan($b));
    }

    public function testCanBeComparedToAnotherMoneyObjectWithSameCurrency4()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = new Money(1, new Currency('EUR'));

        $this->assertEquals(0, $a->compareTo($b));
        $this->assertEquals(0, $b->compareTo($a));
        $this->assertTrue($a->equals($b));
        $this->assertTrue($b->equals($a));
    }

    public function testCanBeComparedToAnotherMoneyObjectWithSameCurrency5()
    {
        $a = new Money(2, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));
        $c = new Money(1, new Currency('EUR'));

        $this->assertTrue($a->greaterThanOrEqual($a));
        $this->assertTrue($a->greaterThanOrEqual($b));
        $this->assertTrue($a->greaterThanOrEqual($c));
        $this->assertFalse($c->greaterThanOrEqual($a));
    }

    public function testCanBeComparedToAnotherMoneyObjectWithSameCurrency6()
    {
        $a = new Money(1, new Currency('EUR'));
        $b = new Money(1, new Currency('EUR'));
        $c = new Money(2, new Currency('EUR'));

        $this->assertTrue($a->lessThanOrEqual($a));
        $this->assertTrue($a->lessThanOrEqual($b));
        $this->assertTrue($a->lessThanOrEqual($c));
        $this->assertFalse($c->lessThanOrEqual($a));
    }

    public function testCanBeSerializedToJson()
    {
        $this->assertEquals(
            '{"amount":1,"currency":"EUR"}',
            json_encode(new EUR(1))
        );
    }

    public function testCannotBeCreatedFromInvalidAmount()
    {
        $this->expectException(InvalidArgumentException::class);

        new Money(null, new Currency('EUR'));
    }

    public function testCannotBeCreatedFromInvalidCurrency()
    {
        $this->expectException(InvalidArgumentException::class);

        new Money(0, null);
    }

    public function testCannotBeCreatedFromInvalidString()
    {
        $this->expectException(InvalidArgumentException::class);

        Money::fromString(1234, new Currency('EUR'));
    }

    public function testCannotPerformOverflowingAddition()
    {
        $this->expectException(OverflowException::class);

        $a = new Money(PHP_INT_MAX, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));
        $a->add($b);
    }

    public function testCannotBeCreatedForAmountOutsideOfIntegerBounds()
    {
        $this->expectException(OverflowException::class);

        $a = new Money(PHP_INT_MAX, new Currency('EUR'));
        $a->multiply(2);
    }

    public function testCannotAddMoneyObjectWithDifferentCurrency()
    {
        $this->expectException(CurrencyMismatchException::class);

        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('USD'));

        $a->add($b);
    }

    public function testCannotPerformOverflowingSubtraction()
    {
        $this->expectException(OverflowException::class);

        $a = new Money(-PHP_INT_MAX, new Currency('EUR'));
        $b = new Money(2, new Currency('EUR'));
        $a->subtract($b);
    }

    public function testCannotSubtractMoneyObjectWithDifferentCurrency()
    {
        $this->expectException(CurrencyMismatchException::class);

        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('USD'));

        $b->subtract($a);
    }
    public function testCannotBeMultipliedUsingInvalidRoundingMode()
    {
        $this->expectException(InvalidArgumentException::class);

        $a = new Money(1, new Currency('EUR'));
        $a->multiply(2, null);
    }

    public function testCannotBeAllocatedToInvalidNumberOfTargets()
    {
        $this->expectException(InvalidArgumentException::class);

        $a = new Money(0, new Currency('EUR'));
        $a->allocateToTargets(null);
    }

    public function testCannotBeComparedToMoneyObjectWithDifferentCurrency()
    {
        $this->expectException(InvalidArgumentException::class);

        $a = new Money(1, new Currency('EUR'));
        $b = new Money(2, new Currency('USD'));

        $a->compareTo($b);
    }
}
