<?php
/**
 * This factory builds HTTP response data objects
 *
 * PHP version 5.4
 *
 * @category   WebSocketServer
 * @package    Http
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 * @copyright  Copyright (c) 2013 Pieter Hordijk
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    1.0.0
 */
namespace WebSocketServer\Http;

/**
 * This factory builds HTTP response data objects
 *
 * @category   WebSocketServer
 * @package    Http
 * @author     Pieter Hordijk <info@pieterhordijk.com>
 */
class ResponseFactory
{
    /**
     * Build a response
     *
     * @return WebSocketServer\Http\Response The response object
     */
    public function create()
    {
        return new Response;
    }
}