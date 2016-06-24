<?php

/**
 * Function used to add dynamic functions to manage information also
 * execute the new function
 */
function optimhealth_extend_functionality($function, $element, &$params) {
	$function = $function.'_'.$element;
	if (function_exists($function)) {
		$function($params);
	}

}

/**
 * Convert entity array to string array
 */
function optimhealth_make_array_entity_value($array, &$vars) {
	$result = array();
	if (isset($array[$vars['node']->language])) {
		for ($i = 0; $i < sizeof($array[$vars['node']->language]); $i++) {
			$result[$i] = $array[$vars['node']->language][$i]['entity']->name;
		}
	}
	return $result;
}

/**
 * Create Data Object only if doesn't exist
 */
function optimhealth_create_data_object(&$vars) {
	if (!isset($vars['node']->obj_tpl_data)) {
		$vars['node']->obj_tpl_data = new stdClass();
	}
}

/**
 * Define Single Value variables inside SVP Data Object
 */

function optimhealth_def_tpl_var_assign_value(&$vars, $object_field_name, $value) {
	optimhealth_create_data_object($vars);
	$vars['node']->obj_tpl_data->$object_field_name = $value;
}

/**
* Use to parse a single value attribute from nodes 
*/

function optimhealth_def_tpl_var_single_value(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	$node = entity_metadata_wrapper('node', $vars['node']);
	if (isset($node->$form_field_name)) {
		$vars['node']->obj_tpl_data->$object_field_name = $node->$form_field_name->value();
	}

}

/**
 * Use to parse the content inside the long text wysiwyg field.
 */
function optimhealth_def_tpl_var_single_wysiwyg_value(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	$node = entity_metadata_wrapper('node', $vars['node']);
	if (isset($node->$form_field_name)) {
		$field                                          = $node->$form_field_name->value();
		$vars['node']->obj_tpl_data->$object_field_name = $field['value'];
	}

}

/**
 * Use to parse the content inside the long text field.
 */

function optimhealth_def_tpl_var_single_plain_text_value(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	$node = entity_metadata_wrapper('node', $vars['node']);
	if (isset($node->$form_field_name)) {
		$field                                          = $node->$form_field_name->value();
		$vars['node']->obj_tpl_data->$object_field_name = $field;
	}

}

/**
 * Define Multi Value variables inside Data Object
 */
function optimhealth_def_tpl_var_multiple_value(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	$array   = array();
	$element = $vars['node']->$form_field_name;
	if (isset($element[$vars['node']->language])) {
		foreach ($element[$vars['node']->language] as $item) {
			array_push($array, $item['value']);
		}
	}
	$vars['node']->obj_tpl_data->$object_field_name = $array;
}

/**
 * Parse a date field to specific format
 */
function optimhealth_def_tpl_var_date_value(&$vars, $object_field_name, $form_field_name, $format = 'm/d/Y') {
	optimhealth_create_data_object($vars);
	$elem                                           = $vars['node']->$form_field_name;
	$vars['node']->obj_tpl_data->$object_field_name = date($format, strtotime($elem['und'][0]['value']));
}

/**
 * Define Single Image variables inside SVP Data Object
 */
function optimhealth_def_tpl_var_single_image(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	$element = $vars['node']->$form_field_name;
	if (isset($element[$vars['node']->language])) {
		$vars['node']->obj_tpl_data->$object_field_name = file_create_url($element[$vars['node']->language][0]['uri']);
	} else {
		$vars['node']->obj_tpl_data->$object_field_name = null;
	}

}

/**
 * Define Multi Image variables inside SVP Data Object
 */
function optimhealth_def_tpl_var_multiple_image(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	if (isset($vars['node']->$form_field_name)) {
		$array    = array();
		$elements = $vars['node']->$form_field_name;
		if (isset($elements[$vars['node']->language])) {
			foreach ($elements[$vars['node']->language] as $element) {
				array_push($array, file_create_url($element['uri']));
			}
		}
		$vars['node']->obj_tpl_data->$object_field_name = $array;
	} else {

		$vars['node']->obj_tpl_data->$object_field_name = null;
	}

}

