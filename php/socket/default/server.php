<?php

//$host = "127.0.0.1";
//$port = 443;
//// don't timeout!
//set_time_limit(0);
//// create socket
//$socket = socket_create(AF_INET, SOCK_STREAM, 0) or die("Could not create socket\n");
//// bind socket to port
//$result = socket_bind($socket, $host, $port) or die("Could not bind to socket\n");
//// start listening for connections
//$result = socket_listen($socket, 3) or die("Could not set up socket listener\n");
//
//// accept incoming connections
//// spawn another socket to handle communication
//$spawn = socket_accept($socket) or die("Could not accept incoming connection\n");
//// read client input
//$input = socket_read($spawn, 1024) or die("Could not read input\n");
//// clean up input string
//$input = trim($input);
//echo "Client Message : ".$input;
//// reverse client input and send back
//$output = strrev($input) . "\n";
//socket_write($spawn, $output, strlen ($output)) or die("Could not write output\n");
//// close sockets
//socket_close($spawn);
//socket_close($socket);

$address="127.0.0.1";
$port="4445";
$sock=socket_create(AF_INET,SOCK_STREAM,SOL_TCP) or die("Cannot create a socket");
socket_bind($sock,$address,$port) or die("Couldnot bind to socket");
socket_listen($sock) or die("Couldnot listen to socket");
$accept=socket_accept($sock) or die("Couldnot accept");
$read=socket_read($accept,1024) or die("Cannot read from socket");
var_dump($read);
socket_write($accept,"Hello client");
socket_close($sock);