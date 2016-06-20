<?php

class base {
	public function __set($key, $val) {
		var_dump('__set');
	}
	
	public function __get($key) {
		var_dump('__get');
	}

	public function __call($key, $args) {
		var_dump('__call');
		if (empty($args)) return $this->$key;
	}
}

$b = new base();
$b->foo = 'bar';
$vmi = $b->foo;
$b->foo();

