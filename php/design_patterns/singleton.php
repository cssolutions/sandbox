<?php
/*
 * Singleton Pattern
 */
class DB {
        private static $_singleton;
        private $_connection;
        private function __construct()
        {
        $this->_connection = mysql_connect();
        }
        public static function getInstance()
        {
            if (is_null (self::$_singleton)) {
                    self::$_singleton = new DB();
            }
            return self::$_singleton;
        }
}

$db = DB::getInstance();

?>
