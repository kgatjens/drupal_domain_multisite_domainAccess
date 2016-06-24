<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php 
if(isset($view->obj_tpl_data->articles)){
	foreach($view->obj_tpl_data->articles as $articles){ 
	    include_redirect_bot($articles['node_id'],  $articles['title']);
	    include_card_1_buttons($articles['node_id'], $articles['title'], $articles['image']);
	}
}