/**
 * Define Entity Array String variables from collection of entities inside SVP Data Object
 */
function optimhealth_def_tpl_var_entities_collection(&$vars, $object_field_name, $form_field_name, $array_form_fields) {
	optimhealth_create_data_object($vars);
	$vars['node']->obj_tpl_data->$object_field_name = array();
	$entities                                       = $vars['node']->$form_field_name;
	$count                                          = 0;

	if (isset($entities['und'])) {
		foreach ($entities['und'] as $item) {
			$tmp = array();
			foreach ($array_form_fields as $value) {
				$key   = array_search($value, $array_form_fields);
				$field = $item['entity']->$value;

				if (isset($field['und'][0]) && !is_string($field)) {
					if (isset($field['und'][0]['target_id'])) {
						$tmp[$key] = count($field['und']);
					} elseif (isset($field['und'][0]['uri'])) {
						$tmp[$key] = file_create_url($field['und'][0]['uri']);
					} elseif (isset($field['und'][0]['value'])) {
						$tmp[$key] = $field['und'][0]['value'];
					} elseif (isset($field['und'][0]['count'])) {
						$tmp[$key] = $field['und'][0]['count'];
					}
				} else {
					$tmp[$key] = $field;
				}
			}
			$tmp['node_url'] = drupal_get_path_alias('node/'.$item['entity']->nid, '');

			array_push($vars['node']->obj_tpl_data->$object_field_name, $tmp);
			$count++;
		}

	}

}

/**
 * Define Entity Value  variables inside SVP Data Object
 */
function optimhealth_def_tpl_var_entity(&$vars, $object_field_name, $form_field_name, $array_form_fields) {
	optimhealth_create_data_object($vars);
	$entity = $vars['node']->$form_field_name;
	if (!empty($entity)) {
		foreach ($array_form_fields as $value) {
			$key   = array_search($value, $array_form_fields);
			$field = $entity['und'][0]['entity']->$value;
			if (isset($field['und'][0])) {
				if (isset($field['und'][0]['uri'])) {
					$tmp[$key] = file_create_url($field['und'][0]['uri']);
				} elseif (isset($field['und'][0]['value'])) {
					$tmp[$key] = $field['und'][0]['value'];
				}
			} else {
				$tmp[$key] = $field;
			}

		}
		$tmp['node_url']                                = drupal_get_path_alias('node/'.$entity['und'][0]['entity']->nid, '');
		$vars['node']->obj_tpl_data->$object_field_name = $tmp;
	}
}

/**
 * Define Taxonomy Value variables inside SVP Data Object
 */
function optimhealth_def_tpl_var_taxonomy(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	$elements                                       = $vars['node']->$form_field_name;
	$vars['node']->obj_tpl_data->$object_field_name = $elements[$vars['node']->language]['0']['taxonomy_term']->name;
}

/**
 * Get the taxonomy id related to a node
 */
function optimhealth_def_tpl_taxonomies_id_text(&$vars, $object_field_name, $vocab_name) {
	optimhealth_create_data_object($vars);
	$myvoc = taxonomy_vocabulary_machine_name_load($vocab_name);

	$tree  = taxonomy_get_tree($myvoc->vid);
	$terms = array();
	foreach ($tree as $term) {
		$term_info         = array();
		$term_info['tid']  = $term->tid;
		$term_info['name'] = $term->name;
		array_push($terms, $term_info);
	}
	$vars['node']->obj_tpl_data->$object_field_name = $terms;
}

/**
 * Get field collection and create array with the values.
 */
