<?php

/**
 * 
 *Preprocess of field accordion 
 * 
 */
function optimhealth_preprocess_field_accordion(&$vars){

	//Definition of the fields
	//Key is the name that will be used on the tpl the value is the name of the field in the cms
	$fields = array('accordion_text' =>'field_accordion_text', 'accordion_link'=>'field_accordion_link', 'accordion_image'=>'field_accordion_image', 'accordion_description'=>'field_accordion_description');
	optimhealth_def_tpl_var_field_collections($vars, 'accordion_items', 'field_accordion', $fields);
}

/**
 * 
 *Preprocess of field videos
 * 
 */
function optimhealth_preprocess_field_videos_collection(&$vars){

	//Definition of the fields
	//Key is the name that will be used on the tpl the value is the name of the field in the cms
	$fields = array('video_id' =>'field_videos_collection_id', 'video_title'=>'field_videos_collection_title', 'video_desc'=>'field_videos_collection_desc', 'video_img'=>'field_videos_collection_img');
	optimhealth_def_tpl_var_field_collections($vars, 'videos_items', 'field_videos_collection', $fields);
}


/**
 * 
 *Preprocess of field links
 * 
 */
function optimhealth_preprocess_field_links(&$vars){

	//Definition of the fields
	//Key is the name that will be used on the tpl the value is the name of the field in the cms
	$fields = array('title' =>'field_links_title', 'link'=>'field_links_link', 'target'=>'field_links_target', 'description'=>'field_links_description');
	optimhealth_def_tpl_var_field_collections($vars, 'links_items', 'field_links', $fields);
}


/**
 * 
 *Preprocess of field service multilevel links
 * 
 */
function optimhealth_preprocess_field_service_multilevel_links(&$vars){
	//Definition of the fields
	//Key is the name that will be used on the tpl the value is the name of the field in the cms
	$fields = array('title' =>'field_sm_links_title', 'link'=>'field_sm_links_link', 'target'=>'field_sm_links_target', 'description'=>'field_sm_links_description');
	optimhealth_def_tpl_var_field_collections($vars, 'links_items', 'field_service_multilevel_links', $fields);
}

/**
 * 
 *Preprocess of field bredcrumbs
 * 
 */
function optimhealth_preprocess_field_breadcrumbs(&$vars){
	$fields = array('breadcrumb_text' =>'field_breadcrumb_text', 'breadcrumb_link'=>'field_breadcrumb_link', 'is_selected'=>'field_breadcrumb_is_selected');
	optimhealth_def_tpl_var_field_collections($vars, 'breadcrumbs', 'field_breadcrumbs', $fields);
}


/**
 * 
 *Preprocess of field services group
 * 
 */
function optimhealth_preprocess_field_services_group(&$vars){
	$fields = array('node_id' =>'nid','image' =>'field_service_image', 'title'=>'title', 'excerpt'=>'field_service_excerpt');
	optimhealth_def_tpl_var_entities_collection($vars, 'services', 'field_services_group', $fields);	
	optimhealth_patch_title_field($vars, 'services'); /**patch**/
}

