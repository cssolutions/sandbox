<?php
$subject = "abcdef";
$pattern = '/def/';
preg_match($pattern, $subject, $matches);
print_r($matches);
//Array
//(
//    [0] => def
//)

preg_match("/PHP/", "PHP");       # Match for an unbound literal
preg_match("/^PHP/", "PHP");      # Match literal at start of string
preg_match("/PHP$/", "PHP");      # Match literal at end of string
preg_match("/^PHP$/", "PHP");     # Match for exact string content
preg_match("/^$/", "");           # Match empty string

preg_match("/PHP/", "PHP");                # / as commonly used delimiter
preg_match("@PHP@", "PHP");                # @ as delimiter
preg_match("!PHP!", "PHP");                # ! as delimiter
preg_match("/http:\/\//", "http://");     # match http:// protocol prefix with / delimiter
preg_match("#http://#",   "http://");      # match http:// protocol prefix with # delimiter

preg_match("/PHP/", "PHP");                # case sensitive string matching
preg_match("/php/i", "PHP");              # case in-sensitive string matching

preg_match("/P.P/",     "PHP");            # match a single character
preg_match("/P.*P/",    "PHP");           # match multipe characters
preg_match("/P[A-Z]P/", "PHP");            # match from character range A-Z
preg_match("/[PH]*/",   "PHP");            # match from character set P and H
preg_match("/P\wP/",    "PHP");            # match one word character
preg_match("/\bPHP\b/", "regex in PHP");   # match the word "PHP", but not "PHP" as larger string
		  
preg_match("/[PH]{3}/",   "PHP");          # match exactly 3 characters from set [PH]
preg_match("/[PH]{3,3}/", "PHP");          # match exactly 3 characters from set [PH]
preg_match("/[PH]{,3}/",  "PHP");          # match at most 3 characters from set [PH]
preg_match("/[PH]{3,}/",  "PHP");          # match at least 3 characters from set [PH]

//   abc… 	Letters
//	123… 	Digits
//	\d 	Any Digit
//	\D 	Any Non-digit character
//	. 	Any Character
//	\. 	Period
//	[abc] 	Only a, b, or c
//	[^abc] 	Not a, b, nor c
//	[a-z] 	Characters a to z
//	[0-9] 	Numbers 0 to 9
//	\w 	Any Alphanumeric character
//	\W 	Any Non-alphanumeric character
//	{m} 	m Repetitions
//	{m,n} 	m to n Repetitions
//	* 	Zero or more repetitions
//	+ 	One or more repetitions
//	? 	Optional character
//	\s 	Any Whitespace
//	\S 	Any Non-whitespace character
//	^…$ 	Starts and ends
//	(…) 	Capture Group
//	(a(bc)) 	Capture Sub-group
//	(.*) 	Capture all
//	(abc|def) 	Matches abc or def



//extracting data
# Extract everything after the literal "START"
preg_match("/START(.*)/", 'START valami bugos programot', $results);
//array(2) {
//  [0]=>
//  string(28) "START valami bugos programot"
//  [1]=>
//  string(23) " valami bugos programot"
//}

# Extract the number from a date string 
preg_match("/(\d{4})-(\d{2})-(\d{2})/", "2012-10-20", $results);
//array(4) {
//  [0]=>
//  string(10) "2012-10-20"
//  [1]=>
//  string(4) "2012"
//  [2]=>
//  string(2) "10"
//  [3]=>
//  string(2) "20"
//}

# Nesting of capture groups, extract full name, and both parts...
preg_match("/name is ((\w+), (\w+))/", "name is Doe, John", $results);
//array(4) {
//  [0]=>
//  string(17) "name is Doe, John"
//  [1]=>
//  string(9) "Doe, John"
//  [2]=>
//  string(3) "Doe"
//  [3]=>
//  string(4) "John"
//}

$str = 'foobar: 2008';
preg_match('/(?P<name>\w+): (?P<digit>\d+)/', $str, $matches);
print_r($matches);
//Array
//(
//    [0] => foobar: 2008
//    [name] => foobar
//    [1] => foobar
//    [digit] => 2008
//    [2] => 2008
//)

// get host name from URL
preg_match('@^(?:http://)?([^/]+)@i', "http://www.php.net/index.html", $matches);
//array(2) {
//  [0]=>
//  string(18) "http://www.php.net"
//  [1]=>
//  string(11) "www.php.net"
//}
preg_match('@^(http://)?([^/]+)@i', "http://www.php.net/index.html", $matches);  //without ?:
//array(3) {
//  [0]=>
//  string(18) "http://www.php.net"
//  [1]=>
//  string(7) "http://"
//  [2]=>
//  string(11) "www.php.net"
//}

// get last two segments of host name
preg_match('/[^.]+\.[^.]+$/', $host, $matches);
echo "domain name is: {$matches[0]}\n";