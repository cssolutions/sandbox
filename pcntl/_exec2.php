<?php

$condition = true;
$pid = pcntl_fork();
if ($pid == -1) {
    die('cannot fork');
} elseif ($pid) {  //parent
    pcntl_waitpid($pid, $status);
    if (pcntl_wifexited($status)) {
        $status = pcntl_wexitstatus($status);
        echo "program exited with status $status\n";
    } elseif (pcntl_wifsignaled($status)) {
        $signal = pcntl_wtermsig($status);
        echo "program killed by signal $signal\n";
    } elseif (pcntl_wifstopped($status)) {
        $signal = pcntl_wstopsig($status);
        echo "program stopped by signal $signal\n";
    }
} else {
	if(!$condition) posix_kill(getmypid(), SIGTERM);
	pcntl_exec('/usr/bin/php', ['/home/csaba/NetBeansProjects/sandbox/pcntl/print.php','-f Csaba']);
}