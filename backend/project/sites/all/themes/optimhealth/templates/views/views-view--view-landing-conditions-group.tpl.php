<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php 

if(isset($view->obj_tpl_data->what_hurts)){
	$tmp_group = '';
	$cont = 0;

	usort( $view->obj_tpl_data->what_hurts, 'optimhealth_sort_conditions_grouping' );

	foreach($view->obj_tpl_data->what_hurts as $item){ 
		include_redirect_bot($item['node_id'],  $item['title']);
		$result_categories = '';
		if(isset($item['category'])){
			if(is_string($item['category'])){ 
				$result_categories .= str_replace( array( ' ', ',' ), array( '-', '' ), $item['category']).',';
			}else{ 
				foreach($item['category'] as $category){
					$result_categories .= str_replace( array( ' ', ',' ), array( '-', '' ), $category).',';
				}
			}

			$result_categories = ltrim( rtrim( $result_categories ) );
		}

		if ( isset( $item['condition_filter'] ) ) {
			if ( is_string( $item['condition_filter'] ) ) { 
				$result_categories .= str_replace( array( ' ', ',' ), array( '-', '' ) , $item['condition_filter'] );
			} else {
				foreach ( $item['condition_filter'] as $category ) {
					$result_categories .= str_replace( array( ' ', ',' ), array( '-', '' ), $category) . ',';
				}
			}

			$result_categories = ltrim( rtrim( $result_categories ) );
		}

		$words = str_word_count(str_replace('nbsp', '', strip_tags($item['body'])), 1); 
		$limit = 12;
		$excerpt_text = '';
		if(count($words) < $limit){
			$limit = count($words);
		}
		for($i = 0; $i < $limit; $i++){
			 $excerpt_text .=$words[$i].' ';
		}
		$excerpt_text = rtrim( $excerpt_text, ' ');
		$excerpt_text = $excerpt_text.'...';
?>
	   <?php if($cont == 0){ ?>
			
			<div class="row row-eq-height group-container">
					<h2 class="col-md-12 group-title"><?php print $item['condition_group']; ?></h2>
					<?php $tmp_group = $item['condition_group']; ?>
		<?php }elseif($tmp_group != $item['condition_group']){?> 
				
			</div>
			<div class="row row-eq-height group-container">
					<h2 class="col-md-12 group-title"><?php print $item['condition_group']; ?></h2>
					<?php $tmp_group = $item['condition_group']; ?>
		<?php } ?>
		
		<?php
			$cont++;
			include_card_2_buttons($item['node_id'], $item['title'], $item['image'], $excerpt_text, 'Watch', $result_categories, $item['neck_occurrence'], $item['middle_back_occurrence'], $item['lower_back_occurrence'], $item['general_occurrence']);
		?>
		<?php if($cont == (count($view->obj_tpl_data->what_hurts))){ ?>
			</div>
			
		<?php } ?>
<?php
	}
}
