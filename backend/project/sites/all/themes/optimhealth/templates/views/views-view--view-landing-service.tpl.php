<?php 
    //the variables used on $view->obj_tpl_data->variable_name 
    //was defined on template-overrides.php 
    //the preprocess function of this view is the same as the filename. 
?>

<?php 
    if ( isset( $view->obj_tpl_data->services ) ) {
        foreach ( $view->obj_tpl_data->services as $item ) { 
        	$result_categories = '';

			if ( isset( $item['category'] ) ) {
				if ( is_string( $item['category'] ) ) { 
					$result_categories .= str_replace( array( ' ', ',' ), array( '-', '' ), $item['category']).',';
				} else { 
					foreach ( $item['category'] as $category ) {
						$result_categories .= str_replace( array( ' ', ',' ), array( '-', '' ), $category).',';
					}
				}
				$result_categories = ltrim( rtrim( $result_categories ) );
			}
			include_redirect_bot($item['node_id'],  $item['title']);
            include_card_services( $item['node_id'], $item['title'], $item['image'], $item['excerpt'], $result_categories );
        } 
    } 
?>
