<?php
//Constant expressions -----------------------------------------------------------------
const ONE = 1;
const TWO = ONE * 2;
//It is also now possible to define a constant array using the const keyword:
const ARR = ['a', 'b'];
echo ARR[0];

//Variadic functions via ... -----------------------------------------------------------------
function f($req, $opt = null, ...$params) {
    printf('$req: %d; $opt: %d; number of params: %d'."\n", $req, $opt, count($params));
}

f(1);
f(1, 2);
f(1, 2, 3);
f(1, 2, 3, 4);
//$req: 1; $opt: 0; number of params: 0
//$req: 1; $opt: 2; number of params: 0
//$req: 1; $opt: 2; number of params: 1
//$req: 1; $opt: 2; number of params: 2

//Argument unpacking via ... -----------------------------------------------------------------
function add($a, $b, $c) {
    return $a + $b + $c;
}

$operators = [2, 3];
echo add(1, ...$operators);
//Exponentiation via ** -----------------------------------------------------------------
printf("2 ** 3 ==      %d\n", 2 ** 3);
printf("2 ** 3 ** 2 == %d\n", 2 ** 3 ** 2);
$a = 2;
$a **= 3;
printf("a ==           %d\n", $a);
//2 ** 3 ==      8
//2 ** 3 ** 2 == 512
//a ==           8

//use function and use const -----------------------------------------------------------------
namespace Name\Space {
    const FOO = 42;
    function f() { echo __FUNCTION__."\n"; }
}

namespace {
    use const Name\Space\FOO;
    use function Name\Space\f;

    echo FOO."\n";
    f();
}
//42
//Name\Space\f

//phpdbg: -----------------------------------------------------------------
//PHP now includes an interactive debugger called phpdbg implemented as a SAPI module.

//Files larger than 2 gigabytes in size are now accepted.  -----------------------------------------------------------------

//php://input is reusable -----------------------------------------------------------------
//php://input may now be reopened and read as many times as required. This work has also resulted in a major reduction in the amount of memory required to deal with POST data. 

//Default character encoding -----------------------------------------------------------------
//default_charset is now used as the default character set for the htmlentities(), html_entity_decode() and htmlspecialchars() functions. Note that if the (now deprecated) iconv and mbstring encoding settings are set, they will take precedence over default_charset for iconv and mbstring functions, respectively.
//The default value for this setting is UTF-8. 
	
//hash_equals() for timing attack safe string comparison -----------------------------------------------------------------
//The hash_equals() function has been added to compare two strings in constant time. This should be used to mitigate timing attacks; for instance, when testing crypt() password hashes (assuming that you are unable to use password_hash() 
//and password_verify(), which aren't susceptible to timing attacks). 
$expected  = crypt('12345', '$2a$07$usesomesillystringforsalt$');
$correct   = crypt('12345', '$2a$07$usesomesillystringforsalt$');
$incorrect = crypt('1234',  '$2a$07$usesomesillystringforsalt$');
var_dump(hash_equals($expected, $correct));   //true
var_dump(hash_equals($expected, $incorrect)); //false


//__debugInfo() -----------------------------------------------------------------
class C {
    private $prop;
    public function __construct($val) {$this->prop = $val;}
    public function __debugInfo() {return ['propSquared' => $this->prop ** 2,];}
}
var_dump(new C(42));
//object(C)#1 (1) {
//  ["propSquared"]=>
//  int(1764)
//}

//SSL/TLS improvements -----------------------------------------------------------------