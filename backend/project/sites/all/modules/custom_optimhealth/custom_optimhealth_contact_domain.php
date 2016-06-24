<?php 
$batch['contact_title'] = array(
    '#form' => array(
      '#title' => t('Contact Title'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Contact Title'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_title'), 
    '#variable' => 'contact_title', 
    '#meta_description' => t('Contact Title'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );
$batch['contact_description'] = array(
    '#form' => array(
      '#title' => t('Contact Description'), 
      '#type' => 'textarea', 
      
      '#description' => t('Contact Description'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_description'), 
    '#variable' => 'contact_description', 
    '#meta_description' => t('Contact Description'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );
$batch['contact_organization'] = array(
    '#form' => array(
      '#title' => t('Contact Organization Name'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('What is the name of the organization'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_organization'), 
    '#variable' => 'contact_organization', 
    '#meta_description' => t('What is the name of the organization'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_address_1'] = array(
    '#form' => array(
      '#title' => t('Contact Address 01'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the address 1'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_address_1'), 
    '#variable' => 'contact_address_1', 
    '#meta_description' => t('Put here the address 1'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_address_2'] = array(
    '#form' => array(
      '#title' => t('Contact Address 02'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the address 2'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_address_2'), 
    '#variable' => 'contact_address_2', 
    '#meta_description' => t('Put here the address 2'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_international_phone'] = array(
    '#form' => array(
      '#title' => t('Contact International Phone'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the international phone number'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_international_phone'), 
    '#variable' => 'contact_international_phone', 
    '#meta_description' => t('Put here the international phone number'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_phone'] = array(
    '#form' => array(
      '#title' => t('Contact Phone'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the phone number'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_phone'), 
    '#variable' => 'contact_phone', 
    '#meta_description' => t('Put here the phone number'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_email'] = array(
    '#form' => array(
      '#title' => t('Contact Email'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('Put here the email'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_email'), 
    '#variable' => 'contact_email', 
    '#meta_description' => t('Put here the email'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_schedule'] = array(
    '#form' => array(
      '#title' => t('Contact Schedule'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('What is the available schedule'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_schedule'), 
    '#variable' => 'contact_schedule', 
    '#meta_description' => t('What is the available schedule'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_card'] = array(
    '#form' => array(
      '#type'              => 'managed_file',
      '#title'             => t('Contact VCF Contact File'),
      '#size'              => 40,
      '#upload_validators' => array(
                                'file_validate_extensions' => array('vcf')
                              ), 
      '#description'       => t("Add here the contact *.vcf file to be displayed in the main contact form."),
      '#upload_location'   => 'public://',
      '#group'             => t('Site Contact'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_card'), 
    '#variable' => 'contact_card', 
    '#meta_description' => t('Add here the contact *.vcf file to be displayed in the main contact form.'), 
    '#data_type' => 'binary', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );

  $batch['contact_email_subject'] = array(
    '#form' => array(
      '#title' => t('Share Email Subject'), 
      '#type' => 'textfield', 
      '#size' => 40, 
      '#maxlength' => 255, 
      '#description' => t('This text will be appended at the end of  subject content to share.'),
    ), 
    '#permission' => 'administer site configuration', 
    '#domain_action' => 'domain_conf', 
    '#system_default' => variable_get('contact_email_subject'), 
    '#variable' => 'contact_email_subject', 
    '#meta_description' => t('This text will be appended at the end of  subject content to share.'), 
    '#data_type' => 'string', 
    '#weight' => -8, 
    '#update_all' => TRUE, 
    '#group' => t('Site Contact'),
    '#module' => t('Domain Access'),
  );