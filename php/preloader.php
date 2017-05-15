<?php

class preloader {
   private $_dirs = [],
           $_target = '';
   
   public function setDirs() {
      
   }
   
   public function setTarget() {
      
   }
   
   public function run() {
      $fp1 = fopen("txt1", 'a+');
      $file2 = file_get_contents("txt2");
      fwrite($fp1, $file2);
   }
}

$loader = new preloader();