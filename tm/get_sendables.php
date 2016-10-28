<?php
class Events {
   public static $_memcache;
	public static function getSendables() {//return [];
      
      if (is_null(self::$_memcache)) {
         self::$_memcache = new Memcache;
         self::$_memcache->connect('localhost', 11211) or die("Could not connect");
      }
      
      $result = self::$_memcache->get('socket_notifications');
      if ($result) {
         self::$_memcache->delete('socket_notifications');
         return $result;
      }
      return [];
	}
}

var_dump(Events::getSendables());