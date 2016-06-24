<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php

if(isset($view->obj_tpl_data->treatments)){ 
	$tmp_group = '';
	$cont = 0;

	usort( $view->obj_tpl_data->treatments, 'optimhealth_sort_procedures_grouping' );

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

		if ( isset( $item['procedure_group'] ) ) {
			if ( is_string( $item['procedure_group'] ) ) { 
				$result .= str_replace( array( ' ', ',' ), array( '-', '' ) , $item['procedure_group'] );
			} else {
				foreach ( $item['procedure_group'] as $category ) {
					$result .= str_replace( array( ' ', ',' ), array( '-', '' ), $category) . ',';
				}
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
?>
	   <?php if($cont == 0){ ?>
			
				<div class="row row-eq-height group-container">
					<h2 class="col-md-12 group-title"><?php print $item['procedure_group']; ?></h2>
					<?php $tmp_group = $item['procedure_group']; ?>
		<?php }elseif($tmp_group != $item['procedure_group']){?>
				
			</div>
			<div class="row row-eq-height group-container">
					<h2 class="col-md-12 group-title"><?php print $item['procedure_group']; ?></h2>
					<?php $tmp_group = $item['procedure_group']; ?>
		<?php } ?>
		
		<?php
			$cont++;
			include_card_download($item['node_id'],$item['title'], $item['image'], $excerpt, $item['document'], $data_filter);
		?>
		<?php if($cont == (count($view->obj_tpl_data->what_hurts))){ ?>
			
			</div>
		<?php } ?>
<?php 
	} 
}
