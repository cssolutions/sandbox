<?php

//    beforeSend callback option is invoked; it receives the jqXHR object and the settings object as parameters.
//    error callback option is invoked, if the request fails. It receives the jqXHR, a string indicating the error type, and an exception object if applicable. Some built-in errors will provide a string as the exception object: "abort", "timeout", "No Transport".
//    dataFilter callback option is invoked immediately upon successful receipt of response data. It receives the returned data and the value of dataType, and must return the (possibly altered) data to pass on to success.
//    success callback option is invoked, if the request succeeds. It receives the returned data, a string containing the success code, and the jqXHR object.
//    Promise callbacks — .done(), .fail(), .always(), and .then() — are invoked, in the order they are registered.
//    complete callback option fires, when the request finishes, whether in failure or success. It receives the jqXHR object, as well as a string containing the success or error code.

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//for valid url
//response text, code 200  error, complete
//response json, code 200 success, done, complete
//response text, code 300  error, complete
//response json, code 300 error, complete
//response text, code 400  error, complete
//response json, code 400 error, complete

//for invalid url

//header("HTTP/1.0 500 Nem létező cím");
http_response_code(200);
header('Content-Type: application/json');
//echo 'text';
echo json_encode(['elso', 'masodik']);
