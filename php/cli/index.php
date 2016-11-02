#!/usr/bin/env php
<?php
//chmod u+rx cli.php
//./cli.php
echo 'faszom';
print_r($argv);
?>

#!/usr/bin/php
<?php
var_dump($argv);

//$ chmod +x test
//$ ./test -h -- foo
//array(4) {
//  [0]=>
//  string(6) "./test"
//  [1]=>
//  string(2) "-h"
//  [2]=>
//  string(2) "--"
//  [3]=>
//  string(3) "foo"
//}

?>


