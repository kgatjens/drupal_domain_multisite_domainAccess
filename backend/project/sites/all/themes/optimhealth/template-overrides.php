<?php

/**
 * 
 * Preprocess for node landing
 * 
 */
function optimhealth_preprocess_node_landing_page(&$vars) {
	if (isset($vars['node'])) {
		
		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_single_value($vars, 'page_type', 'field_landing_type');
		optimhealth_def_tpl_var_single_value($vars, 'is_spine', 'field_landing_is_spine');
		optimhealth_def_tpl_var_single_value($vars, 'has_grouping', 'field_landing_has_grouping');
		optimhealth_def_tpl_var_single_image($vars, 'image', 'field_landing_background_image');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'introduction_text', 'field_landing_introduction_text');
		optimhealth_def_tpl_var_single_value($vars, 'headline_title', 'field_landing_headline_title');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'headline_text', 'field_landing_headline_text');
		optimhealth_def_tpl_var_single_image($vars, 'headline_image', 'field_landing_headline_image');
		optimhealth_def_tpl_var_single_value($vars, 'headline_link', 'field_landing_headline_link');
		optimhealth_preprocess_field_accordion($vars);
		optimhealth_preprocess_field_videos_collection($vars);
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for node news
 * 
 */
function optimhealth_preprocess_node_news(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_date_value($vars, 'date', 'field_news_publish_date', 'm/d/Y');
		optimhealth_def_tpl_var_date_value($vars, 'date_string', 'field_news_publish_date', 'F j, Y');
		optimhealth_def_tpl_var_single_image($vars, 'image', 'field_news_img');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'left_text', 'field_news_left_text');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'right_text', 'field_news_right_text');
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}


/**
 * 
 * Preprocess for node careers
 * 
 */
function optimhealth_preprocess_node_careers(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_date_value($vars, 'date', 'field_careers_date', 'm/d/Y');
		optimhealth_def_tpl_var_date_value($vars, 'date_string', 'field_careers_date', 'F j, Y');
		optimhealth_def_tpl_var_single_image($vars, 'image', 'field_careers_image');
		optimhealth_def_tpl_var_single_image($vars, 'related_file', 'field_careers_related_file');
	
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'left_text', 'field_careers_left_text');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'right_text', 'field_careers_right_text');
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for node research
 * 
 */
function optimhealth_preprocess_node_research(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_date_value($vars, 'date', 'field_research_date', 'm/d/Y');
		optimhealth_def_tpl_var_date_value($vars, 'date_string', 'field_research_date', 'F j, Y');
		optimhealth_def_tpl_var_single_image($vars, 'image', 'field_research_image');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'left_text', 'field_research_left_text');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'right_text', 'field_research_right_text');
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for node provider
 * 
 */
function optimhealth_preprocess_node_provider(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'left_text', 'field_provider_left_column');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'right_text', 'field_provider_right_column');
		optimhealth_def_tpl_var_multiple_values_file($vars, 'provider_files', 'field_provider_file' );
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for node patient support
 * 
 */
function optimhealth_preprocess_node_patient_support(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'intro_text', 'field_patient_support_intro_text');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'column_1', 'field_patient_support_column_1');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'column_2', 'field_patient_support_column_2');
		optimhealth_preprocess_field_links($vars);
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for node patient support
 * 
 */
function optimhealth_preprocess_node_services_group(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_single_value($vars, 'introduction_text', 'field_intro_text_services_group');
		optimhealth_preprocess_field_services_group($vars);
	}
}

/**
 * 
 * Preprocess for node patient support
 * 
 */
