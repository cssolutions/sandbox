<?php

class ServerUser {

    static $users = [
        'oninflo.teszt' => 'pőfUUZŐÁőo'
    ];

    public static function getUserAccessToken($name, $pass) {

        if (isset(self::$users[$name]) && self::$users[$name] == $pass) {
            $token = self::generateToken();

            if (self::getCache()->save($token)) {
                return $token;
            }

        }
        else {
            return 'invalid-credentials';
        }

    }

    protected static function getCache() {
        return '';
    }

    protected static function generateToken() {
        return bin2hex(random_bytes(16));
    }

}