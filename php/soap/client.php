 <?php
 /*
 * PHP SOAP - How to create a SOAP Server and a SOAP Client
 */

$api = new SoapClient(NULL, ['location' => 'http://sandbox.local/php/soap/server.php', 'uri' => 'http://sandbox.local/php/soap/index.html']);
echo $api->hello('Csaba az Isten');