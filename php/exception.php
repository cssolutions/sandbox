<?php
class MyException extends Exception { 
  public function errorMessage() {
    $errorMsg = 'Error on line '.$this->getLine().' in '.$this->getFile()
    .': <b>'.$this->getMessage().'</b> is not a valid E-Mail address';
    return $errorMsg;
  }
}

class Test {
    public function testing() {
        try {
            try {
                throw new MyException('foo!');
            } catch (MyException $e) {
                throw $e;
            }
        } catch (Exception $e) {
            var_dump($e->getMessage());
        }
    }
}

$foo = new Test;
$foo->testing();

//string(4) "foo!"

$email = "someone@example...com";

try {
  if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE) {
    throw new MyException($email);
  }
} catch (MyException $e) {
  echo $e->errorMessage();
	echo $e->getMessage();
}

