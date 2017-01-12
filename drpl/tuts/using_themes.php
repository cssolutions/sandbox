<?php

/*
 * In a .module
 * notification-box.tpl.php in a mymodule/theme with html content
 */
function digi_commerce_checkout_theme() {
	return array(
    'notification_box' => array(
      'variables' => array('address' => NULL),
      'path' => drupal_get_path('module', 'mymodule') . '/theme',
      'template' => 'notification-box',
    ),
	);
}

function mymodule_teszt_ajax(&$form, &$form_state) {
	return theme('notification_box', array());
}
