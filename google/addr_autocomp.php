<?php
ob_clean();
ini_set('xdebug.var_display_max_depth', 8);
ini_set('xdebug.var_display_max_children', 256);
ini_set('xdebug.var_display_max_data', 1024);

$address = [
	'country' => 'magyarorszag'
];

$post = [
	'city' => 'Budapest',
	'street' => 'Lukács György',
	'house_number' => '5'
];



$address_url = str_replace(' ', '+', implode('+', array_merge($address, $post)));
$address_components = json_decode(file_get_contents("http://maps.googleapis.com/maps/api/geocode/json?address={$address_url}&sensor=false"), true);

//var_dump($address_components);
$formatted_address = [];
foreach ($address_components['results'] as $address) {
	$formatted_address[] = array(
		'id' => $address['place_id'],
		'address' => $address['address_components'][7]['long_name'] . ". ". $address['address_components'][3]['long_name'] . ", " . $address['address_components'][1]['long_name'] . " " . $address['address_components'][0]['long_name'],
		'location' => $address['geometry']['location']
	);
}
var_dump($formatted_address);exit();