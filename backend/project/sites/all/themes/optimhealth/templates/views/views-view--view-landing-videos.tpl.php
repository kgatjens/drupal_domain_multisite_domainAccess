<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php 
if(isset($view->obj_tpl_data->videos)){
	foreach($view->obj_tpl_data->videos as $item){ 
		
		include_card_videos($item['video_id'], $item['video_title'], $item['video_desc']);
	}
}