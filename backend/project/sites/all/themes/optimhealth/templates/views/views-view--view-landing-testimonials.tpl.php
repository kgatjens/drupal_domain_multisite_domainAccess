<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php 
if(isset($view->obj_tpl_data->testimonials)){
	foreach($view->obj_tpl_data->testimonials as $testimonial){ 
		include_redirect_bot($testimonial['node_id'],  $testimonial['title']);
		
		include_card_2_buttons($testimonial['node_id'], $testimonial['title'], $testimonial['image'], null, 'View');
	}
}