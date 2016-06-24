<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<h1><?php print $node->obj_tpl_data->title; ?></h1>
<div class="description"><?php print strip_tags($node->obj_tpl_data->introduction_text); ?></div>
<?php include_search_local(); ?>
<div class="cards">
	<div class="row-eq-height">
	<?php print render($content_header); ?>
	</div>
</div>