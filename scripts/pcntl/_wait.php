<?php

$parentpid = getmypid();
$apid = pcntl_fork();

if ($apid == -1) {
	die('could not fork for client '.$client);
} else if ($apid) {
	print "PARENT $parentpid has forked $apid \n";
	pcntl_wait($status);
	echo 'From parent when child has finished.';
} else {
	$pid = getmypid();
	print "CHILD $pid  is sleeping\n";
	sleep(5);
	exit();
}