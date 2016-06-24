<?php 
$view = new view();
$view->name = 'view_landing_news';
$view->description = '';
$view->tag = 'default';
$view->base_table = 'node';
$view->human_name = 'View Landing News';
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
/* Field: Content: Image */
$handler->display->display_options['fields']['field_news_img']['id'] = 'field_news_img';
$handler->display->display_options['fields']['field_news_img']['table'] = 'field_data_field_news_img';
$handler->display->display_options['fields']['field_news_img']['field'] = 'field_news_img';
$handler->display->display_options['fields']['field_news_img']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_news_img']['settings'] = array(
  'image_style' => '',
  'image_link' => '',
);
/* Field: Content: Path */
$handler->display->display_options['fields']['path']['id'] = 'path';
$handler->display->display_options['fields']['path']['table'] = 'node';
$handler->display->display_options['fields']['path']['field'] = 'path';
/* Field: Content: Publish Date */
$handler->display->display_options['fields']['field_news_publish_date']['id'] = 'field_news_publish_date';
$handler->display->display_options['fields']['field_news_publish_date']['table'] = 'field_data_field_news_publish_date';
$handler->display->display_options['fields']['field_news_publish_date']['field'] = 'field_news_publish_date';
$handler->display->display_options['fields']['field_news_publish_date']['settings'] = array(
  'format_type' => 'long',
  'fromto' => 'both',
  'multiple_number' => '',
  'multiple_from' => '',
  'multiple_to' => '',
  'show_remaining_days' => 0,
  'show_repeat_rule' => 'show',
);
/* Field: Content: Excerpt */
$handler->display->display_options['fields']['field_news_excerpt']['id'] = 'field_news_excerpt';
$handler->display->display_options['fields']['field_news_excerpt']['table'] = 'field_data_field_news_excerpt';
$handler->display->display_options['fields']['field_news_excerpt']['field'] = 'field_news_excerpt';
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
  'news' => 'news',
);

/* Display: Block */
$handler = $view->new_display('block', 'Block', 'block');
