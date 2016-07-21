<?php
interface Filter
{
    public function filter($value);
}

class TrimFilter implements Filter
{
     public function filter($value)
     {
         return trim($value);
     }
}

class NullFilter implements Filter
{
     public function filter($value)
     {
         return $value ? $value : '';
     }
}

class HtmlEntitiesFilter implements Filter
{
     public function filter($value)
     {
         return htmlentities($value);
     }
}

class InputElement
{
    protected $_filters;
    protected $_value;

    public function addFilter(Filter $filter)
    {
        $this->_filters[] = $filter;
        return $this;
    }

    public function setValue($value)
    {
        $this->_value = $this->_filter($value);
    }

    protected function _filter($value)
    {
        foreach ($this->_filters as $filter) {
            $value = $filter->filter($value);
        }
        return $value;
    }

    public function getValue()
    {
        return $this->_value;
    }
}

$input = new InputElement();
$input->addFilter(new NullFilter())
      ->addFilter(new TrimFilter())
      ->addFilter(new HtmlEntitiesFilter());
$input->setValue('     You should use the <h1>-<h6> tags for your headings.');
echo $input->getValue(), "\n";
?>
