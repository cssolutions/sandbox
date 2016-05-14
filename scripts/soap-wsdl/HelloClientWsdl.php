<?php

$client = new SoapClient("http://sandbox.local/soap-wsdl/Hello.wsdl", ['soap_version' => SOAP_1_2,'trace' => 1 ]);
echo $client->hello('Csaba');



//echo("\nDumping client object functions:\n");
//var_dump($client->__getFunctions());
//
//$return = $client->__soapCall("hello",array("world"));
//echo("\nReturning value of __soapCall() call: ".$return);
//
//echo("\nDumping request headers:\n" 
//	.$client->__getLastRequestHeaders());
//
//echo("\nDumping request:\n".$client->__getLastRequest());
//
//echo("\nDumping response headers:\n"
//	.$client->__getLastResponseHeaders());
//
//echo("\nDumping response:\n".$client->__getLastResponse());