function optimhealth_preprocess_node_service_multilevel(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_single_value($vars, 'page_type', 'field_landing_type');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'intro_text', 'field_service_multilevel_it');
		optimhealth_preprocess_field_service_multilevel_links($vars);
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for node work_comp
 * 
 */
 function optimhealth_preprocess_node_work_comp(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'body', 'field_work_comp_body');
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for node profile page
 * 
 */
 function optimhealth_preprocess_node_profile_page(&$vars) {
	if (isset($vars['node'])) {

		//get values from all the fields
		optimhealth_def_tpl_var_single_value($vars, 'title', 'title');
		optimhealth_def_tpl_var_single_wysiwyg_value($vars, 'body', 'field_profile_body_content');
		optimhealth_def_tpl_var_single_image($vars, 'image', 'field_profile_image');
		optimhealth_preprocess_field_breadcrumbs($vars);
	}
}

/**
 * 
 * Preprocess for view landing facility 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_facility(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'field_field_facility_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'field_field_facility_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'facilities', $fields);
	
}


/**
 * 
 * Preprocess for view landing service 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_service(&$vars){
	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'field_field_service_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'field_field_service_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),
		'field_field_services_filter' => array(
			'name' => 'category',
			'type' => 'taxonomy',
		),
	);
	optimhealth_def_tpl_var_view_values($vars, 'services', $fields);
}


/**
 * 
 * Preprocess for view landing service 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_service_multilevel(&$vars){
	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'field_field_service_multilevel_links' => array(
			'name' => 'link_items',
			'type' => 'collection',
		),
	);
	optimhealth_def_tpl_var_view_values($vars, 'service_multilevel', $fields);
}

/**
 * 
 * Preprocess for view landing service 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_service_group(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'field_field_service_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'field_field_service_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),
		'field_field_gs_services_filter' => array(
			'name' => 'service_filter',
			'type' => 'taxonomy',
		),
		'field_field_gs_services_group' => array(
			'name' => 'service_group',
			'type' => 'taxonomy',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'services', $fields);
}

/**
 * 
 * Preprocess for view landing research 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_research(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_research_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'field_field_research_date' => array(
			'name' => 'publish_date',
			'type' => 'date',
		),
		'field_field_research_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'research_items', $fields);
}

/**
 * 
 * Preprocess for view landing research 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_careers(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_careers_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'field_field_careers_date' => array(
			'name' => 'publish_date',
			'type' => 'date',
		),
		'field_field_careers_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'careers', $fields);
}

/**
 * 
 * Preprocess for view landing news 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_news(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_news_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'field_field_news_publish_date' => array(
			'name' => 'publish_date',
			'type' => 'date',
		),
		'field_field_news_img' => array(
			'name' => 'image',
			'type' => 'image_large',
		)
	);

	optimhealth_def_tpl_var_view_values($vars, 'news', $fields);

}

/**
 * 
 * Preprocess for view landing testimonials 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_testimonials(&$vars) {

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_testimonials_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'testimonials', $fields);
}

/**
 * 
 * Preprocess for view landing our practice 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_our_practice(&$vars) {

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_article_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),

	);
	optimhealth_def_tpl_var_view_values($vars, 'articles', $fields);

}

/**
 * 
 * Preprocess for view landing tips 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_tips(&$vars) {

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_tools_tips_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),
		'field_field_tools_tips_document' => array(
			'name' => 'document',
			'type' => 'image',
		),

	);
	optimhealth_def_tpl_var_view_values($vars, 'articles', $fields);

}

/**
 * 
 * Preprocess for view landing treatments 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_treatments(&$vars) {

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_treatment_body' => array(
			'name' => 'body',
			'type' => 'text',
		),
		'field_field_treatment_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),
		'field_field_treatment_document' => array(
			'name' => 'document',
			'type' => 'image',
		),
		'field_field_treatment_category' => array(
			'name' => 'category',
			'type' => 'taxonomy',
		),
	);
	optimhealth_def_tpl_var_view_values($vars, 'treatments', $fields);

}

/**
 * 
 * Preprocess for view landing treatments 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_treatment_group(&$vars) {

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_treatment_body' => array(
			'name' => 'body',
			'type' => 'text',
		),
		'field_field_treatment_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),
		'field_field_treatment_document' => array(
			'name' => 'document',
			'type' => 'image',
		),
		'field_field_treatment_category' => array(
			'name' => 'category',
			'type' => 'taxonomy',
		),
		'field_field_gp_procedure_filter' => array(
			'name' => 'procedure_filter',
			'type' => 'taxonomy',
		),
		'field_field_gp_procedure_group' => array(
			'name' => 'procedure_group',
			'type' => 'taxonomy',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'treatments', $fields);
	

}


/**
 * 
 * Preprocess for view landing conditions 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_conditions(&$vars) {

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_illness_body' => array(
			'name' => 'body',
			'type' => 'text',
		),
		'field_field_illness_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),
		'field_field_illness_category' => array(
			'name' => 'category',
			'type' => 'taxonomy',
		),
		'field_field_illness_document' => array(
			'name' => 'document',
			'type' => 'image',
		),
		'field_field_illness_mb_occurrence' => array(
			'name' => 'middle_back_occurrence',
			'type' => 'text',
		),
		'field_field_illness_general_occurrence' => array(
			'name' => 'general_occurrence',
			'type' => 'text',
		),
		'field_field_illness_lb_occurrence' => array(
			'name' => 'lower_back_occurrence',
			'type' => 'text',
		),
		'field_field_illness_neck_occurrence' => array(
			'name' => 'neck_occurrence',
			'type' => 'text',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'what_hurts', $fields);
}

/**
 * 
 * Preprocess for view landing conditions 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_conditions_group(&$vars) {

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_illness_body' => array(
			'name' => 'body',
			'type' => 'text',
		),
		'field_field_illness_image' => array(
			'name' => 'image',
			'type' => 'image_large',
		),
		'field_field_illness_category' => array(
			'name' => 'category',
			'type' => 'taxonomy',
		),
		'field_field_illness_document' => array(
			'name' => 'document',
			'type' => 'image',
		),
		'field_field_illness_mb_occurrence' => array(
			'name' => 'middle_back_occurrence',
			'type' => 'text',
		),
		'field_field_illness_general_occurrence' => array(
			'name' => 'general_occurrence',
			'type' => 'text',
		),
		'field_field_illness_lb_occurrence' => array(
			'name' => 'lower_back_occurrence',
			'type' => 'text',
		),
		'field_field_illness_neck_occurrence' => array(
			'name' => 'neck_occurrence',
			'type' => 'text',
		),

		'field_field_gc_condition_filter' => array(
			'name' => 'condition_filter',
			'type' => 'taxonomy',
		),

		'field_field_gc_condition_group' => array(
			'name' => 'condition_group',
			'type' => 'taxonomy',
		),
	);
	optimhealth_def_tpl_var_view_values($vars, 'what_hurts', $fields);
}


/**
 * 
 * Preprocess for view landing staff 
 * 
 */
