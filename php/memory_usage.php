<?php


//echo memory_get_usage() . " byte<br />"; // 36640
//echo memory_get_peak_usage() . " byte(peak)<br />"; // 36640
//$a = str_repeat("Hello", 424);
//echo memory_get_usage() . " byte<br />"; // 57960
//echo memory_get_peak_usage() . " byte(peak)<br />"; // 57960
//unset($a);
//echo memory_get_usage() . " byte<br />"; // 36744
//echo memory_get_peak_usage() . " byte(peak)<br />"; // 36744

class MemoryUsage {
	private static $own, $default;
	public static function init() {
		$a = memory_get_usage() . " byte<br />";
		MemoryUsage::start();
		MemoryUsage::end();
		$b = memory_get_usage() . " byte<br />";
		return self::$own = $b-$a; 
	}
	public static function start() {
		self::$default = memory_get_usage();
	}
	public static function end() {
		echo 'PHP memóriafoglalása a belépési pontnál: ' . self::$default . ' byte<br />';
		echo 'PHP memóriafoglalása a mért kódrészletre: ' . (((int)memory_get_usage())-((int)self::$default)) . ' byte<br />';
		echo 'PHP memóriafoglalása a lefuttatott fügvénnyel: ' . memory_get_usage(). ' byte<br />';
	}
}

echo MemoryUsage::start();
for ($i=0; $i<=10000; $i++) {
   $a = new stdClass();
   $a->elso = 'egy';
}
echo MemoryUsage::end();

