<?php
require_once('template-helper.php');
require_once('template-overrides.php');
require_once('template-fields.php');
require_once('template-functions.php');

/**
*
* Preprocess for pages
* 
*/

// Remember:
// Hyphens (-) and underscores (_) play a special role in theme suggestions.
// Theme suggestions should only contain underscores, because within
// drupal_find_theme_templates(), underscores are converted to hyphens to
// match template file names, and then converted back to underscores to match
// pre-processing and other function names. So if your theme suggestion
// contains a hyphen, it will end up as an underscore after this conversion,
// and your function names won't be recognized. So, we need to convert
// hyphens to underscores in block deltas for the theme suggestions.
function optimhealth_preprocess_page(&$vars, $hook){
	$header = drupal_get_http_header('status');
	
	if (isset($vars['page'])){

		// Get the object and do some other checks based on what you need.
		if(($node = menu_get_object()) && $node->type){
			// Generate a render array for the node.
			$node_object = node_view($node);

			//check if the node in the page has a sidebar
			if(isset($node_object['field_has_sidebar'])){
				if($node_object['field_has_sidebar']['#items'][0]['value'] == '0'){

					$vars['theme_hook_suggestions'][] = 'page__nosidebar';
					return;
				}
			}
			//check if the node in the page has a landing type field
			if(isset($node_object['field_landing_type'])){
				if($node_object['field_landing_type']['#items'][0]['value'] == 'testimonials'){
					$vars['theme_hook_suggestions'][] = 'page__testimonials';
				}elseif($node_object['field_landing_type']['#items'][0]['value'] == 'what_hurts'){
					$vars['theme_hook_suggestions'][] = 'page__what_hurts';
				}
			}else{
				optimhealth_load_page_templates($vars, $hook);
			}
		}
	}

	//if the page is 404 load the 404 tempalte
	if ($header == '404 Not Found') {     
    	$vars['theme_hook_suggestions'][] = 'page__404';
  	}
	
}


/**
 * 
 * Preprocess function for regions
 * 
 */
function optimhealth_preprocess_region(&$vars, $hook){
	if (isset($vars['region'])){

		//set a custom pat for regions.tpl.php
		$vars['theme_hook_suggestions'][] = '/templates/regions/region__'. $vars['region'];
	}	
}

/**
 * 
 * Preprocess function for regions
 * 
 */
function optimhealth_preprocess_block(&$vars, $hook){
	if (isset($vars['block'])){
		// Get the object and do some other checks based on what you need.
		if(($node = menu_get_object()) && $node->type){
			// Generate a render array for the node.
			$node_object = node_view($node);

			if(isset($node_object['field_landing_type'])){
				$vars['block']->landing_type = $node_object['field_landing_type']['#items'][0]['value'];
				
			}
			
		}
		//set a custom pat for regions.tpl.php
		$vars['theme_hook_suggestions'][] = 'block__' . $vars['block']->module . '__' . strtr($vars['block']->delta, '-', '_');
	}	
}

/**
 * 
 * Preprocess function for nodes
 * 
 */
function optimhealth_preprocess_node(&$vars, $hook){
	if (isset($vars['node']))
	{
		if ($block_breadcrumbs  = block_get_blocks_by_region('content_breadcrumbs')) {

  			$vars['content_breadcrumbs'] = $block_breadcrumbs;
		}

		//create custom region inside of the node
		if ($blocks_footer  = block_get_blocks_by_region('content_footer')) {

  			$vars['content_footer'] = $blocks_footer;
		}

		//create custom region inside of the node
		if ($blocks_middle  = block_get_blocks_by_region('content_middle')) {
			
  			$vars['content_middle'] = $blocks_middle;
		}

		//create custom region inside of the node
		if ($blocks_header  = block_get_blocks_by_region('content_header')) {
			
  			$vars['content_header'] = $blocks_header;
		}

		// Get a list of all the regions for this theme
		foreach (system_region_list($GLOBALS['theme']) as $region_key => $region_name) {
		    // Get the content for each region and add it to the $region variable
		    if ($blocks = block_get_blocks_by_region($region_key)) {
		      $vars['region'][$region_key] = $blocks;
		    }
		    else {
		      $vars['region'][$region_key] = array();
		    }
		}
		$vars['theme_hook_suggestions'][] = '/templates/nodes/node__'. $vars['node']->type;

		//add the custom function to preprocess each node
		optimhealth_extend_functionality(__FUNCTION__, $vars['node']->type, $vars);
	}
	
}

/**
 * 
 * Preprocess function for views 
 * 
 */
function optimhealth_preprocess_views_view(&$vars, $hook)
{
	if (isset($vars['view']))
	{	
		$vars['theme_hook_suggestions'][] = '/templates/views/views_view__'. $vars['view']->name;

		//add the custom function to preprocess each view
		optimhealth_extend_functionality(__FUNCTION__, $vars['view']->name, $vars);
	}
}

//this function is called only by optimhealth_preprocess_page and adds new themes hook sugestions
function optimhealth_load_page_templates(&$vars, $hook){
	$vars['theme_hook_suggestions'][] = '/templates/pages/'. $vars['theme_hook_suggestions'][0];
	$vars['theme_hook_suggestions'][] = '/templates/pages/'. $vars['theme_hook_suggestions'][0].'__'.$vars['node']->nid;
	//$node = node_load(key($vars['page']['content']['system_main']['nodes']));
}