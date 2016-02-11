#!/opt/lampp/php
<?php
//RUN this script with: php mvc.php --name=csaba

$app_path        = realpath('.');
$controller_path = $app_path . "/controllers";
$model_path      = $app_path . "/models";
$view_path       = $app_path . "/views";

$cur_dir = getcwd();
$shortopts = "";
$longopts  = [
    "name:",     // Required value
    "public::"     // Optional value
];

$options = getopt($shortopts, $longopts);
extract($options);

$ucf_name = ucfirst($name);
passthru("cp -v {$controller_path}/DefaultController.php {$controller_path}/{$ucf_name}Controller.php");
passthru("cp -v {$model_path}/Default.php {$model_path}/{$ucf_name}.php");
passthru("cp -avr {$view_path}/default {$view_path}/{$name}");
exit();