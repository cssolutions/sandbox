<?php
ini_set('xdebug.var_display_max_depth', 5);
ini_set('xdebug.var_display_max_children', 256);
ini_set('xdebug.var_display_max_data', 1024);
$authorization = "";//"Authorization: Bearer 080042cad6356ad5dc0a720c18b53b8e53d4c274";
$url = "http://sandbox.local/php/curl/process.php";

//GET REQUEST
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url . '?item1=value&item2=value2',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
));
$resp = curl_exec($curl);
curl_close($curl);
echo('GET' . $resp);


//POST REQUEST
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url,
    CURLOPT_USERAGENT => 'Codular Sample cURL Request',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => array(
        'item1' => 'value',
        'item2' => 'value2'
    )
));
$resp = curl_exec($curl);
echo('POST'. $resp);
curl_close($curl);




$curl = curl_init($url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json',$authorization));
$response = curl_exec($curl);
if (!$response) die("Connection Failure.n");
echo($response);



$curl = curl_init($url);
$data = array('first_name' => 'John');
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json',$authorization));
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
$response = curl_exec($curl);
if (!$response) die("Connection Failure.n");
echo($response);



//if(!curl_exec($curl)) {
//    die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
//}