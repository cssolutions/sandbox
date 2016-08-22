<?php

//generatros added -----------------------------------------------------------------
function xrange($start, $limit, $step = 1) {
    for ($i = $start; $i <= $limit; $i += $step) yield $i;
}

echo 'Single digit odd numbers: ';
foreach (xrange(1, 9, 2) as $number) echo "$number ";
echo "\n";

//finally keyword added -----------------------------------------------------------------
try {
    echo inverse(5) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
    echo "First finally.\n";
}

//New password hashing API -----------------------------------------------------------------
echo password_hash("rasmuslerdorf", PASSWORD_DEFAULT)."\n"; //$2y$10$.vGA1O9wmRjrwAVXD98HNOgsNpDczlqm3Jq7KnEd1rVAGv3Fykk1a
/**
 * In this case, we want to increase the default cost for BCRYPT to 12.
 * Note that we also switched to BCRYPT, which will always be 60 characters.
 */
$options = ['cost' => 12,];
echo password_hash("rasmuslerdorf", PASSWORD_BCRYPT, $options)."\n";
/**
 * Note that the salt here is randomly generated.
 * Never use a static salt or one that is not randomly generated.
 *
 * For the VAST majority of use-cases, let password_hash generate the salt randomly for you
 */
$options = [
    'cost' => 11,
    'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
];
echo password_hash("rasmuslerdorf", PASSWORD_BCRYPT, $options)."\n";

//password_needs_rehash
$password = 'rasmuslerdorf';
$hash = '$2y$10$YCFsG6elYca568hBi2pZ0.3LDL5wjgxct1N8w/oLR/jfHsiQwCqTS';
$options = array('cost' => 11);
if (password_verify($password, $hash)) {
    if (password_needs_rehash($hash, PASSWORD_DEFAULT, $options)) { // Check if a newer hashing algorithm is available or the cost has changed
        // If so, create a new hash, and replace the old one
        $newHash = password_hash($password, PASSWORD_DEFAULT, $options);
    }
    // Log user in
}

//password_verify
if (password_verify('rasmuslerdorf', $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}

//foreach now supports list()  -----------------------------------------------------------------
$array = [[1, 2],[3, 4]];
foreach ($array as list($a, $b)) echo "A: $a; B: $b\n";

//empty() supports arbitrary expressions  -----------------------------------------------------------------
function always_false() {return false;}
if (empty(always_false())) echo "This will be printed.\n";
//array and string literal dereferencing -----------------------------------------------------------------
echo 'Array dereferencing: ';
echo [1, 2, 3][0];
echo "\n";

echo 'String dereferencing: ';
echo 'PHP'[0];
echo "\n";
//Class name resolution via ::class -----------------------------------------------------------------
namespace Name\Space;
class ClassName {}
echo ClassName::class;
echo "\n";
//Name\Space\ClassName
//OPcache extension added -----------------------------------------------------------------

//Improvements to GD  -----------------------------------------------------------------
//    Flipping support using the new imageflip() function.
//    Advanced cropping support using the imagecrop() & imagecropauto() functions.
//    WebP read and write support using imagecreatefromwebp() & imagewebp() respectively.