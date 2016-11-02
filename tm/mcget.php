<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$mc = new Memcache;
$mc->addServer('127.0.0.1', 11211) or die("Could not connect");
var_dump($mc->get('test2'));