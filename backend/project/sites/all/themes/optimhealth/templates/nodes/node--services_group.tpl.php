<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<?php print render($content_breadcrumbs);  ?>
<div id="news-and-events">
	<h1><?php print $node->obj_tpl_data->title; ?></h1>
	<div class="description"><?php print ($node->obj_tpl_data->introduction_text); ?></div>
	<?php $vocabulary = taxonomy_vocabulary_machine_name_load('services_filter'); ?>
	<?php 
		$terms = array();
		//get the current domain path 
		global $base_url;
		//load taxonomies from vocabulary 
		foreach(entity_load('taxonomy_term', FALSE, array('vid' => $vocabulary->vid)) as $item){
		//check if the custom field has the same domain as the page
		if($item->field_taxonomy_domain['und'][0]['value'] == str_replace('dev.','', str_replace('http://', '', $base_url))){
			//create a neww array from same domain terms
			array_push($terms, $item);
		}
	}
		
	?>
	<?php include_search_with_filter($terms); ?>
	<div class="cards cards-load-more group-filter">
		<div class="row-eq-height">
			<?php 
				if(isset($node->obj_tpl_data->services)){
			        foreach($node->obj_tpl_data->services as $item){ 
			            include_card_services($item['node_id'], $item['title'], $item['image'], $item['excerpt']);
			        } 
			    } 
			 ?>
		</div>
		
	</div>
</div>