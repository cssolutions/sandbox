<?php
/**
 * Created by PhpStorm.
 * User: csaba
 * Date: 2017.07.18.
 * Time: 12:23
 */

$callback = function($param) {
    echo is_string($param) ? 'Helló ' . $param : 'faszom';
};

function call($callback, $name) {
    $callback($name);
}

call($callback, 'Csaba');