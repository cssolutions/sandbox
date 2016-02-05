<?php

class Template {
	public $template_dir;
	function display($file) {
		$template = $this;
		// suppress non-existent variable warnings
		error_reporting(E_ALL | E_NOTICE);
		include("$this->template_dir.$file");
	}
}

$template = new Template;
$template->template_dir = '/data/www/www.example.org/templates/' ;
$template->title = 'Hello World';
$template->name = array_key_exists('name', $_GET)?$_GET['name']:'Stranger';
//$template->display('default.tmpl'');
echo getcwd() . '<br />';
echo realpath('./..') . PHP_EOL;
exit();
echo getcwd();
chdir(getcwd() . '../');
echo getcwd();