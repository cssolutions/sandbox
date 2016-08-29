<?php
ob_clean();
ini_set('xdebug.var_display_max_depth', 8);
ini_set('xdebug.var_display_max_children', 256);
ini_set('xdebug.var_display_max_data', 1024);

$formatted_addresses = [];

if (isset($_GET['address']) && !empty($_GET['address'])) {
	$address_components = json_decode(file_get_contents("http://maps.googleapis.com/maps/api/geocode/json?address=hungary+".str_replace(' ', '+', $_GET['address'])."&sensor=false"), true);	
	
	//var_dump($address_components['results']);
	foreach ($address_components['results'] as $components) {
		foreach ($components['address_components'] as $component) {
			switch ($component['types'][0]) {
				case 'route':
					$street = $component['long_name'];
					break;
				case 'street_number':
					$street_number = $component['long_name'];
					break;
				case 'locality':
					$city = $component['long_name'];
					break;
				case 'country':
					$country = $component['long_name'];
					break;
				case 'postal_code':
					$postal_code = $component['long_name'];
					break;
				case 'political':
					$district = $component['long_name'];
					break;
				case 'political':
					$district = $component['long_name'];
					break;
				case 'administrative_area_level_1':
					$region = $component['long_name'];
					break;	
				default:
					break;
			}
		}
		$formatted_addresses[] = @$postal_code . '., ' . @$city . ', ' . @$street . ' ' . @$street_number . '.' . '(' . json_encode($components['geometry']['location']) . ')';
		//var_dump(json_encode($components['geometry']['location']));
	}
	
	
	
	//oldone
//	foreach ($address_components['results'] as $address) {
//		$formatted_address[] = array(
//			'id' => $address['place_id'],
//			'address' => @$address['address_components'][6]['long_name'] . ". ". $address['address_components'][3]['long_name'] . ", " . $address['address_components'][1]['long_name'] . " " . $address['address_components'][0]['long_name'],
//			'location' => $address['geometry']['location']
//		);
//	}
	var_dump($formatted_addresses);
}
?>

<form method="GET" action="<?php echo $_SERVER['PHP_SELF'] ?>"><input type="text" name="address" value="<?php echo @$_GET['address']; ?>"><input type="submit" value="Küld!"></form>