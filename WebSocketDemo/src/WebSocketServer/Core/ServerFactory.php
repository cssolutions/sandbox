<?php
/**
 * Factory that makes server objects and associated factory dependencies
 *
 * PHP version 5.4
 *
 * @category   WebSocketServer
 * @package    Core
 * @author     Chris Wright <https://github.com/DaveRandom>
 * @copyright  Copyright (c) 2013 Pieter Hordijk
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @version    1.0.0
 */
namespace WebSocketServer\Core;

use \WebSocketServer\Socket\ClientFactory,
    \WebSocketServer\Socket\HandshakeFactory,
    \WebSocketServer\Socket\DataBufferFactory,
    \WebSocketServer\Socket\FrameFactory,
    \WebSocketServer\Socket\MessageFactory,
    \WebSocketServer\Socket\MessageEncoderFactory,
    \WebSocketServer\Socket\MessageDecoderFactory,
    \WebSocketServer\Http\RequestFactory,
    \WebSocketServer\Http\ResponseFactory,
    \WebSocketServer\Log\Loggable;

/**
 * Factory that makes server objects and associated factory dependencies
 *
 * @category   WebSocketServer
 * @package    Core
 * @author     Chris Wright <https://github.com/DaveRandom>
 */
class ServerFactory
{
    /**
     * Create a server and dependencies
     *
     * @param \WebSocketServer\Log\Loggable $logger Optional event logger
     *
     * @return \WebSocketServer\Core\Server The created server
     */
    public function create(Loggable $logger = null)
    {
        $frameFactory = new FrameFactory;
        return new Server(
            new ClientFactory(
                new HandshakeFactory(
                    new RequestFactory,
                    new ResponseFactory
                ),
                new DataBufferFactory,
                new MessageEncoderFactory($frameFactory),
                new MessageDecoderFactory(
                    $frameFactory,
                    new MessageFactory
                ),
                $logger
            ),
            $logger
        );
    }
}