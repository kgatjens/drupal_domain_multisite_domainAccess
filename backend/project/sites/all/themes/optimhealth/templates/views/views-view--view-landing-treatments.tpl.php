<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php
if(isset($view->obj_tpl_data->treatments)){ 
	foreach($view->obj_tpl_data->treatments as $item){ 
		include_redirect_bot($item['node_id'],  $item['title']);
		$result = '';
		$data_filter = null;
		if(is_string($item['category'])){ 
			// $result .= str_replace(' ', '-', $item['category']);
			$result .= str_replace( array( ' ', ',' ), array( '-', '' ), $item['category']).',';
		}else{ 
			foreach($item['category'] as $category){
				// $result .= str_replace(' ', '-', $category).',';
				$result .= str_replace( array( ' ', ',' ), array( '-', '' ), $category).',';
			}
		}
		$data_filter = ltrim(rtrim($result));
		$words = str_word_count(str_replace('nbsp', '', strip_tags($item['body'])), 1); 
		$limit = 16;
		$string = '';
		if(count($words) < $limit){
			$limit = count($words);
		}
		for($i = 0; $i < $limit; $i++){
			$string .=$words[$i].' ';
		}
		$string = rtrim($string, ' ');
		$excerpt = $string.'...';
		if(is_coastal_site()){
			include_card_services($item['node_id'], $item['title'], $item['image'], $excerpt, $data_filter);
		}else{
			include_card_download($item['node_id'],$item['title'], $item['image'], $excerpt, $item['document'], $data_filter);
		}
	} 
}
