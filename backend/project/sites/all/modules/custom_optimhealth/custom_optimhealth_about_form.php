<?php 
  $form['group_about'] = array(
        '#type' => 'fieldset',
        '#title' => t('About Us Information'),
        '#collapsible' => TRUE,
        '#collapsed' => TRUE,  
      );

    $form['group_about']['about_title'] = array(
        '#type'          => 'textfield',
        '#title'         => t('About Us Title'),
        '#description'   => t("About Us Title"),
        '#default_value' => variable_get('about_title'),
        '#group' => t('Site About'),
      );

      $form['group_about']['about_info'] = array(
        '#type'          => 'textarea',
        '#title'         => t('About Us Info'),
        '#description'   => t("About Us of the Site"),
        '#default_value' => variable_get('about_info'),
        '#group' => t('Site About'),
        
      );

     
      $form['group_about']['home_text'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Home Text'),
        '#description'   => t("Home Text"),
        '#default_value' => variable_get('home_text'),
        '#group' => t('Site About'),
        
      );

      $form['group_about']['logo_color'] = array(
        '#type' => 'managed_file',
        '#name' => 'custom_content_block_image',
        '#title' => t('Logo Color'),
        '#size' => 40,
        '#upload_validators' => array(
          'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
        '#description'   => t("Logo Color"),
        '#default_value' => variable_get('logo_color'),
        '#group' => t('Site About'),
        '#upload_location' => 'public://site_images/',
        
      );
      $form['group_about']['logo_mobile_color'] = array(
        '#type' => 'managed_file',
        '#name' => 'custom_content_block_image',
        '#title' => t('Logo Mobile Color'),
        '#size' => 40,
        '#upload_validators' => array(
          'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
        '#description'   => t("Logo Mobile Color"),
        '#default_value' => variable_get('logo_mobile_color'),
        '#group' => t('Site About'),
        '#upload_location' => 'public://site_images/',
        
      );

      $form['group_about']['logo_white'] = array(
        '#type' => 'managed_file',
        '#name' => 'custom_content_block_image',
        '#title' => t('Logo White'),
        '#size' => 40,
        '#upload_validators' => array(
          'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
        '#description'   => t("Logo White"),
        '#default_value' => variable_get('logo_white'),
        '#group' => t('Site About'),
        '#upload_location' => 'public://site_images/',
        
      );
      $form['group_about']['logo_mobile_white'] = array(
        '#type' => 'managed_file',
        '#name' => 'custom_content_block_image',
        '#title' => t('Logo White'),
        '#size' => 40,
        '#upload_validators' => array(
          'file_validate_extensions' => array('jpg jpeg gif png txt doc xls pdf ppt pps odt ods odp svg')), 
        '#description'   => t("Logo White"),
        '#default_value' => variable_get('logo_white'),
        '#group' => t('Site About'),
        '#upload_location' => 'public://site_images/',
        
      );

