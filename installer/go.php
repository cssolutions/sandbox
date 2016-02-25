#!/opt/lampp/php
<?php
//create a project at bitbucket with the name
//RUN this script with: sudo php hosts.php --name=csaba;php go.php --name=csaba
//RUN this script with: sudo php hosts.php --name=csaba -public=1;php go.php --name=csaba -public=1
//RUN MVC-INSTALLER
//http://bootsnipp.com/snippets/featured/responsive-sidebar-menu    implement this menu
//
//http://bootstrapious.com/free-templates 
//http://www.gettemplate.com/
//http://www.bootstrap51.com/
//http://www.marcellop.com/bootmetro/
//http://www.codeply.com/render/KrUO8QpyXP#
//http://www.bootply.com/zrATdhAKBZ    parallax one page template
//http://www.bootply.com/zylyqLRmcj     parallax
//http://cardeostrap.cardeo.ca/   conatining all elements
//http://bootsnipp.com/forms?version=3   for creating bootstrap forms


//#!/usr/bin/env php
//Socket is here on lampp installation
///opt/lampp/var/mysql/mysql.sock
// /opt/lampp/etc/my.cnf
// /etc/mysql/my.cnf
// /etc/alternatives/my.cnf
// /var/lib/dpkg/alternatives/my.cnf



/*
 * First, let's create a repo with a $name parameter at bitbucket
 * Run command: php go.php --name csaba
 * go to localhost base_admin db and műveletek/adatbázis másolása ide
 */
define('DEFAULT_USER','csaba');
define('WWW_PATH','/home/csaba/www');
define('INSTALLER_PATH', realpath('.'));
define('DB_TO_CLONE', 'objfw');
ini_set('mysql.default_socket', '/opt/lampp/var/mysql/mysql.sock');

$bower_config = [
	"name" => "project",
	"version" => "0.1.0",
	"license" => "MIT",
	"authors" => ["Csaba Farkas"],
	"dependencies" => [
	    "jquery"=> "~2.1.4",
	    "jquery-ui"=> "~1.11.4",
		 "jquery-popup-overlay"=> "~1.6.0",
	    "bootstrap"=> "~3.3.6",
	    "bootstrap-sass-official"=> "~3.3.6",
		 "bootstrap-material-design"=> "0.2.1",
		 "bootstrap-combobox"=> "1.1.6",
		 "bs-confirmation"=> "~1.0.5",
	    "datatables"=> "DataTables#~1.10.8",
	    "font-awesome"=> "~4.4.0",
	    "fullcalendar"=> "~2.4.0",
	    "summernote"=> "~0.6.16"
	]
];

include 'options.php';

$url = "$name.local";
$www_dir = WWW_PATH . "/" . $name . (@$options['public'] === 'false') ? '' : '/public';

//goto config;	

if(!isset($name)) die('Name must be provided!');

print "---------------------------------------------------- Updateing files ended\n";
//CREATE/CLONE PROJECT
chdir(WWW_PATH);
print "---------------------------------------------------- Cloning project...\n";
passthru('git clone https://oninflo-csaba@bitbucket.org/oninflo-csaba/base-admin.git');
passthru("mv base-admin $name");
chdir($name);
passthru('rm -rf repo.git');
passthru('git init');
passthru("git remote add origin https://oninflo-csaba@bitbucket.org/oninflo-csaba/$name.git");
print "---------------------------------------------------- Cloning project ended.\n";

//CREATE/CLONE DB
//passthru("firefox sandbox.local/installer/db.php?name=$name");
///opt/lampp/bin/mysqldump -h localhost -u root  objfw > $name.sql
///opt/lampp/bin/mysqladmin -h localhost -u root create $name
///opt/lampp/bin/mysql -h localhost -u root  $name < $name.sql
print "---------------------------------------------------- Creating database $name...\n";
passthru("/opt/lampp/bin/mysqldump -h localhost -u root  " . DB_TO_CLONE . " > $name.sql && /opt/lampp/bin/mysqladmin -h localhost -u root create $name && /opt/lampp/bin/mysql -h localhost -u root  $name < $name.sql");
print "---------------------------------------------------- Database $name has been created...\n";
//config:
//chdir(WWW_PATH);
//chdir($name);
//goto config2;
//INSTALL DEPENDENCIES

//INSTALL FRONTEND DEPENDENCIES
print "---------------------------------------------------- Installing and configuring bower\n";
passthru("cp -rf " . INSTALLER_PATH . "/project/*.* $www_dir");
passthru("cp -rf " . INSTALLER_PATH . "/project/.bowerrc $www_dir");
file_put_contents($www_dir . '/bower.json', json_encode($bower_config, true));
passthru('bower update');
passthru('bower install eonasdan-bootstrap-datetimepicker#latest --save');
passthru('bower install bootstrap-star-rating');
passthru('bower install --save datatables.net');
passthru('bower install metisMenu');
passthru('bower install bootstrap-treeview');
passthru('bower install bootstrap-social');
passthru('bower install blueimp-file-upload-node');
passthru('bower install Chart-js');
passthru('bower register bootstrap-floating-labels https://github.com/fauxparse/bootstrap-floating-labels -f');
passthru('bower register jq-range-slider https://github.com/ghusse/jQRangeSlider -f');
passthru('bower register bs-grid https://github.com/pontikis/bs_grid -f');
passthru('bower register bs-tabdrop https://github.com/jmschabdach/bootstrap-tabdrop -f');
passthru('bower register bs-context-menu https://github.com/dgoguerra/bootstrap-menu -f');
passthru('bower register bs-autohide-navbar https://github.com/istvan-ujjmeszaros/bootstrap-autohidingnavbar -f');
passthru('bower register bs-bootbox https://github.com/makeusabrew/bootbox -f');
passthru('bower install bootstrap-floating-labels');
passthru('bower install jq-range-slider');
passthru('bower install bs-grid');
passthru('bower install bs-tabdrop');
passthru('bower install bs-context-menu');
passthru('bower install bs-autohide-navbar');
passthru('bower install bs-bootbox');


//passthru('bower install angular-material-design-light');
//passthru('bower install angular angular-datetimepicker-ByGiro --save');
print "---------------------------------------------------- Bower tasks has been ended.\n";

//GULP TASKS
print "---------------------------------------------------- Running gulp\n";
passthru('sudo npm install --global gulp');
passthru('sudo npm link gulp');
passthru('sudo npm install jshint gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename gulp-cssmin');
//config2:


$parentpid = getmypid();
$apid = pcntl_fork();
if ($apid == -1) {
	//die('could not fork for client '.$client);
} else if ($apid) {
	sleep(10);
	print "---------------------------------------------------- Restarting web-server\n";
	passthru("sudo /opt/lampp/lampp restart && firefox $name.local");
	//pcntl_waitpid($apid, $status);
} else {
	//var_dump(getcwd());
	passthru('ls -l'); 
	passthru('gulp');
	$pid = getmypid();
}




