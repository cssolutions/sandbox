#!/opt/lampp/php
<?php
//#!/usr/bin/env php

/*
 * First, let's create a repo with a $name
 *
 */

define('HOST_PATH','/home/csaba/test/hosts');
define('VHOST_PATH','/home/csaba/test/vhosts');
define('WWW_PATH','/home/csaba/www');
define('INSTALLER_PATH', realpath('.'));
$bower_config = [
	"name" => "project",
	"version" => "0.1.0",
	"license" => "MIT",
	"authors" => ["Csaba Farkas"],
	"dependencies" => [
	    "bootstrap"=> "~3.3.5",
	    "bootstrap-sass-official"=> "~3.3.5",
	    "datatables"=> "DataTables#~1.10.8",
	    "font-awesome"=> "~4.4.0",
	    "fullcalendar"=> "~2.4.0",
	    "jquery"=> "~2.1.4",
	    "jquery-ui"=> "~1.11.4",
	    "summernote"=> "~0.6.16"
	]
];

$cur_dir = getcwd();
$shortopts = "";
$longopts  = [
    "name:"     // Required value
];

$options = getopt($shortopts, $longopts);
extract($options);
$url = "$name.local";

if(!isset($name)) die('Name must be provided!');

//UPDATE HOST AND VIRTUAL HOST FILES
if(strstr(file_get_contents(HOST_PATH), $url)) echo "Már létezik a $url a következőben: " . HOST_PATH . "\n";
else {
	passthru("echo '127.0.0.1	$url' >> " . HOST_PATH);
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

if(strstr(file_get_contents(VHOST_PATH), $url)) echo "Már létezik a $url a következőben: " . VHOST_PATH . "\n";
else {
	passthru("echo '$content' >> ".VHOST_PATH);
	echo "A(z) $url létrehozva a következőben: " . VHOST_PATH . "\n";
}

//CREATE/CLONE PROJECT
chdir(WWW_PATH);
passthru('git clone https://oninflo-csaba@bitbucket.org/oninflo-csaba/base-admin.git');
passthru("mv base-admin $name");
chdir($name);
passthru('rm -rf repo.git');
passthru('git init');
//passthru("git remote add origin https://oninflo-csaba@bitbucket.org/oninflo-csaba/$name.git")

//INSTALL FRONTEND DEPENDENCIES
passthru("cp -rf " . INSTALLER_PATH . "/project/*.* $www_dir");
passthru("cp -rf " . INSTALLER_PATH . "/project/.bowerrc $www_dir");
file_put_contents($www_dir . '/bower.json', json_encode($bower_config, true));

//INSTALL DEPENDENCIES
passthru('bower update');
passthru("curl -sS https://getcomposer.org/installer | php");
passthru("php composer.phar install");










