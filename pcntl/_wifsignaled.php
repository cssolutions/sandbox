<?php

//$pid = pcntl_fork();
//if ($pid == -1) throw new Exception ('We cant use pcntl functions!');
//else if ($pid == 0) {
//	print "We are in the parent!";
//}
//else {
//	pcntl_waitpid(0, $status);   //if we put it the order of execution will be the reverse, now: We are in the parent!We are the descendant!
//	print "We are the descendant!";
//}

function sig_handler($signo){
     switch ($signo) {
         case SIGTERM:
             // handle shutdown tasks
             exit;
             break;
         case SIGHUP:
             // handle restart tasks
             break;
         case SIGUSR1:
             echo "Caught SIGUSR1...\n";
             break;
         default:
             // handle all other signals
     }
}

pcntl_signal(SIGTERM, "sig_handler");
pcntl_signal(SIGHUP,  "sig_handler");
pcntl_signal(SIGUSR1, "sig_handler");
	
	
$pid = pcntl_fork();
if ($pid == -1) throw new Exception ('We cant use pcntl functions!');
else if ($pid == 0) {
	pcntl_waitpid($pid, $status);
	print "We are in the parent!";
}
else {
	print "We are the descendant!";
	while (true) {}
}



//pcntl_waitpid($pid, $status);
//var_dump(pcntl_wifsignaled($status));

