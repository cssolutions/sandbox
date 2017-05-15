<?php

$result = 'array(';
$file = fopen("tmp.txt", "r");
while(!feof($file)){
    $line = fgets($file);
		//echo $line;
		$result .= "'".trim($line)."' => '".trim($line)."', ";
    # do same stuff with the $line
}
fclose($file);
$result .= ');';

echo $result;