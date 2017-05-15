<?php
require('vendor/autoload.php');

$options = array(
  'cluster' => 'eu',
  'encrypted' => true
);
$pusher = new Pusher(
  '289b4a84afcdf01b3480',
  'e03eb6a3692f7fc93ce6',
  '266852',
  $options
);

$data['message'] = 'hello world';
$pusher->trigger('test_channel', 'my_event', $data);
?>
