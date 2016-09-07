<?php


if (!extension_loaded('sockets')) {
    die('The sockets extension is not loaded.');
}

//$host    = "127.0.0.1";
//$port    = 443;
//$message = "Hello Server";
//echo "Message To server :".$message;
//// create socket
//$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP) or die("Could not create socket\n");
//// connect to server
//$result = socket_connect($socket, $host, $port) or die("Could not connect to server\n");  
//// send string to server
//socket_write($socket, $message, strlen($message)) or die("Could not send data to server\n");
//// get server response
//$result = socket_read($socket, 1024) or die("Could not read server response\n");
//echo "Reply From Server  :".$result;
//// close socket
//socket_close($socket);

$address="127.0.0.1";
$port="443";
$msg="Hello server";

$sock=socket_create(AF_INET,SOCK_STREAM,SOL_TCP) or die("Cannot create a socket");
socket_connect($sock,$address,$port) or die("Could not connect to the socket");
socket_write($sock,"Hello server") or die("Could not write to the socket");

$read=socket_read($sock,1024);
var_dump($read);
socket_close($sock);