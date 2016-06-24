<?php
global $_domain;

$form['group_sidebar_message'] = array(
      '#type' => 'fieldset',
      '#title' => t('Sidebar Message Information'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,  
    );

$msg_title = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_title' ) : variable_get( 'sidebar_msg_title' );

$form['group_sidebar_message']['sidebar_msg_title'] = array(
  '#type'          => 'textfield',
  '#title'         => t('Sidebar Message Title'),
  '#description'   => t("Put here the title of the sidebar message"),
  '#default_value' => $msg_title,
  '#group' => t('Sidebar Message'),
);

$msg_btn_txt = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_btn_txt' ) : variable_get( 'sidebar_msg_btn_txt' );

$form['group_sidebar_message']['sidebar_msg_btn_txt'] = array(
  '#type'          => 'textfield',
  '#title'         => t('Sidebar Message Button Text'),
  '#description'   => t("Put here the Button Text"),
  '#default_value' => $msg_btn_txt,
  '#group' => t('Sidebar Message'),
);

$msg_link = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_link' ) : variable_get( 'sidebar_msg_link' );

$form['group_sidebar_message']['sidebar_msg_link'] = array(
  '#type'          => 'textfield',
  '#title'         => t('Sidebar Message Link'),
  '#description'   => t("Put here the link of the message"),
  '#default_value' => $msg_link,
  '#group' => t('Sidebar Message'),
);

$msg_desc = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_desc' ) : variable_get( 'sidebar_msg_desc' );

$form['group_sidebar_message']['sidebar_msg_desc'] = array(
  '#type'          => 'textarea',
  '#title'         => t('Sidebar Message'),
  '#description'   => t("Content of the sidebar message"),
  '#default_value' => $msg_desc,
  '#group' => t('Sidebar Message'),
);

// Add spectrum color picker js and css. See http://bgrins.github.io/spectrum
 // Requires libraries api and spectrum installed in libraries/bgrins-spectrum
 // as per color_field install instructions
 drupal_add_js(libraries_get_path('bgrins-spectrum') . '/spectrum.js');
 drupal_add_css(libraries_get_path('bgrins-spectrum') . '/spectrum.css');
 $spectrum_js = 'jQuery(".spectrum-color-picker").spectrum({
   showInput: true,
   allowEmpty: true,
   showAlpha: true,
   showInitial: true,
   showInput: true,
   preferredFormat: "rgb",
   clickoutFiresChange: true,
   showButtons: false
 });';
 drupal_add_js($spectrum_js, array('type' => 'inline', 'scope' => 'footer'));

$msg_color = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_color' ) : variable_get( 'sidebar_msg_color' );

$form['group_sidebar_message']['sidebar_msg_color'] = array(
  '#type'          => 'textfield',
  '#title'         => t('Sidebar Message Color'),
  '#description'   => t("Color of the message"),
  '#default_value' => $msg_color,
  '#attributes' => array('class' => array('spectrum-color-picker')), 
  '#group' => t('Sidebar Message'),
);
