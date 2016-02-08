<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// -----------------------------

// The only way to execute a program without using the shell is to
// use pcntl_exec(). However, there is no way to do redirection, so
// you can't capture its output.

$pid = pcntl_fork();
if ($pid == -1) {
    die('cannot fork');
} elseif ($pid) {  //in parent
    pcntl_waitpid($pid, $status);
	 echo 'faszom';
} else {  //0 -> in child
    pcntl_exec('/usr/bin/php', ['/home/csaba/NetBeansProjects/sandbox/pcntl/print.php','-f Csaba']);
}