function optimhealth_def_tpl_var_field_collections(&$vars, $object_field_name, $field_collection_name, $array_form_fields) {
	optimhealth_create_data_object($vars);
	$vars['node']->obj_tpl_data->$object_field_name = array();

	$wrapper  = entity_metadata_wrapper('node', $vars['node']);

	$formtype = field_get_items('node', $vars['node'], $field_collection_name);

	if ($formtype) {
		foreach ($formtype as $itemid) {
			$tmp_array = array();
			$item      = field_collection_field_get_entity($itemid);
			foreach ($array_form_fields as $field_form) {
				$tmp = $item->$field_form;
				if (isset($tmp[$vars['node']->language])) {
					if (isset($tmp[$vars['node']->language][0]['uri'])) {
						$tmp_array[array_search($field_form, $array_form_fields)] = file_create_url($tmp[$vars['node']->language][0]['uri']);
					} else {
						$tmp_array[array_search($field_form, $array_form_fields)] = $tmp[$vars['node']->language][0]['value'];
					}
				}
			}
			array_push($vars['node']->obj_tpl_data->$object_field_name, $tmp_array);
		}
	}
}

/**
 * Get the reference node field and convert into an url.
 */
function optimhealth_def_tpl_var_field_node_reference_url(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object($vars);
	$elements = $vars['node']->$form_field_name;
	if (isset($elements[$vars['node']->language]['0'])) {
		$vars['node']->obj_tpl_data->$object_field_name = drupal_get_path_alias('node/'.$elements[$vars['node']->language]['0']['nid'], '');
	}
}

//Views functions ********

/**
 * Create vies Data Object only if doesn't exist
 */
function optimhealth_create_brandimage_data_object_view(&$vars) {
	if (!isset($vars['view']->obj_tpl_data)) {
		$vars['view']->obj_tpl_data = new stdClass();
	}
}

/**
 * Get a single value field from view (title, or nid) from the current view
 */
function optimhealth_def_tpl_var_view_single_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	return $node->$original_field_name;
}

/**
 * Get a collection from simple field values (title, or nid) from the current view
 */
function optimhealth_def_tpl_var_view_multifield_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$field = $node->$original_field_name;
	$array = array();

	foreach ($node->$original_field_name as $item) {
		array_push($array, $item['raw']['value']);
	}
	return $array;
}

/**
 * Get the value of a text field from the current view
 */
function optimhealth_def_tpl_var_view_text_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$raw_val = $node->$original_field_name;
	return $raw_val[0]['raw']['value'];
}

/**
 * Get the value of a color field from the current view
 */
function optimhealth_def_tpl_var_view_color_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$raw_val = $node->$original_field_name;
	return $raw_val[0]['raw']['rgb'];
}

/**
 * Get the value of a geo field from the current view
 */
function optimhealth_def_tpl_var_view_geo_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$geo_val = $node->$original_field_name;
	return $geo_val[0]['raw'];
}

/**
 * Get the collection of values from list field from the current view
 */
function optimhealth_def_tpl_var_view_list_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$list_array = array();
	foreach ($node->$original_field_name as $tag) {
		array_push($list_array, $tag['raw']['value']);
	}
	return $list_array;
}

/**
 * Get the collection of value from taxonomy field from the current view
 */
function optimhealth_def_tpl_var_view_taxonomy_value($node, $original_field_name, $field = null) {
	if (empty($node->$original_field_name)) {
		return null;
	}

	if (count($node->$original_field_name) > 1) {
		$list_array = array();
		foreach ($node->$original_field_name as $tag) {
			if ($field) {
				array_push($list_array, $tag['raw']['taxonomy_term']->$field);

			} else {
				array_push($list_array, $tag['raw']['taxonomy_term']->name);
			}
		}
		return $list_array;
	}
	$list_single = $node->$original_field_name;

	if ($field) {
		return $list_single[0]['raw']['taxonomy_term']->$field;
	} else {
		return $list_single[0]['raw']['taxonomy_term']->name;
	}

}

/**
 * Get the collection of value from list field from the current view
 */
function optimhealth_def_tpl_var_view_single_list_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$list_single = $node->$original_field_name;
	return $list_single[0]['raw']['value'];
}

