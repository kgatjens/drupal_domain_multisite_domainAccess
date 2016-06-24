<?php
$view = new view();
$view->name = 'view_content_node';
$view->description = '';
$view->tag = 'default';
$view->base_table = 'node';
$view->human_name = 'View Content Node';
$view->core = 7;
$view->api_version = '3.0';
$view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

/* Display: Master */
$handler = $view->new_display('default', 'Master', 'default');
$handler->display->display_options['title'] = 'View Content Node';
$handler->display->display_options['use_more_always'] = FALSE;
$handler->display->display_options['access']['type'] = 'perm';
$handler->display->display_options['cache']['type'] = 'none';
$handler->display->display_options['query']['type'] = 'views_query';
$handler->display->display_options['exposed_form']['type'] = 'basic';
$handler->display->display_options['pager']['type'] = 'some';
$handler->display->display_options['pager']['options']['items_per_page'] = '1';
$handler->display->display_options['style_plugin'] = 'views_json';
$handler->display->display_options['style_options']['plaintext_output'] = 0;
$handler->display->display_options['style_options']['remove_newlines'] = 0;
$handler->display->display_options['style_options']['jsonp_prefix'] = '';
$handler->display->display_options['style_options']['using_views_api_mode'] = 0;
$handler->display->display_options['style_options']['object_arrays'] = 0;
$handler->display->display_options['style_options']['numeric_strings'] = 0;
$handler->display->display_options['style_options']['bigint_string'] = 0;
$handler->display->display_options['style_options']['pretty_print'] = 0;
$handler->display->display_options['style_options']['unescaped_slashes'] = 1;
$handler->display->display_options['style_options']['unescaped_unicode'] = 1;
$handler->display->display_options['style_options']['char_encoding'] = array(
  'JSON_HEX_TAG' => 'JSON_HEX_TAG',
);
/* Field: Content: Title */
$handler->display->display_options['fields']['title']['id'] = 'title';
$handler->display->display_options['fields']['title']['table'] = 'node';
$handler->display->display_options['fields']['title']['field'] = 'title';
$handler->display->display_options['fields']['title']['label'] = 'title';
$handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
$handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
$handler->display->display_options['fields']['title']['alter']['strip_tags'] = TRUE;
$handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
$handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
$handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
/* Field: Content: Image */
$handler->display->display_options['fields']['field_testimonials_image']['id'] = 'field_testimonials_image';
$handler->display->display_options['fields']['field_testimonials_image']['table'] = 'field_data_field_testimonials_image';
$handler->display->display_options['fields']['field_testimonials_image']['field'] = 'field_testimonials_image';
$handler->display->display_options['fields']['field_testimonials_image']['label'] = 'image';
$handler->display->display_options['fields']['field_testimonials_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_testimonials_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_testimonials_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Image */
$handler->display->display_options['fields']['field_treatment_image']['id'] = 'field_treatment_image';
$handler->display->display_options['fields']['field_treatment_image']['table'] = 'field_data_field_treatment_image';
$handler->display->display_options['fields']['field_treatment_image']['field'] = 'field_treatment_image';
$handler->display->display_options['fields']['field_treatment_image']['label'] = 'image';
$handler->display->display_options['fields']['field_treatment_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_treatment_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_treatment_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Image */
$handler->display->display_options['fields']['field_article_image']['id'] = 'field_article_image';
$handler->display->display_options['fields']['field_article_image']['table'] = 'field_data_field_article_image';
$handler->display->display_options['fields']['field_article_image']['field'] = 'field_article_image';
$handler->display->display_options['fields']['field_article_image']['label'] = 'image';
$handler->display->display_options['fields']['field_article_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_article_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_article_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Image */
$handler->display->display_options['fields']['field_location_image']['id'] = 'field_location_image';
$handler->display->display_options['fields']['field_location_image']['table'] = 'field_data_field_location_image';
$handler->display->display_options['fields']['field_location_image']['field'] = 'field_location_image';
$handler->display->display_options['fields']['field_location_image']['label'] = 'image';
$handler->display->display_options['fields']['field_location_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_location_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_location_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Image */
$handler->display->display_options['fields']['field_illness_image']['id'] = 'field_illness_image';
$handler->display->display_options['fields']['field_illness_image']['table'] = 'field_data_field_illness_image';
$handler->display->display_options['fields']['field_illness_image']['field'] = 'field_illness_image';
$handler->display->display_options['fields']['field_illness_image']['label'] = 'image';
$handler->display->display_options['fields']['field_illness_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_illness_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_illness_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Body */
$handler->display->display_options['fields']['field_treatment_body']['id'] = 'field_treatment_body';
$handler->display->display_options['fields']['field_treatment_body']['table'] = 'field_data_field_treatment_body';
$handler->display->display_options['fields']['field_treatment_body']['field'] = 'field_treatment_body';
$handler->display->display_options['fields']['field_treatment_body']['label'] = 'body';
$handler->display->display_options['fields']['field_treatment_body']['hide_empty'] = TRUE;
/* Field: Content: Body */
$handler->display->display_options['fields']['field_article_body']['id'] = 'field_article_body';
$handler->display->display_options['fields']['field_article_body']['table'] = 'field_data_field_article_body';
$handler->display->display_options['fields']['field_article_body']['field'] = 'field_article_body';
$handler->display->display_options['fields']['field_article_body']['label'] = 'body';
$handler->display->display_options['fields']['field_article_body']['hide_empty'] = TRUE;
/* Field: Content: Body */
$handler->display->display_options['fields']['field_testimonials_body']['id'] = 'field_testimonials_body';
$handler->display->display_options['fields']['field_testimonials_body']['table'] = 'field_data_field_testimonials_body';
$handler->display->display_options['fields']['field_testimonials_body']['field'] = 'field_testimonials_body';
$handler->display->display_options['fields']['field_testimonials_body']['label'] = 'body';
$handler->display->display_options['fields']['field_testimonials_body']['hide_empty'] = TRUE;
/* Field: Content: Body */
$handler->display->display_options['fields']['field_illness_body']['id'] = 'field_illness_body';
$handler->display->display_options['fields']['field_illness_body']['table'] = 'field_data_field_illness_body';
$handler->display->display_options['fields']['field_illness_body']['field'] = 'field_illness_body';
$handler->display->display_options['fields']['field_illness_body']['label'] = 'body';
$handler->display->display_options['fields']['field_illness_body']['hide_empty'] = TRUE;
/* Field: Content: Custom Scripts */
$handler->display->display_options['fields']['field_article_custom_scripts']['id'] = 'field_article_custom_scripts';
$handler->display->display_options['fields']['field_article_custom_scripts']['table'] = 'field_data_field_article_custom_scripts';
$handler->display->display_options['fields']['field_article_custom_scripts']['field'] = 'field_article_custom_scripts';
$handler->display->display_options['fields']['field_article_custom_scripts']['label'] = 'custom_scripts';
$handler->display->display_options['fields']['field_article_custom_scripts']['hide_empty'] = TRUE;
/* Field: Content: Custom Scripts */
$handler->display->display_options['fields']['field_treatment_custom_scripts']['id'] = 'field_treatment_custom_scripts';
$handler->display->display_options['fields']['field_treatment_custom_scripts']['table'] = 'field_data_field_treatment_custom_scripts';
$handler->display->display_options['fields']['field_treatment_custom_scripts']['field'] = 'field_treatment_custom_scripts';
$handler->display->display_options['fields']['field_treatment_custom_scripts']['label'] = 'custom_scripts';
$handler->display->display_options['fields']['field_treatment_custom_scripts']['hide_empty'] = TRUE;
/* Field: Content: Custom Scripts */
$handler->display->display_options['fields']['field_illness_custom_scripts']['id'] = 'field_illness_custom_scripts';
$handler->display->display_options['fields']['field_illness_custom_scripts']['table'] = 'field_data_field_illness_custom_scripts';
$handler->display->display_options['fields']['field_illness_custom_scripts']['field'] = 'field_illness_custom_scripts';
$handler->display->display_options['fields']['field_illness_custom_scripts']['label'] = 'custom_scripts';
$handler->display->display_options['fields']['field_illness_custom_scripts']['hide_empty'] = TRUE;
/* Field: Content: Document */
$handler->display->display_options['fields']['field_article_document']['id'] = 'field_article_document';
$handler->display->display_options['fields']['field_article_document']['table'] = 'field_data_field_article_document';
$handler->display->display_options['fields']['field_article_document']['field'] = 'field_article_document';
$handler->display->display_options['fields']['field_article_document']['label'] = 'file_url';
$handler->display->display_options['fields']['field_article_document']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_article_document']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_article_document']['type'] = 'file_url_plain';
/* Field: Content: Body */
$handler->display->display_options['fields']['field_service_body']['id'] = 'field_service_body';
$handler->display->display_options['fields']['field_service_body']['table'] = 'field_data_field_service_body';
$handler->display->display_options['fields']['field_service_body']['field'] = 'field_service_body';
$handler->display->display_options['fields']['field_service_body']['label'] = 'body';
$handler->display->display_options['fields']['field_service_body']['hide_empty'] = TRUE;
/* Field: Content: Body */
$handler->display->display_options['fields']['field_facility_body']['id'] = 'field_facility_body';
$handler->display->display_options['fields']['field_facility_body']['table'] = 'field_data_field_facility_body';
$handler->display->display_options['fields']['field_facility_body']['field'] = 'field_facility_body';
$handler->display->display_options['fields']['field_facility_body']['label'] = 'body';
$handler->display->display_options['fields']['field_facility_body']['hide_empty'] = TRUE;
/* Field: Content: Image */
$handler->display->display_options['fields']['field_facility_image']['id'] = 'field_facility_image';
$handler->display->display_options['fields']['field_facility_image']['table'] = 'field_data_field_facility_image';
$handler->display->display_options['fields']['field_facility_image']['field'] = 'field_facility_image';
$handler->display->display_options['fields']['field_facility_image']['label'] = 'image';
$handler->display->display_options['fields']['field_facility_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_facility_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_facility_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Image */
$handler->display->display_options['fields']['field_service_image']['id'] = 'field_service_image';
$handler->display->display_options['fields']['field_service_image']['table'] = 'field_data_field_service_image';
$handler->display->display_options['fields']['field_service_image']['field'] = 'field_service_image';
$handler->display->display_options['fields']['field_service_image']['label'] = 'image';
$handler->display->display_options['fields']['field_service_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_service_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_service_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Body */
$handler->display->display_options['fields']['field_tools_tips_body']['id'] = 'field_tools_tips_body';
$handler->display->display_options['fields']['field_tools_tips_body']['table'] = 'field_data_field_tools_tips_body';
$handler->display->display_options['fields']['field_tools_tips_body']['field'] = 'field_tools_tips_body';
$handler->display->display_options['fields']['field_tools_tips_body']['label'] = 'body';
$handler->display->display_options['fields']['field_tools_tips_body']['hide_empty'] = TRUE;
/* Field: Content: Document */
$handler->display->display_options['fields']['field_tools_tips_document']['id'] = 'field_tools_tips_document';
$handler->display->display_options['fields']['field_tools_tips_document']['table'] = 'field_data_field_tools_tips_document';
$handler->display->display_options['fields']['field_tools_tips_document']['field'] = 'field_tools_tips_document';
$handler->display->display_options['fields']['field_tools_tips_document']['label'] = 'document';
$handler->display->display_options['fields']['field_tools_tips_document']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_tools_tips_document']['click_sort_column'] = 'fid';
/* Field: Content: Image */
$handler->display->display_options['fields']['field_tools_tips_image']['id'] = 'field_tools_tips_image';
$handler->display->display_options['fields']['field_tools_tips_image']['table'] = 'field_data_field_tools_tips_image';
$handler->display->display_options['fields']['field_tools_tips_image']['field'] = 'field_tools_tips_image';
$handler->display->display_options['fields']['field_tools_tips_image']['label'] = 'image';
$handler->display->display_options['fields']['field_tools_tips_image']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_tools_tips_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_tools_tips_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Body */
$handler->display->display_options['fields']['field_patient_tool_body']['id'] = 'field_patient_tool_body';
$handler->display->display_options['fields']['field_patient_tool_body']['table'] = 'field_data_field_patient_tool_body';
$handler->display->display_options['fields']['field_patient_tool_body']['field'] = 'field_patient_tool_body';
$handler->display->display_options['fields']['field_patient_tool_body']['label'] = 'body';
$handler->display->display_options['fields']['field_patient_tool_body']['hide_empty'] = TRUE;
/* Field: Content: Document */
$handler->display->display_options['fields']['field_patient_tool_document']['id'] = 'field_patient_tool_document';
$handler->display->display_options['fields']['field_patient_tool_document']['table'] = 'field_data_field_patient_tool_document';
$handler->display->display_options['fields']['field_patient_tool_document']['field'] = 'field_patient_tool_document';
$handler->display->display_options['fields']['field_patient_tool_document']['label'] = 'file_url';
$handler->display->display_options['fields']['field_patient_tool_document']['hide_empty'] = TRUE;
$handler->display->display_options['fields']['field_patient_tool_document']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_patient_tool_document']['type'] = 'file_url_plain';
/* Sort criterion: Content: Post date */
$handler->display->display_options['sorts']['created']['id'] = 'created';
$handler->display->display_options['sorts']['created']['table'] = 'node';
$handler->display->display_options['sorts']['created']['field'] = 'created';
$handler->display->display_options['sorts']['created']['order'] = 'DESC';
/* Filter criterion: Content: Published */
$handler->display->display_options['filters']['status']['id'] = 'status';
$handler->display->display_options['filters']['status']['table'] = 'node';
$handler->display->display_options['filters']['status']['field'] = 'status';
$handler->display->display_options['filters']['status']['value'] = 1;
$handler->display->display_options['filters']['status']['group'] = 1;
$handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
/* Filter criterion: Content: Nid */
$handler->display->display_options['filters']['nid']['id'] = 'nid';
$handler->display->display_options['filters']['nid']['table'] = 'node';
$handler->display->display_options['filters']['nid']['field'] = 'nid';
$handler->display->display_options['filters']['nid']['exposed'] = TRUE;
$handler->display->display_options['filters']['nid']['expose']['operator_id'] = 'nid_op';
$handler->display->display_options['filters']['nid']['expose']['label'] = 'node';
$handler->display->display_options['filters']['nid']['expose']['operator'] = 'nid_op';
$handler->display->display_options['filters']['nid']['expose']['identifier'] = 'node';
$handler->display->display_options['filters']['nid']['expose']['remember_roles'] = array(
  2 => '2',
  1 => 0,
  3 => 0,
);

/* Display: Page */
$handler = $view->new_display('page', 'Page', 'page');
$handler->display->display_options['path'] = 'content-result';

