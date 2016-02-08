<?php

$shortopts  = "";
$shortopts .= "f:";
$shortopts .= "v::";
$shortopts .= "abc";

$longopts  = array(
    "required:",     // Required value
    "optional::",    // Optional value
    "option",        // No value
    "opt",           // No value
);
$options = getopt($shortopts, $longopts);
print "Üdv, kedves {$options['f']}!\n";
print "Tesztelek....";