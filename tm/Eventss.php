<?php
class Events {
   public $_memcache;
   
   public function __construct() {
      $this->_memcache = new \Memcache;
      $this->_memcache->connect('localhost', 11211) or die("Could not connect");
   }
   
   
	public function getSendables() {//return [];
      $result = $this->_memcache->get('socket_notifications');
      if ($result) {
         return $result;
      }
      return [];
	}
   
	public function setSendables() {//return [];
      $sendables = [[
			'type' => 'event',
			'date' => '2016-12-11 10:00:00',
			'msg'  => 'Message to be sended to the browser',
			'person' => 'Somebody',
			'addresses' => [5]
		]];
      $this->_memcache->set('socket_notifications', serialize($sendables), false);
      return $this->_memcache->get('socket_notifications');
	}
   
}