/**
 * Get the value of a date field from the current view
 */
function optimhealth_def_tpl_var_view_date_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	
	
	$list_single = $node->$original_field_name;
	return $list_single[0]['raw']['value'];
}

/**
 * Get the value of a boolean field from the current view
 */
function optimhealth_def_tpl_var_view_boolean_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$bool_single = $node->$original_field_name;
	return $bool_single[0]['raw']['value'] == '1'?true:false;
}

/**
 * Get the value of a image field from the current view
 */
function optimhealth_def_tpl_var_view_image_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$field = $node->$original_field_name;
	return file_create_url($field[0]['raw']['uri']);
}

function optimhealth_def_tpl_var_view_image_large_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$field = $node->$original_field_name;
	$image_uri = $field[0]['raw']['uri'];
	$style = 'large';
	$derivative_uri = image_style_path($style, $image_uri);
	$success        = file_exists($derivative_uri) || image_style_create_derivative(image_style_load($style), $image_uri, $derivative_uri);
	$new_image_url  = file_create_url($derivative_uri);
	
	return $new_image_url;
}

/**
 * Get the value of the path of  node from the current view
 */
function optimhealth_def_tpl_var_view_path_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	$nid = $node->$original_field_name;
	return drupal_get_path_alias('node/'.$nid);
}

/**
 * General function this will be used on template-overrides and call the others 
 * views function. This function receive all the instructions of how to parse a 
 * node using an array
 */
function optimhealth_def_tpl_var_view_values(&$vars, $object_name, $fields) {
	if (!isset($vars['view']->obj_tpl_data)) {
		$vars['view']->obj_tpl_data = new stdClass();
	}

	$temp_array = array();
	foreach ($vars['view']->result as $item_type) {
		$node_item = array();
		foreach ($fields as $key => $value) {
			if ($value['type'] == 'single' && $key == 'path') {
				$node_item[$value['name']] = optimhealth_def_tpl_var_view_path_value($item_type, 'nid');
			} else {
				${'dynamic_function'}      = 'optimhealth_def_tpl_var_view_'.$value['type'].'_value';
				$node_item[$value['name']] = ${'dynamic_function'}($item_type, $key);
			}

		}
		array_push($temp_array, $node_item);
	}

	$vars['view']->obj_tpl_data->$object_name = $temp_array;
}

/**
 * Function to clean the main title
 * 
 */
function optimhealth_patch_title_field(&$vars, $field){

	if(isset($vars['node']->obj_tpl_data->$field)) {

		$tmp = $vars['node']->obj_tpl_data->$field;

		if(isset($tmp['title'])){
			$tmp['title'] =  preg_replace("/\[[^)]+\]/", "", $tmp);
		}else{
			if(isset($tmp)){
				foreach($tmp as $item){
					if(isset($item['title'])){
						$prev_value = $item;
						$item['title'] = preg_replace("/\[[^)]+\]/", "", $item['title']);
						$item['title'] = str_replace('®', '<sup>®</sup>', $item['title']);
						$item['title'] = str_replace('™', '<sup>TM</sup>', $item['title']);
						$tmp[array_search($prev_value, $tmp)] = $item;
						
					}
				}
			}
			
		}
		$vars['node']->obj_tpl_data->$field = $tmp;
	}
	
	//$vars['node']->obj_tpl_data->title = preg_replace("/\[[^)]+\]/", "", $vars['node']->obj_tpl_data->title);
}

/**
 * Get field collection and create array with the values.
 */
