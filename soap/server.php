<?php
/*
 * PHP SOAP - How to create a SOAP Server and a SOAP Client
 */

//a basic API class
class MyAPI {
    function hello($name="Anonymus") {
        return "Hello {$name}!";
    }
}

$server = new SoapServer(NULL,['uri'=>'http://sandbox.local/soap/index.html']);
$server->setClass('MyAPI');
$server->handle();