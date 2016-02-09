#!/usr/bin/env php
<?php

define('HOST_PATH','/home/csaba/test/hosts');
define('VHOST_PATH','/home/csaba/test/vhosts');
define('WWW_PATH','/home/csaba/www');


$shortopts = "";
$longopts  = [
    "name:",     // Required value
];

$options = getopt($shortopts, $longopts);
extract($options);
$url = "$name.local";

if(!isset($name)) die('Name must be provided!');

//print $url;

//UPDATE HOST AND VIRTUAL HOST FILES
if(strstr(file_get_contents(HOST_PATH), $url)) {
	echo "Már létezik a $url a következőben: " . HOST_PATH . "\n";
}
else {
	shell_exec("echo '127.0.0.1	$url' >> " . HOST_PATH);
	echo "A(z) $url létrehozva a következőben: " . HOST_PATH . "\n";
}

$www_dir = WWW_PATH . "/" . $name;
$content = <<<EOT
<VirtualHost *:80>
	ServerAdmin csaba.farkas@digi.co.hu
	DocumentRoot {$www_dir}
	ServerName {$url}
	ServerAlias {$url}
	<Directory "{$www_dir}">
		Require all granted
	</Directory>
</VirtualHost>		  
EOT;

if(strstr(file_get_contents(VHOST_PATH), $url)) {
	echo "Már létezik a $url a következőben: " . VHOST_PATH . "\n";
}
else {
	shell_exec("echo '$content' >> ".VHOST_PATH);
	echo "A(z) $url létrehozva a következőben: " . VHOST_PATH . "\n";
}


//CREATE/CLONE PROJECT




//IMPORT PROJECT



//INSTALL DEPENDENCIES








//INSTALL FRONTEND DEPENDENCIES
