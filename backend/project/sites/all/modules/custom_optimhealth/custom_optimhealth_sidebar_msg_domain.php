<?php
$batch['sidebar_msg_title'] = array(
    '#form' => array(
      '#title' => t('Sidebar Message Title'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the title of the sidebar message'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('sidebar_msg_title'), 
    '#variable' => 'sidebar_msg_title', 
    '#meta_description' => t('Put here the title of the sidebar message'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Sidebar Message'),
    '#module' => t('Domain Access'),
  );

$batch['sidebar_msg_btn_txt'] = array(
    '#form' => array(
      '#title' => t('Sidebar Message Button Link'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the Button Text'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('sidebar_msg_btn_txt'), 
    '#variable' => 'sidebar_msg_btn_txt', 
    '#meta_description' => t('Put here the Button Text'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Sidebar Message'),
    '#module' => t('Domain Access'),
  );

$batch['sidebar_msg_link'] = array(
    '#form' => array(
      '#title' => t('Sidebar Message Link'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the link of the message'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('sidebar_msg_link'), 
    '#variable' => 'sidebar_msg_link', 
    '#meta_description' => t('Put here the link of the message'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Sidebar Message'),
    '#module' => t('Domain Access'),
  );

$batch['sidebar_msg_desc'] = array(
    '#form' => array(
      '#title' => t('Sidebar Message'), 
      '#type' => 'textarea', 
      
      '#description' => t('Content of the sidebar message'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('sidebar_msg_desc'), 
    '#variable' => 'sidebar_msg_desc', 
    '#meta_description' => t('Content of the sidebar message'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Sidebar Message'),
    '#module' => t('Domain Access'),
  );

$batch['sidebar_msg_color'] = array(
    '#form' => array(
      '#title' => t('Sidebar Message Color'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Color of the message'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('sidebar_msg_color'), 
    '#variable' => 'sidebar_msg_color', 
    '#meta_description' => t('Color of the message'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Sidebar Message'),
    '#module' => t('Domain Access'),
  );

