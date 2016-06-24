<?php 
$view = new view();
$view->name = 'view_landing_facility';
$view->description = '';
$view->tag = 'default';
$view->base_table = 'node';
$view->human_name = 'View Landing Facility';
$view->core = 7;
$view->api_version = '3.0';
$view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

/* Display: Master */
$handler = $view->new_display('default', 'Master', 'default');
$handler->display->display_options['use_more_always'] = FALSE;
$handler->display->display_options['access']['type'] = 'perm';
$handler->display->display_options['cache']['type'] = 'none';
$handler->display->display_options['query']['type'] = 'views_query';
$handler->display->display_options['exposed_form']['type'] = 'basic';
$handler->display->display_options['pager']['type'] = 'none';
$handler->display->display_options['pager']['options']['offset'] = '0';
$handler->display->display_options['style_plugin'] = 'default';
$handler->display->display_options['row_plugin'] = 'fields';
/* Field: Content: Title */
$handler->display->display_options['fields']['title']['id'] = 'title';
$handler->display->display_options['fields']['title']['table'] = 'node';
$handler->display->display_options['fields']['title']['field'] = 'title';
$handler->display->display_options['fields']['title']['label'] = '';
$handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
$handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
/* Field: Content: Nid */
$handler->display->display_options['fields']['nid']['id'] = 'nid';
$handler->display->display_options['fields']['nid']['table'] = 'node';
$handler->display->display_options['fields']['nid']['field'] = 'nid';
/* Field: Content: Excerpt */
$handler->display->display_options['fields']['field_facility_excerpt']['id'] = 'field_facility_excerpt';
$handler->display->display_options['fields']['field_facility_excerpt']['table'] = 'field_data_field_facility_excerpt';
$handler->display->display_options['fields']['field_facility_excerpt']['field'] = 'field_facility_excerpt';
/* Field: Content: Image */
$handler->display->display_options['fields']['field_facility_image']['id'] = 'field_facility_image';
$handler->display->display_options['fields']['field_facility_image']['table'] = 'field_data_field_facility_image';
$handler->display->display_options['fields']['field_facility_image']['field'] = 'field_facility_image';
$handler->display->display_options['fields']['field_facility_image']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_facility_image']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Sort criterion: Content: Publish Date (field_news_publish_date) */
$handler->display->display_options['sorts']['field_news_publish_date_value']['id'] = 'field_news_publish_date_value';
$handler->display->display_options['sorts']['field_news_publish_date_value']['table'] = 'field_data_field_news_publish_date';
$handler->display->display_options['sorts']['field_news_publish_date_value']['field'] = 'field_news_publish_date_value';
$handler->display->display_options['sorts']['field_news_publish_date_value']['order'] = 'DESC';
/* Filter criterion: Content: Published */
$handler->display->display_options['filters']['status']['id'] = 'status';
$handler->display->display_options['filters']['status']['table'] = 'node';
$handler->display->display_options['filters']['status']['field'] = 'status';
$handler->display->display_options['filters']['status']['value'] = 1;
$handler->display->display_options['filters']['status']['group'] = 1;
$handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
/* Filter criterion: Content: Type */
$handler->display->display_options['filters']['type']['id'] = 'type';
$handler->display->display_options['filters']['type']['table'] = 'node';
$handler->display->display_options['filters']['type']['field'] = 'type';
$handler->display->display_options['filters']['type']['value'] = array(
  'facility' => 'facility',
);

/* Display: Block */
$handler = $view->new_display('block', 'Block', 'block');
