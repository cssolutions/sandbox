<?php
class Events {
   public static $_memcache;
	public static function setSendables() {//return [];
      
      if (is_null(self::$_memcache)) {
         self::$_memcache = new Memcache;
         self::$_memcache->connect('localhost', 11211) or die("Could not connect");
      }
      
      $sendables = [[
			'type' => 'event',
			'date' => '2016-12-11 10:00:00',
			'msg'  => 'Message to be sended to the browser',
			'person' => 'Somebody',
			'addresses' => [5]
		]];
      return self::$_memcache->set('socket_notifications', $sendables, false);
	}
}

var_dump(Events::setSendables());