#!/usr/bin/env php
<?php
//require_once "Console/Getopt.php";
//$shortoptions = "h";
//$longoptions = ["file=","help"];
//$con = new Console_Getopt;
//$args = Console_Getopt::readPHPArgv();
//$ret = $con->getopt($args, $shortoptions, $longoptions);
//print_r($ret);

// Script example.php
$shortopts  = "";
$shortopts .= "f:";  // Required value
$shortopts .= "v::"; // Optional value (itt kell =)
$shortopts .= "abc"; // These options do not accept values

$longopts  = array(
    "required:",     // Required value
    "optional::",    // Optional value
    "option",        // No value
    "opt",           // No value
);
$options = getopt($shortopts, $longopts);
var_dump($options);

//./getopt.php -v=optional -f required --required req --optional=opt
//array(4) {
//  ["v"]=>
//  string(8) "optional"
//  ["f"]=>
//  string(8) "required"
//  ["required"]=>
//  string(3) "req"
//  ["optional"]=>
//  string(3) "opt"
//}