function optimhealth_def_tpl_var_view_collection_value($node, $original_field_name) {
	if (empty($node->$original_field_name)) {
		return null;
	}
	
	$list_array = array();

	$wrapper = entity_metadata_wrapper('node', $node);

	foreach ($node->$original_field_name as $key => $value) {
		foreach ($value['rendered']['entity']['field_collection_item'] as $k => $v) {
			$entity = $v['#entity'];

			$image = NULL;

			if ( !empty( $entity->field_sm_links_image ) ) {
				$image = file_create_url( $entity->field_sm_links_image['und'][0]['uri'] );
			}

			$target = NULL;

			if ( !empty( $entity->field_sm_links_target ) ) {
				$target = ' target="' . $entity->field_sm_links_target['und'][0]['value'] . '"';
			}

			$list_array[] = array(
				'links_description' => $entity->field_sm_links_description['und'][0]['value'],
				'links_link'        => $entity->field_sm_links_link['und'][0]['value'],
				'links_target'      => $target,
				'links_title'       => $entity->field_sm_links_title['und'][0]['value'],
				'links_image'       => $image,
			);
		}
	}

	return $list_array;
}

/**
* Use to retrieve multiple value file attribute from nodes 
*/

function optimhealth_def_tpl_var_multiple_values_file(&$vars, $object_field_name, $form_field_name) {
	optimhealth_create_data_object( $vars );
	
	$node = entity_metadata_wrapper( 'node', $vars['node'] );

	$list_array = array();
	
	$files = $node->$form_field_name->value();

	foreach ( $files as $key => $file ) {
		$list_array[] = array(
			'date'     => date( 'F j, Y', $file['timestamp'] ),
			'filename' => $file['filename'],
			'uri'      => file_create_url( $file['uri'] ),
		);
	}

	if ( isset( $node->$form_field_name ) ) {
		$vars['node']->obj_tpl_data->$object_field_name = $list_array;
	}
}

/**
 * Use to sort Conditions Group view by Group and Title
 * @param  Array $a
 * @param  Array $b
 * @return Integer
 */
function optimhealth_sort_conditions_grouping($a, $b) {
	if ( $a['condition_group'] == $b['condition_group'] ) {
		if ( $a['title'] == $b['title'] ) {
        	return 0;
        }

        return ( $a['title'] < $b['title'] ) ? -1 : 1;
    }

    return ( $a['condition_group'] < $b['condition_group'] ) ? -1 : 1;
}

/**
 * Use to sort Procedures Group view by Group and Title
 * @param  Array $a
 * @param  Array $b
 * @return Integer
 */
function optimhealth_sort_procedures_grouping($a, $b) {
	if ( $a['procedure_group'] == $b['procedure_group'] ) {
		if ( $a['title'] == $b['title'] ) {
        	return 0;
        }

        return ( $a['title'] < $b['title'] ) ? -1 : 1;
    }

    return ( $a['procedure_group'] < $b['procedure_group'] ) ? -1 : 1;
}

/**
 * Use to show logo based on domain
 */