function optimhealth_preprocess_views_view_view_landing_staff(&$vars) {
	
	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_staff_speciality' => array(
			'name' => 'speciality',
			'type' => 'taxonomy',
		),

		'field_field_staff_degree' => array(
			'name' => 'degree',
			'type' => 'multifield',
		),
		'field_field_staff_photo' => array(
			'name' => 'photo',
			'type' => 'image_large',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'staff', $fields);
}

/**
 * 
 * Preprocess for view landing patient support
 * 
 */
function optimhealth_preprocess_views_view_view_landing_patient_support(&$vars) {
	
	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		),
		'field_field_patient_support_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',

		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		)

	);
	optimhealth_def_tpl_var_view_values($vars, 'patients_support', $fields);
}

/**
 * 
 * Preprocess for view landing patient tools
 * 
 */
function optimhealth_preprocess_views_view_view_landing_patient_tools(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'field_field_patient_tools_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'field_field_patient_tool_document' => array(
			'name' => 'document',
			'type' => 'image',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'patients_tools', $fields);
}

/**
 * 
 * Preprocess for view landing providers
 * 
 */
function optimhealth_preprocess_views_view_view_landing_providers(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		'nid' => array(
			'name' => 'node_id',
			'type' => 'single',
		),
		'node_title' => array(
			'name' => 'title',
			'type' => 'single',
		),
		'field_field_provider_excerpt' => array(
			'name' => 'excerpt',
			'type' => 'text',
		),
		'path' => array(
			'name' => 'path',
			'type' => 'single',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'patients_tools', $fields);
}

