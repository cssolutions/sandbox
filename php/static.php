<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class a{
	static protected $test="class a";
	public function static_test(){
		echo static::$test;
		echo self::$test;
	}
}

class b extends a {
	static protected $test="class b";
}

$obj = new b();
$obj->static_test(); //class b  class a


//----------------------------------------------------------------------------------------

class a{
	static protected $test="class a";
}

class b extends a {
	static protected $test="class b";
	public function static_test(){
		echo static::$test;
		echo self::$test;
	}
}

$obj = new b();
$obj->static_test(); //class b  class b