function optimhealth_get_logo_url($theme = 'color') {
	global $_domain;

	$logos     = array();
	$detect    = mobile_detect_get_object();
	$logo_path = '/' . path_to_theme() . '/public/optim-logos/';

	$logos['color'] = new StdClass();
	$logos['white'] = new StdClass();

	$logos['color']->desktop = array(
		1  => $logo_path . 'optim_logo_dark.svg',
		2  => $logo_path . 'c-orthopedics-d.svg',
		3  => $logo_path . 'c-therapy-d.svg',
		4  => $logo_path . 'c-imaging-d.svg',
		5  => $logo_path . 'c-surgeryc-d.svg',
		6  => $logo_path . 'c-tattnall-d.svg',
		7  => $logo_path . 'c-jenkins-d.svg',
		8  => $logo_path . 'c-screven-d.svg',
		9  => $logo_path . 'c-physicians-d.svg',
		10 => $logo_path . 'c-coastal-d.svg',
		11 => $logo_path . 'c-jchristymd-d.png',
		12 => $logo_path . 'c-healthcare-d.svg',
	);

	$logos['color']->mobile = array(
		1  => $logo_path . 'optim_logo_dark.svg',
		2  => $logo_path . 'c-orthopedics-m.svg',
		3  => $logo_path . 'c-therapy-m.svg',
		4  => $logo_path . 'c-imaging-m.svg',
		5  => $logo_path . 'c-surgeryc-m.svg',
		6  => $logo_path . 'c-tattnall-m.svg',
		7  => $logo_path . 'c-jenkins-m.svg',
		8  => $logo_path . 'c-screven-m.svg',
		9  => $logo_path . 'c-physicians-m.svg',
		10 => $logo_path . 'c-coastal-m.svg',
		11 => $logo_path . 'c-jchristymd-d.png',
		12 => $logo_path . 'c-healthcare-m.svg',
	);

	$logos['white']->desktop = array(
		1  => $logo_path . 'optim_logo_light.svg',
		2  => $logo_path . 'w-orthopedics-d.svg',
		3  => $logo_path . 'w-therapy-d.svg',
		4  => $logo_path . 'w-imaging-d.svg',
		5  => $logo_path . 'w-surgeryc-d.svg',
		6  => $logo_path . 'w-tattnall-d.svg',
		7  => $logo_path . 'w-jenkins-d.svg',
		8  => $logo_path . 'w-screven-d.svg',
		9  => $logo_path . 'w-physicians-d.svg',
		10 => $logo_path . 'w-coastal-d.svg',
		11 => $logo_path . 'w-jchristymd-d.png',
		12 => $logo_path . 'w-healthcare-d.svg',
	);

	$logos['white']->mobile = array(
		1  => $logo_path . 'optim_logo_light.svg',
		2  => $logo_path . 'w-orthopedics-m.svg',
		3  => $logo_path . 'w-therapy-m.svg',
		4  => $logo_path . 'w-imaging-m.svg',
		5  => $logo_path . 'w-surgeryc-m.svg',
		6  => $logo_path . 'w-tattnall-m.svg',
		7  => $logo_path . 'w-jenkins-m.svg',
		8  => $logo_path . 'w-screven-m.svg',
		9  => $logo_path . 'w-physicians-m.svg',
		10 => $logo_path . 'w-coastal-m.svg',
		11 => $logo_path . 'w-jchristymd-d.png',
		12 => $logo_path . 'w-healthcare-m.svg',
	);
                    
    if ( $detect->isMobile() || $detect->isTablet() ) {
    	// $file = (array) file_load(variable_get('logo_mobile_color'));
    	// 
    	// return file_create_url( $file['uri'] );
        return $logos[$theme]->mobile[$_domain['domain_id']];
    }

	// $file = (array) file_load(variable_get('logo_color'));
	// 
	// return file_create_url( $file['uri'] );
    return $logos[$theme]->desktop[$_domain['domain_id']];
}

/**
 * Use to retrieve contact .vcf file based on domain
 */
function optimhealth_get_contact_vcf() {
	global $_domain;

	$vcf_path = '/' . path_to_theme() . '/public/optim-vcf/';

	$vcf = array(
		1  => $vcf_path . 'optim-spine.vcf',
		2  => $vcf_path . 'optim-orthopedics.vcf',
		3  => $vcf_path . 'optim-therapy.vcf',
		4  => $vcf_path . 'optim-imaging.vcf',
		5  => $vcf_path . 'optim-surgery-center.vcf',
		6  => $vcf_path . 'optim-medical-center-tattnall.vcf',
		7  => $vcf_path . 'optim-medical-center-jenkins.vcf',
		8  => $vcf_path . 'optim-medical-center-screven.vcf',
		9  => $vcf_path . 'optim-physicians.vcf',
		10 => $vcf_path . 'coastal-imaging.vcf',
		11 => $vcf_path . 'optim-jchristymd.vcf',
		12 => $vcf_path . 'optim-healthcare.vcf',
	);

	// $file = (array)file_load(variable_get('contact_card'));
	// 						        $contact_card = !empty(file_create_url($file['uri'])) ? file_create_url($file['uri']) : '#' ;

	// print $contact_card;

    return $vcf[$_domain['domain_id']];
}

/**
 * Use to update search results link based on domain and node type
 */
