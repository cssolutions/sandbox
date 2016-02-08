<?php

/* 
 * IN ORDER TO INSTALL:  http://moffe42.blogspot.hu/2012/06/installing-pcntl-for-php-on-osx-lion.html
 * a pcntl könyvtárában :/opt/lampp/bin/phpize
 * $ curl -O http://us.php.net/distributions/php-5.6.18.tar.gz
 * $ tar -xzvf php-5.6.18.tar.gf
 * $ cd php-5.6.18/ext/pcntl
 * $ phpize
 * $ ./configure
 * $ make
 * $ sudo make install
 */

//$pid = pcntl_fork();
//
//switch($pid) {
//	 case -1:
//		  print "Could not fork!\n";
//		  exit;
//	 case 0:
//		  print "In child!\n";
//		  break;
//	 default:
//		  print "In parent!\n";
//}


//-------------------------------------------
//
//for ($i = 1; $i <= 5; ++$i) {
//	$pid = pcntl_fork();
//	if (!$pid) {
//		 sleep(1);
//		 print "In child $i\n";
//		 exit($i);
//	}
//}
//
//while (pcntl_waitpid(0, $status) != -1) {
//	$status = pcntl_wexitstatus($status);
//	echo "Child $status completed\n";
//}
	 
//-------------------------------------
	 
function myfunc() {
	 print "In tick func\n";
}

register_tick_function("myfunc");

//declare(ticks=20) {
//	 for($i = 0; $i < 20; ++$i) {
//		  print "Hello - 20($i)\n";
//		  sleep(1);
//		  sleep(1);
//		  sleep(1);
//		  sleep(1);
//	 }
//}
//
//declare(ticks=10) {
//	 for($i = 0; $i < 20; ++$i) {
//		  print "Hello - 10($i)\n";
//	 }
//}

declare(ticks=1) {
	 for($i = 0; $i < 20; ++$i) {
		  print "Hello - 4($i)\n";
	 }
}