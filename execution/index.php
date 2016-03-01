<?php


//return a complete output as a string
echo '$result = shell_exec(command)<br />';
$result = shell_exec('ls');
echo '$result: <pre>'.$result.'</pre>';
echo '-------------------------------<br />';
echo '<br /><br />';


//similar to the previous, but it store the result and the output in the variable. Retrun the last line of the result of the command
echo '$result = exec(command,output,return)<br />';
$result = exec('ls',$output,$return);
echo '$result(last line): <pre>'.$result.'</pre>';
echo '$output: ';var_dump($output);echo '<br />';
echo '$return: <pre>'.$return.'</pre>';
echo '-------------------------------<br />';
echo '<br /><br />';


//Retrun the last line of the result of the command
echo '$result = system(command,return)';echo '<br />';
echo 'Output: <pre>';$result = system('ls',$return);echo '</pre><br />';
echo '$result(last line): <pre>'.$result.'</pre>';
echo '<br />Return: ';var_dump($return);
echo '-------------------------------<br />';
echo '<br /><br />';


//no value is returned
echo 'passthru(command,return)';echo '<br />';
echo 'Output: <pre>';passthru('ls',$return);echo '</pre><br />';
echo 'Return: ';var_dump($return);
echo '<br /><br />';

echo '<br />';

