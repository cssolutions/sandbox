<?php
class DB {
        private static $_singleton;
        private $_connection;
        public function __construct()
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

class Registry {
        private static $_register;
        public static function add(&$item, $name = null)
        {
                if (is_object($item) && is_null($name)) {
                    $name = get_class($item);
                } elseif (is_null($name)) {
                    $msg = "You must provide a name for non-objects";
                    throw new Exception($msg);
                }
                $name = strtolower($name);
                self::$_register[$name] = $item;
        }
        public static function &get($name)
        {
                $name = strtolower($name);
                if (array_key_exists($name, self::$_register)) {
                    return self::$_register[$name];
                } else {
                    $msg = "'$name' is not registered.";
                    throw new Exception($msg);
                }
        }
        public static function exists($name)
        {
                $name = strtolower($name);
                if (array_key_exists($name, self::$_register)) {
                    return true;
                } else {
                    return false;
                }
        }
}
$db = new DB();
Registry::add($db);
// Later on
if (Registry::exists('DB')) {
    $db = Registry::get('DB');
} else {
    die('We lost our Database connection somewhere. Bear with us.');
}
?>
