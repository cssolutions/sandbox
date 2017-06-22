<?php

use Phalcon\Config;

return new Config(
    [
        'database'    => [
            'adapter'  => 'Mysql',
            'host'     => 'localhost',
            'username' => 'user_manager',
            'password' => '',
            'name'     => 'test',
        ],
        'application' => [
            'modelsDir' => __DIR__ . '/../models/',
            'baseUri'   => '/micro-factory-default/',
        ],
        'models'      => [
            'metadata' => [
                'adapter' => 'Memory'
            ]
        ]
    ]
);
