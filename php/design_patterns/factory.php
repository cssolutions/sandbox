<?php
final class page_factory {
   public static function generator($class, $data) {
      $class_name = $class . "_page";
      $class = new $class_name($data);
      $class->process();
      return $class;
   }
}

function __page_autoload($class) {
   $classpath = dirname(__FILE__) . $class . ".php";
   if (file_exists($classpath)) {
      require($classpath);
   }
   throw new Exception("Unable to find page class");
}
spl_autoload_register('__page_autoload');

abstract class page {
   private $data;
   public function __construct($data) {
      $this->data = $data;
   }
   protected function data() {
      return $this->data;
   }
   abstract public function process();
   abstract public function display();
}
 
class white_page extends page {
   public function process() {
      foreach ($this->data() as $datum) {
         $datum = <<<HTML
            <span class="white_bg">$datum<span>
HTML;
      }
   }
   public function display() {
       $html = '';
      foreach ($this->data() as $datum) {
         $html .= $datum;
      }
      return $html;
   }
}
 
$data = array('1','2','4');
$pc = page_factory::generator('white', $data);
echo $pc->display();
?>
