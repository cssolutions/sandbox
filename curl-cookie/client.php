<?php

$curl_handle = curl_init();
curl_setopt($curl_handle,CURLOPT_COOKIE, http_build_query(['oo', 'faszom'], null, ';'));
curl_setopt($curl_handle, CURLOPT_URL, 'sandbox.dev/curl-cookie/server.php');
curl_setopt($curl_handle, CURLOPT_POST, !empty($user_post_data));
curl_setopt($curl_handle, CURLOPT_POSTFIELDS, $user_post_data);
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl_handle, CURLOPT_AUTOREFERER, TRUE);
curl_setopt($curl_handle, CURLOPT_HEADER, 1);
//curl_setopt($curl_handle, CURLOPT_FOLLOWLOCATION, false);
//curl_setopt($curl_handle, CURLOPT_HTTPHEADER, $curl_request_headers);
//curl_setopt($curl_handle, CURLOPT_SSL_VERIFYPEER, false);

echo curl_exec($curl_handle);
//var_dump($result);

