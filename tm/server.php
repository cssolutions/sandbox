<?php
/**
 * user logs in
 * ...
 * a page generate a chat-token for him/her, that is stored one in his browser's local storage, and once in a memcache with
 * a page add him to chat_token__socket memcache array, that is filled with socket, when the js triggered
 */
set_time_limit(0);

include_once 'Events.php';

$events = new Events;

$host = '127.0.0.1'; //host
$port = '8000'; //port
$null = NULL;   //null var
$re = '/server.php\?(.*) /i';

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP); //Create TCP/IP sream socket

if (!is_resource($socket)) {
	die("socket_create() failed: ".socket_strerror(socket_last_error()));
}
socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1);//reuseable port
if (!socket_bind($socket, 0, $port)){//bind socket to specified host
	die("socket_bind() failed: ".socket_strerror(socket_last_error()));
}
if (!socket_listen($socket)) {//listen to port
	die("socket_listen() failed: ".socket_strerror(socket_last_error()));
}

$clients = array($socket);//create & add listning socket to the list
$chat_token__socket = array('a' => null, 'b' => null, 'c' => null, 'd' => null);  //this have to change when sb log's in/out, and it should be stored in a memcache array. Socket added here
$uid__chat_token = array(5 => 'a', 6 => 'b'); //this have to change when sb log's in/out, and it should be stored in a memcache array

while (true) { //start endless loop, so that our script doesn't stop
	$changed = $clients;//manage multipal connections
	if (!empty($clients)) {
		socket_select($changed, $null, $null, 0, 10);//returns the socket resources in $changed array  || Ez mindíg lekéri azon socketeket, amelyeknél valamilyen változás állt be
		/**
		 * When somebody connect to the socket system
		 */
		if (in_array($socket, $changed)) {  //check for new socket
			$socket_new = socket_accept($socket); //accpet new socket
			$clients[] = $socket_new; //add socket to client array
			$header = socket_read($socket_new, 1024); //read data sent by the socket

			if (preg_match('/server.php\?(.*) /i', $header, $matches)) {
				if (isset($matches[1]) && array_key_exists($matches[1], $chat_token__socket)) { //if sockect user is authenticated
					$chat_token__socket[$matches[1]] = $socket_new;
					perform_handshaking($header, $socket_new, $host, $port); //perform websocket handshake
					socket_getpeername($socket_new, $ip); //get ip address of connected socket
					$response = mask(json_encode(array('type' => 'system', 'message' => $ip.' connected'))); //prepare json data
					$found_socket = array_search($socket, $changed);//make room for new socket
					send_message($response); //notify all users about new connection
					unset($changed[$found_socket]);		
				} else { //if sockect user is not authenticated
					echo 'Connection failed, wrong credentials!';
					$found_socket = array_search($socket, $changed);
					unset($changed[$found_socket]);	
					$found_socket = array_search($socket, $clients);
					unset($clients[$found_socket]);	
					unset($socket_new);
				}
			}
		}

		foreach ($changed as $changed_socket) {	 //loop through all connected sockets
         /**
                  * When somebody sends data thorough the socket
                  */
         while(socket_recv($changed_socket, $buf, 1024, 0) >= 1) { //check for any incomming data
            $received_text = unmask($buf); //unmask data
            $tst_msg = json_decode($received_text); //json decode 
            if (is_object($tst_msg) && array_key_exists($tst_msg->wsdid, $chat_token__socket)) {
               $user_name = $tst_msg->name; //sender name
               $user_message = $tst_msg->message; //message text
               $user_color = $tst_msg->color; //color
               $response_text = mask(json_encode(array('type'=>'usermsg', 'name' => $user_name, 'message' => $user_message, 'color' => $user_color))); //prepare data to be sent to client
               send_message($response_text); //send data	
            }
            break 2; //exist this loop
         }
         /**
                   * When somebody disconnets
                   */
         $header = @socket_read($changed_socket, 1024, PHP_NORMAL_READ);
         if ($header === false) { // check disconnected client
            $found_socket = array_search($changed_socket, $clients); // remove client for $clients array
            @socket_getpeername($changed_socket, $ip);
            unset($clients[$found_socket]);

            $response = mask(json_encode(array('type' => 'system', 'message' => $ip.' disconnected'))); //notify all users about disconnected connection
            send_message($response);
         }
		}
      
		/**
		 * When an action ocour that'll trigger a socket event.
		 * This needs to be stored in a memcache array
		 */
      $addresses_sockets = [];
      if (!empty(($sendables = $events->getSendables()))) {
         //var_dump($sendables);
         foreach ($sendables as $event) {
            if (isset($event->addresses)) {
               foreach ($event->addresses as $uid) {
                  if (!is_null(@$chat_token__socket[$uid__chat_token[$uid]])) {
                     //var_dump($chat_token__socket[$uid__chat_token[$uid]]);
                     $addresses_sockets[] = $chat_token__socket[$uid__chat_token[$uid]];
                  }
               }  
            }
            //sleep(1);
            send_message(mask(json_encode(['type' => 'system', 'message' => $event->msg])), $addresses_sockets);
         }  
      }
	}
}
socket_close($socket); // close the listening socket

