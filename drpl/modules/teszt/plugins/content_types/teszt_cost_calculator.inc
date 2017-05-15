<?php


$plugin = array(
  'single' => TRUE,  // Just do this one, it is needed.
  'title' => t('Something good'),  // Title to show up on the pane screen.
  'description' => t('Something good'), // Description to show up on the pane screen.
  'category' => 'Oninflo', // A category to put this under.
  'edit form' => 'teszt_something_good_edit_form', // A function that will return the settings form for the pane.
  'render callback' => 'teszt_something_good_render', // A function that will return the renderable content.
  'admin info' => 'teszt_something_good_admin_info', // A function that will return the information displayed on the admin screen (optional).
  'defaults' => array( // Array of defaults for the settings form.
    'type' => '',
    'attributes' => array(),
  ),
  'all contexts' => TRUE, // This is NEEDED to be able to use substitution strings in your pane.
);

/**
 * An edit form for the pane's settings.
 */
function teszt_something_good_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];
  $form['type'] = array(
    '#type' => 'textfield',
    '#title' => t('Type'),
    '#description' => 'internet/lan, internet/business, tv/muholdastv, etc.',
    '#default_value' => $conf['type'],
    '#required' => true,
  );

  return $form;
}

function teszt_something_good_edit_form_validate(&$form, &$form_state) {
  if (!substr_count($form_state['values']['type'], '/')) form_set_error('type', t('Subtype is required (separated by slash)'));
}

/**
 * Submit function, note anything in the formstate[conf] automatically gets saved
 * Notice, the magic that automatically does that for you.
 */
function teszt_something_good_edit_form_submit(&$form, &$form_state) {
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    if (isset($form_state['values'][$key])) {
      $form_state['conf'][$key] = $form_state['values'][$key];
    }
  }
}

/**
 * Run-time rendering of the body of the block (content type)
 * See ctools_plugin_examples for more advanced info
 */
function teszt_something_good_render($subtype, $conf, $args, $contexts) {
  $block = new stdClass();
  // initial content is blank
  $block->title = ''; // This will be overridden by the user within the panel options.
  list($type, $subtype) = explode('/', $conf['type']);
  $block->content = something_good_page($type, $subtype);

  return $block;
}

/**
 * 'admin info' callback for panel pane.
 */
function teszt_something_good_admin_info($subtype, $conf, $contexts) {
  if (!empty($conf)) {
    $block = new stdClass;
    $block->title = $conf['override_title'] ? $conf['override_title_text'] : '';
    list($type, $subtype) = explode('/', $conf['type']);
    $block->content = something_good_page($type, $subtype);
    return $block;
  }
}

