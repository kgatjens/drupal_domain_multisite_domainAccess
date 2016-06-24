<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php 
if(isset($view->obj_tpl_data->patients_tools)){
	foreach($view->obj_tpl_data->patients_tools as $item){
		include_redirect_bot($item['node_id'],  $item['title']);
		include_card_news_events($item['title'], $item['excerpt'], $item['path'], null, null);
	}
}
