<?php 

$form['group_contact'] = array(
      '#type' => 'fieldset',
      '#title' => t('Contact Information'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,  
    );
    $form['group_contact']['contact_title'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Contact Title'),
      '#description'   => t("Contact Title"),
      '#default_value' => variable_get('contact_title'),
      '#group' => t('Site Contact'),
    );
    $form['group_contact']['contact_description'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Contact Title'),
        '#description'   => t("Contact Title"),
        '#default_value' => variable_get('contact_description'),
        '#group' => t('Site Contact'),
        
      );
    $form['group_contact']['contact_organization'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Contact Organization Name'),
      '#description'   => t("What is the name of the organization"),
      '#default_value' => variable_get('contact_organization'),
      '#group' => t('Site Contact'),
    );
    $form['group_contact']['contact_address_1'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Contact Address 01'),
      '#description'   => t("Put here the address 1"),
      '#default_value' => variable_get('contact_address_1'),
      '#group' => t('Site Contact'),
    );
    $form['group_contact']['contact_address_2'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Contact Address 02'),
      '#description'   => t("Put here the address 2"),
      '#default_value' => variable_get('contact_address_2'),
      '#group' => t('Site Contact'),
    );

    $form['group_contact']['contact_international_phone'] = array(
      '#type'          => 'textfield',
      '#title'         => t('International Phone'),
      '#description'   => t("Put here the international phone number"),
      '#default_value' => variable_get('contact_international_phone'),
      '#group' => t('Site Contact'),
    );

    $form['group_contact']['contact_phone'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Contact Phone'),
      '#description'   => t("Put here the phone number"),
      '#default_value' => variable_get('contact_phone'),
      '#group' => t('Site Contact'),
    );

    $form['group_contact']['contact_email'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Contact Email'),
      '#description'   => t("Put here the email"),
      '#default_value' => variable_get('contact_email'),
      '#group' => t('Site Contact'),
    );

    $form['group_contact']['contact_schedule'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Contact Schedule'),
      '#description'   => t("Organization Schedule"),
      '#default_value' => variable_get('contact_schedule'),
      '#group' => t('Site Contact'),
    );

    $form['group_contact']['contact_card'] = array(
      '#type'          => 'managed_file',
      '#title'         => t('Contact VCF Contact File'),
      '#size'          => 40,
      '#upload_validators'       => array(
      'file_validate_extensions' => array('vcf')), 
      '#description'              => t("Add here the contact *.vcf file to be displayed in the main contact form."),
      '#default_value'   => variable_get('contact_card'),
      '#upload_location' => 'public://',
      '#group' => t('Site Contact'),
    );

    $form['group_contact']['contact_email_subject'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Share Email Subject'),
      '#description'   => t("This text will be appended at the end of  subject content to share. "),
      '#default_value' => variable_get('contact_email_subject'),
      '#group' => t('Site Contact'),
    );