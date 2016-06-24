<?php 

$batch['about_title'] = array(
    '#form' => array(
      '#title' => t('About Us Title'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('About Us Title'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('about_title'), 
    '#variable' => 'about_title', 
    '#meta_description' => t('PAbout Us Title'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site About'),
    '#module' => t('Domain Access'),
  );
  
$batch['about_info'] = array(
    '#form' => array(
      '#title' => t('About Us Info'), 
      '#type' => 'textarea', 
      
      '#description' => t('About Us of the Site'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('about_info'), 
    '#variable' => 'about_info', 
    '#meta_description' => t('About Us of the Site'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site About'),
    '#module' => t('Domain Access'),
  );

$batch['home_text'] = array(
    '#form' => array(
      '#title' => t('Home Text'), 
      '#type' => 'textarea', 
      
      '#description' => t('Home Text'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('home_text'), 
    '#variable' => 'home_text', 
    '#meta_description' => t('Home Text'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site About'),
    '#module' => t('Domain Access'),
  );




$batch['logo_color'] = array(
    '#form' => array(
      '#type' => 'managed_file',
      '#name' => 'custom_content_block_image',
      '#title' => t('Logo Color'),
      '#size' => 40,
      '#upload_validators' => array(
        'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
      '#description'   => t("Logo Color"),
      '#group' => t('Site About'),
      '#upload_location' => 'public://site_images/',
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('logo_color'), 
    '#variable' => 'logo_color', 
    '#meta_description' => t('Logo Color'), 
    '#data_type' => 'binary', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site About'),
    '#module' => t('Domain Access'),
  );

$batch['logo_mobile_color'] = array(
    '#form' => array(
      '#type' => 'managed_file',
      '#name' => 'custom_content_block_image',
      '#title' => t('Logo Mobile Color'),
      '#size' => 40,
      '#upload_validators' => array(
        'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
      '#description'   => t("Logo Mobile Color"),
      '#group' => t('Site About'),
      '#upload_location' => 'public://site_images/',
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('logo_mobile_color'), 
    '#variable' => 'logo_mobile_color', 
    '#meta_description' => t('Logo Mobile Color'), 
    '#data_type' => 'binary', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site About'),
    '#module' => t('Domain Access'),
  );



$batch['logo_white'] = array(
    '#form' => array(
      '#type' => 'managed_file',
      '#name' => 'custom_content_block_image',
      '#title' => t('Logo White'),
      '#size' => 40,
      '#upload_validators' => array(
        'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
      '#description'   => t("Logo White"),
      '#group' => t('Site About'),
      '#upload_location' => 'public://site_images/',
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('logo_white'), 
    '#variable' => 'logo_white', 
    '#meta_description' => t('Logo Color'), 
    '#data_type' => 'binary', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site About'),
    '#module' => t('Domain Access'),
  );

$batch['logo_mobile_white'] = array(
    '#form' => array(
      '#type' => 'managed_file',
      '#name' => 'custom_content_block_image',
      '#title' => t('Logo White'),
      '#size' => 40,
      '#upload_validators' => array(
        'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
      '#description'   => t("Logo White"),
      '#group' => t('Site About'),
      '#upload_location' => 'public://site_images/',
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('logo_mobile_white'), 
    '#variable' => 'logo_mobile_white', 
    '#meta_description' => t('Logo Mobile White'), 
    '#data_type' => 'binary', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site About'),
    '#module' => t('Domain Access'),
  );