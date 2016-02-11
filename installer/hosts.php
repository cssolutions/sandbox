#!/opt/lampp/php
<?php
/*
 * First, let's create a repo with a $name parameter at bitbucket
 * Run command: php hosts.php --name csaba
 * Run command: php go.php --name csaba
 * go to localhost base_admin db and műveletek/adatbázis másolása ide
 */
define('HOST_PATH','/etc/hosts');
define('VHOST_PATH','/opt/lampp/etc/extra/httpd-vhosts.conf');
define('WWW_PATH','/home/csaba/www');

include 'options.php';

$url = "$name.local";
$www_dir = WWW_PATH . "/" . $name . ((isset($options['public']) && $options['public'] === 'false') ? '' : '/public');
$content = <<<EOT
<VirtualHost *:80>
	ServerAdmin csaba.farkas@digi.co.hu
	DocumentRoot {$www_dir}
	ServerName {$url}
	ServerAlias www.{$url}
	<Directory "{$www_dir}">
		Require all granted
	</Directory>
</VirtualHost>		  
EOT;

if(!isset($name)) die('Name must be provided!');

//UPDATE HOST AND VIRTUAL HOST FILES
print "---------------------------------------------------- Updateing hosts and virtual host files\n";
if(strstr(file_get_contents(HOST_PATH, true), $url)) echo "Már létezik a $url a következőben: " . HOST_PATH . "\n";
else {
	passthru("echo '127.0.0.1	$url' >> " . HOST_PATH);
	echo "A(z) $url létrehozva a következőben: " . HOST_PATH . "\n";
}

if(strstr(file_get_contents(VHOST_PATH, true), $url)) echo "Már létezik a $url a következőben: " . VHOST_PATH . "\n";
else {
	passthru("echo '$content' >> ".VHOST_PATH);
	echo "A(z) $url létrehozva a következőben: " . VHOST_PATH . "\n";
}