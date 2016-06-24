<?php
$view = new view();
$view->name = 'view_landing_videos';
$view->description = '';
$view->tag = 'default';
$view->base_table = 'field_collection_item';
$view->human_name = 'View Landing Videos';
$view->core = 7;
$view->api_version = '3.0';
$view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

/* Display: Master */
$handler = $view->new_display('default', 'Master', 'default');
$handler->display->display_options['use_more_always'] = FALSE;
$handler->display->display_options['access']['type'] = 'none';
$handler->display->display_options['cache']['type'] = 'none';
$handler->display->display_options['query']['type'] = 'views_query';
$handler->display->display_options['exposed_form']['type'] = 'basic';
$handler->display->display_options['pager']['type'] = 'none';
$handler->display->display_options['pager']['options']['offset'] = '0';
$handler->display->display_options['style_plugin'] = 'default';
$handler->display->display_options['row_plugin'] = 'fields';
/* Relationship: Field collection item: Entity with the Videos (field_videos_collection) */
$handler->display->display_options['relationships']['field_videos_collection_node']['id'] = 'field_videos_collection_node';
$handler->display->display_options['relationships']['field_videos_collection_node']['table'] = 'field_collection_item';
$handler->display->display_options['relationships']['field_videos_collection_node']['field'] = 'field_videos_collection_node';
$handler->display->display_options['relationships']['field_videos_collection_node']['required'] = TRUE;
/* Field: Field collection item: Video Id */
$handler->display->display_options['fields']['field_videos_collection_id']['id'] = 'field_videos_collection_id';
$handler->display->display_options['fields']['field_videos_collection_id']['table'] = 'field_data_field_videos_collection_id';
$handler->display->display_options['fields']['field_videos_collection_id']['field'] = 'field_videos_collection_id';
/* Field: Field collection item: Video TItle */
$handler->display->display_options['fields']['field_videos_collection_title']['id'] = 'field_videos_collection_title';
$handler->display->display_options['fields']['field_videos_collection_title']['table'] = 'field_data_field_videos_collection_title';
$handler->display->display_options['fields']['field_videos_collection_title']['field'] = 'field_videos_collection_title';
/* Field: Field collection item: Videos Description */
$handler->display->display_options['fields']['field_videos_collection_desc']['id'] = 'field_videos_collection_desc';
$handler->display->display_options['fields']['field_videos_collection_desc']['table'] = 'field_data_field_videos_collection_desc';
$handler->display->display_options['fields']['field_videos_collection_desc']['field'] = 'field_videos_collection_desc';

/* Display: Block */
$handler = $view->new_display('block', 'Block', 'block');
