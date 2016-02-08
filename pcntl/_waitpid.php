<?php

$parentpid = getmypid();
$apid = pcntl_fork();
if ($apid == -1) {
	die('could not fork for client '.$client);
} else if ($apid) {
	print "PARENT $parentpid has forked $apid \n";
	pcntl_waitpid($apid, $status);
	echo 'From parent when child has finished.';
} else {
	$pid = getmypid();
	print "CHILD $pid  is sleeping\n";
	sleep(5);
	exit();
}




//if($pid = pcntl_fork()) {
//	$my_pid = getmypid();
//	print "My pid is $my_pid. pcntl_fork() return $pid, this is the parent\n";
//	while (pcntl_waitpid($pid, $status, WNOHANG) !== $pid) {
//		sleep(1);
//	}
//	for ($i=1;$i<=10;$i++) {
//		print "In parent $i";	
//		sleep(1);
//	}
//} else {
//	$my_pid = getmypid();
//	print "My pid is $my_pid. pcntl_fork() returned 0, this is the child\n";
//	for ($i=1;$i<=10;$i++) {
//		print "In child $i";	
//		sleep(1);
//	}
//	exit();
//}
//
////parent can be here, and thus we not need a while in the conditional statement
////for ($i=1;$i<=10;$i++) {
////	print "In parent $i";	
////	sleep(1);
////}
//exit();