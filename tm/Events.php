<?php
class Events {
   public $_filename;
   
	public static function getSendables() {//return [];
      $fp = fopen("notifications.txt", "r+");
      flock($fp, LOCK_EX);
      $content = json_decode(file_get_contents('./notifications.txt'));
      ftruncate($fp, 0);
      flock($fp, LOCK_UN);
      fclose($fp);
      return $content;
	}
   
	public static function addSendable(array $notification = array()) {
//      $notification_test = [
//			'type' => 'event',
//			'date' => '2016-12-11 10:00:00',
//			'msg'  => 'Message to be sended to the browser',
//			'person' => 'Somebody',
//			'addresses' => [5]
//		];
      $fp = fopen("./notifications.txt", "a+") or die(error_get_last());
      flock($fp, LOCK_EX);
      $content = json_decode(file_get_contents('./notifications.txt'));
      $content[] = $notification;
      ftruncate($fp, 0);
      fwrite($fp, json_encode($content));
      flock($fp, LOCK_UN);
      fclose($fp);
	}
   
}