/**
 * 
 * Preprocess for view landing providers
 * 
 */
function optimhealth_preprocess_views_view_view_landing_videos(&$vars){

	//This array defines each field on the view the key is the name of the field on the cms,
	//name is the name of the field that will be used on the tpl and the type is the type of the field
	$fields = array(
		
		'field_field_videos_collection_id' => array(
			'name' => 'video_id',
			'type' => 'text',
		),
		'field_field_videos_collection_title' => array(
			'name' => 'video_title',
			'type' => 'text',
		),
		'field_field_videos_collection_desc' => array(
			'name' => 'video_desc',
			'type' => 'text',
		)
	);
	optimhealth_def_tpl_var_view_values($vars, 'videos', $fields);
}

/**
 * 
 * Preprocess search results page 
 * 
 */
function optimhealth_preprocess_search_result(&$vars) {
	$type = $vars['result']['type'];
	$node = $vars['result']['node'];

	$body = '';
	//Set different content on the body of the search results.
	switch ($type) {
		case 'Our Practice':
			$body = $node->field_article_body;
			break;
		case 'Staff':
			$body = $node->title;
			break;
		case 'Testimonial':
			$body = $node->field_testimonials_body;
			break;
		case 'Treatment':
			$body = $node->field_treatment_body;
			break;
		case 'Condition':
			$body = $node->field_illness_body;

			break;
		case 'Tools and Tips':
			$body = $node->field_tools_tips_body;
			break;
		case 'Facility':
			$body = $node->field_facility_body;
			break;
		case 'News':
			$body = $node->field_news_excerpt;
			break;
		case 'Patient Support':
			$body = $node->field_patient_support_excerpt;
			break;
		case 'Patient Tool':
			$body = $node->field_patient_tools_excerpt;
			break;
		case 'Profile Page':
			$body = $node->field_profile_body_content;
			break;
		case 'Provider':
			$body = $node->field_provider_excerpt;
			break;
		case 'Research':
			$body = $node->field_research_excerpt;
			break;
		case 'Service':
			$body = $node->field_service_excerpt;
			break;
		case 'Work Comp':
			$body = $node->field_work_comp_body;
			break;
	}

	//limit body by words
	$limit = 10;
	if(!is_string($body)){
		$body = $body['und'][0]['value'];

		$body = strip_tags($body);

		$words = str_word_count(str_replace('nbsp', '', $body), 1);
		
		$excerpt_text = '';
		if (count($words) < $limit) {
			$limit = count($words);
		}
		for ($i = 0; $i < $limit; $i++) {
			$excerpt_text .= $words[$i].' ';
		
		}
		
	}else{
		$excerpt_text = $body;
	}
	$excerpt_text = rtrim($excerpt_text, ' ').'...';
	$vars['snippet'] = '... '.$excerpt_text;
	
	global $_domain;
	
	$domain = (domain_path_path_load("node/".$node->nid));
	// var_dump($domain); exit();
	if ( $domain ) {
		$domain = '/' . $domain['alias'];
	} else {
		$domain = '/' .drupal_get_path_alias("node/".$node->nid);
	}
	$vars['url'] = $domain;
	
	

}


//This preprocess removes the search form on the form page
function optimhealth_page_alter(&$page) {
	if (arg(0) == 'search') {
		if (!empty($page['content']['system_main']['search_form'])) {
			hide($page['content']['system_main']['search_form']);
		}
	}
}



