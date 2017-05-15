<?php

$cur_dir = getcwd();
$shortopts = "";
$longopts  = [
    "name:",     // Required value
    "public::"     // Optional value
];

$options = getopt($shortopts, $longopts);
extract($options);

