<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$files = ['error_log.txt','januar.doc','januar.docx','januar.odt','mvo.xlsx','php.pdf'];
$saves = ['error_log.jpg','januar.jpg','januar.jpg','januar.jpg','mvo.jpg','php.jpg'];

$files = ['error_log.txt','php.pdf'];
$saves = ['error_log.jpg','php.jpg'];


$pathFrom = realpath('.') . '/docs/';
$pathTo = realpath('.') . '/thumbnails/';
foreach ($files as $key=>$file) {
	$img = new imagick($pathFrom . $file . '[0]');
	$img->setImageFormat('jpg');
	$img->writeImage($pathTo . $saves[$key]);
}