<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<div class="pure-oh-m-what-hurts">
<?php if($node->obj_tpl_data->is_spine == '1'){ ?>
	<h1>What’s Hurting</h1>
	<div class="row">
		<div class="col-md-8">
			<p class="description">Explore the conditions below to learn what might be causing your pain. Here you’ll find videos and information provided by our team of Spine specialists to help you find out more about each condition—and jumpstart the proccess of getting you back to you.</p>
		</div>
		<div class="links-box col-md-4">
			<span class="wrap-btn"><a class="btn btn-start" href="/whats-hurting"><span class="btn-arrow-left"><i class="fa fa-arrow-left"></i></span>START OVER</a></span>
			<span class="wrap-btn"><a class="btn btn-conditions" href="/what-hurts-results?body_part=all&diagnostic1=all&diagnostic2=all">SEE ALL CONDITIONS</a></span>
		</div>
	</div>
<?php }else{ ?>
	<h1><?php print $node->obj_tpl_data->title; ?></h1>
	<div class="description"><?php print ($node->obj_tpl_data->introduction_text); ?></div>
<?php } ?>
<?php $vocabulary = taxonomy_vocabulary_machine_name_load('conditions_category'); ?>
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
	<div class="cards group-filter">
		<div class="row-eq-height">
			<?php 
				if($node->obj_tpl_data->has_grouping == '1'){ 
					print render($content_middle); 
				}else{
					print render($content_header); 
				}
			
			?>
		</div>
	</div>
</div>