function optimhealth_update_result_link($type, &$result) {
	global $_domain;

	$_type = strtolower( $type );

	if ( $_domain['domain_id'] == 2 ) {
		if ( $_type == 'testimonial' ) {
			$result = preg_replace( '/(\/testimonials)+/', '/patient-stories', $result );
		} else if ( $_type == 'staff' ) {
			$result = preg_replace( '/(\/team-optim)+/', '/providers', $result );
		}
	} else if ( $_domain['domain_id'] == 3 ) {
		if ( $_type == 'condition' ) {
			$result = preg_replace( '/(\/what-hurts-results)+/', '/conditions', $result );
		} else if ( $_type == 'staff' ) {
			$result = preg_replace( '/(\/team-optim)+/', '/therapists', $result );
		} else if ( $_type == 'facility' ) {
			$result = preg_replace( '/\/facilities\/([^\"]+)/', '/facilities?m=$1', $result );
		} else if ( $_type == 'patient tool' ) {
			$result = preg_replace( '/\/patients-tools\/([^\"]+)/', '/patient-tools?m=$1', $result );
		}
	} else if ( $_domain['domain_id'] == 4 ) {
		if ( $_type == 'facility' ) {
			$result = preg_replace( '/\/facilities\/([^\"]+)/', '/facilities?m=$1', $result );
		} else if ( $_type == 'patient tool' ) {
			$result = preg_replace( '/\/patients-tools\/([^\"]+)/', '/patient-tools?m=$1', $result );
		}
	} else if ( $_domain['domain_id'] == 5 ) {
		if ( $_type == 'facility' ) {
			$result = preg_replace( '/\/facilities\/([^\"]+)/', '/facilities?m=$1', $result );
		} else if ( $_type == 'patient tool' ) {
			$result = preg_replace( '/\/patients-tools\/([^\"]+)/', '/patient-tools?m=$1', $result );
		} else if ( $_type == 'testimonial' ) {
			$result = preg_replace( '/(\/testimonials)+/', '/patient-stories', $result );
		}
	} else if ( $_domain['domain_id'] == 6 ) {
		if ( $_type == 'facility' ) {
			$result = preg_replace( '/\/facilities\/([^\"]+)/', '/facilities?m=$1', $result );
		} else if ( $_type == 'patient tool' ) {
			$result = preg_replace( '/\/patients-tools\/([^\"]+)/', '/patient-tools?m=$1', $result );
		} else if ( $_type == 'testimonial' ) {
			$result = preg_replace( '/(\/testimonials)+/', '/patient-stories', $result );
		}
	} else if ( $_domain['domain_id'] == 7 ) {
		if ( $_type == 'staff' ) {
			$result = preg_replace( '/(\/team-optim)+/', '/providers', $result );
		} else if ( $_type == 'patient tool' ) {
			$result = preg_replace( '/\/patients-tools\/([^\"]+)/', '/patient-tools?m=$1', $result );
		}
	} else if ( $_domain['domain_id'] == 8 ) {
		if ( $_type == 'staff' ) {
			$result = preg_replace( '/(\/team-optim)+/', '/providers', $result );
		} else if ( $_type == 'patient tool' ) {
			$result = preg_replace( '/\/patients-tools\/([^\"]+)/', '/patient-tools?m=$1', $result );
		} else if ( $_type == 'testimonial' ) {
			$result = preg_replace( '/(\/testimonials)+/', '/patient-stories', $result );
		}
	} else if ( $_domain['domain_id'] == 10 ) {
		if ( $_type == 'staff' ) {
			$result = preg_replace( '/(\/team-optim)+/', '/our-team', $result );
		}
	} else if ( $_domain['domain_id'] == 11 ) {
		if ( $_type == 'treatment' ) {
			$result = preg_replace( '/(\/treatments)+/', '/procedures', $result );
		} else if ( $_type == 'patient tool' ) {
			$result = preg_replace( '/\/patients-tools\/([^\"]+)/', '/patient-tools?m=$1', $result );
		}
	}
}