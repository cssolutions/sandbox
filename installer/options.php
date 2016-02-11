<?php

$cur_dir = getcwd();
$shortopts = "";
$longopts  = [
    "name:",     // Required value
    "public::"     // Required value
];

$options = getopt($shortopts, $longopts);
extract($options);

