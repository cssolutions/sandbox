<?php


//return a complete output as a string
echo '$return = shell_exec(command)<br />';
$return = shell_exec('ls');
echo '$return: <pre>'.$return.'</pre>';
echo '-------------------------------<br />';
echo '<br /><br />';


//similar to the previous, but it store the result and the output in the variable. Retrun the last line of the result of the command
echo '$return = exec(command,output,result)<br />';
$return = exec('ls',$output,$result);
echo '$return(last line): <pre>'.$return.'</pre>';
echo '$result: <pre>'.$result.'</pre>';
echo '$output: ';var_dump($output);echo '<br />';
echo '-------------------------------<br />';
echo '<br /><br />';


//Retrun the last line of the result of the command
echo '$return = system(command,result)';echo '<br />';
echo 'Output: ';$return = system('ls',$result);echo '<br />';
echo '<br />Return(last line): ';var_dump($return);
echo '$result: <pre>'.$result.'</pre>';
echo '<br /><br />';


//no value is returned
echo 'passthru(command,result)';echo '<br />';
echo 'Output: ';passthru('ls',$result);echo '<br />';
echo 'Result: ';var_dump($result);
echo '<br />';



//$return = shell_exec(command)
//$return:
//
//index.php
//removeable.txt
//
//-------------------------------
//
//
//$return = exec(command,output,result)
//$return(last line):
//
//removeable.txt
//
//$result:
//
//0
//
//$output:
//
//array (size=2)
//  0 => string 'index.php' (length=9)
//  1 => string 'removeable.txt' (length=14)
//
//
//-------------------------------
//
//
//$return = system(command,result)
//
//Return(last line):
//
//string 'removeable.txt' (length=14)
//
//Output: index.php removeable.txt
//$result:
//
//0
//
//-------------------------------
//
//
//passthru(command,result)
//Output: index.php removeable.txt
//Result:
//
//int 0
