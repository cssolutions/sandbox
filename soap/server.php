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

//when in non-wsdl mode the uri option must be specified
$options=array('uri'=>'http://sandbox.dev/soap/index.html');
//create a new SOAP server
$server = new SoapServer(NULL,$options);
//attach the API class to the SOAP Server
$server->setClass('MyAPI');
//start the SOAP requests handler
$server->handle();