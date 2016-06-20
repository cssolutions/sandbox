<?php
//
//$parentpid = getmypid();
//$apid = pcntl_fork();
//
//if ($apid == -1) {
//	die('could not fork for client '.$client);
//} else if ($apid) {
//	print "PARENT $parentpid has forked $apid \n";
//	pcntl_wait($status);
//	echo 'From parent when child has finished.';
//} else {
//	$pid = getmypid();
//	print "CHILD $pid  is sleeping\n";
//	sleep(5);
//	exit();
//}

//CHILD 6466 is sleeping 



if($pid = pcntl_fork()) {
  $my_pid = getmypid();
  print "My pid is $my_pid. pcntl_fork() return $pid, this is the parent\n";
} else {
  $my_pid = getmypid();
  print "My pid is $my_pid. pcntl_fork() returned 0, this is the child\n";
}
//My pid is 4286. pcntl_fork() return 4287, this is the parent
//My pid is 4287. pcntl_fork() returned 0, this is the child