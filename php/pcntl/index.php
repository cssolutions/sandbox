#!/usr/bin/env php
<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$pid = pcntl_fork();

if($pid) {
	$mpid = getmypid();
	pcntl_wait($status);   //if I use that, children'll run first, other case the parent of course
	echo "In parent $pid, pid is $mpid";
} else { //pid is 0
	$mpid = getmypid();
	echo "In children $pid, pid is $mpid";
}

