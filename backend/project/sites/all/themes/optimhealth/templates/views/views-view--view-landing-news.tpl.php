<?php 
    //the variables used on $view->obj_tpl_data->variable_name 
    //was defined on template-overrides.php 
    //the preprocess function of this view is the same as the filename. 
?>
<div class="row">
<?php 
if(isset($view->obj_tpl_data->news)){
	foreach($view->obj_tpl_data->news as $item){ 
		include_redirect_bot($item['node_id'],  $item['title']);
	    include_card_news_events($item['title'], $item['excerpt'], $item['path'], $item['image'], $item['publish_date']);
	} 
}

?>
</div>