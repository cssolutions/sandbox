<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//$mc = new Memcache;
//$mc->addServer('127.0.0.1', 11211) or die("Could not connect");
//$mc->set('socket_notifications',['test value'], false);
//var_dump($mc->get('socket_notifications'));


include('Events.php');

$events = new Events();
$events->addSendable(
      [
			'type' => 'event',
			'date' => '2016-12-11 10:00:00',
			'msg'  => 'Message to be sended to the browser',
			'person' => 'Somebody',
			'addresses' => [5, 6]
		]
 );