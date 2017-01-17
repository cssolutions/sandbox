<?php
        //Enter your code here, enjoy!

$a1 = [
    'elso' => 1,
    'masodik' => 2,
    'harmadik' => 3,
    'otodik' => 5
];

$a2 = [
    'elso' => 'a2_1',
    'masodik' => 'a2_2',
    'negyedik' => 'a2_negyedik'
];

var_dump($a1 + $a2);
var_dump(array_merge($a1, $a2));


//array(5) {
//  ["elso"]=>
//  int(1)
//  ["masodik"]=>
//  int(2)
//  ["harmadik"]=>
//  int(3)
//  ["otodik"]=>
//  int(5)
//  ["negyedik"]=>
//  string(11) "a2_negyedik"
//}
//array(5) {
//  ["elso"]=>
//  string(4) "a2_1"
//  ["masodik"]=>
//  string(4) "a2_2"
//  ["harmadik"]=>
//  int(3)
//  ["otodik"]=>
//  int(5)
//  ["negyedik"]=>
//  string(11) "a2_negyedik"
//}