function send_message($msg, $clients = array()) {
	if (empty($clients)) global $clients;
	foreach($clients as $changed_socket) {var_dump($msg);
		@socket_write($changed_socket, $msg, strlen($msg));
	}
	return true;
}


//Unmask incoming framed message
function unmask($text) {
	$length = ord($text[1]) & 127;
	if($length == 126) {
		$masks = substr($text, 4, 4);
		$data = substr($text, 8);
	}
	elseif($length == 127) {
		$masks = substr($text, 10, 4);
		$data = substr($text, 14);
	}
	else {
		$masks = substr($text, 2, 4);
		$data = substr($text, 6);
	}
	$text = "";
	for ($i = 0; $i < strlen($data); ++$i) {
		$text .= $data[$i] ^ $masks[$i%4];
	}
	return $text;
}

//Encode message for transfer to client.
function mask($text) {
	$b1 = 0x80 | (0x1 & 0x0f);
	$length = strlen($text);
	
	if($length <= 125)
		$header = pack('CC', $b1, $length);
	elseif($length > 125 && $length < 65536)
		$header = pack('CCn', $b1, 126, $length);
	elseif($length >= 65536)
		$header = pack('CCNN', $b1, 127, $length);
	return $header.$text;
}

//handshake new client.
function perform_handshaking($receved_header,$client_conn, $host, $port) {
	$headers = array();
	$lines = preg_split("/\r\n/", $receved_header);
	foreach($lines as $line) {
		$line = chop($line);
		if(preg_match('/\A(\S+): (.*)\z/', $line, $matches)) {
			$headers[$matches[1]] = $matches[2];
		}
	}

	$secKey = $headers['Sec-WebSocket-Key'];
	$secAccept = base64_encode(pack('H*', sha1($secKey . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')));
	//hand shaking header
	$upgrade  = "HTTP/1.1 101 Web Socket Protocol Handshake\r\n" .
	"Upgrade: websocket\r\n" .
	"Connection: Upgrade\r\n" .
	"WebSocket-Origin: $host\r\n" .
	"WebSocket-Location: ws://$host:$port/demo/shout.php\r\n".
	"Sec-WebSocket-Accept:$secAccept\r\n\r\n";
	socket_write($client_conn,$upgrade,strlen($upgrade));
}

class Cache {
   public static $_memcache;
   
   public function getInstance() {
      if (is_null(self::$_memcache)) {
         self::$_memcache = new Memcache;
         self::$_memcache->connect('localhost', 11211) or die("Could not connect");
      }      
   }
   
	public static function getSendables() {//return [];
      self::getInstance();
      $result = self::$_memcache->get('socket_notifications');
      if ($result) {
         self::$_memcache->delete('socket_notifications');
         return $result;
      }
      return [];
	}
   
   //setted when user logs in
   public static function getSocketByChatToken() {
      self::getInstance();
      $result = self::$_memcache->get('socket__chat_token');
      if ($result) {
         return $result;
      }
      return [];
   }
   
   //setted when user logs in
   public static function getChatTokenByUid() {
      self::getInstance();
      $result = self::$_memcache->get('chat_token__uid');
      if ($result) {
         return $result;
      }
      return [];
   }
}