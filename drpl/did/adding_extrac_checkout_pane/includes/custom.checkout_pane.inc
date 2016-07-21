<?php

/**
 * Implements base_settings_form()
 */
function custom_pane_settings_form($checkout_pane) {
  $form['custom_pane_field'] = array(
    '#type'=>'text_format',
    '#title' => t('Terms of Use'),
    '#default_value' => variable_get('custom_pane_field')['value'],
		'#format' => 'full_html'
  );
  return $form;
}