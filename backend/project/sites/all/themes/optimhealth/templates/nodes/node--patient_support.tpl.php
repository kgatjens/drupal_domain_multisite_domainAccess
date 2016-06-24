<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<?php print render($content_breadcrumbs);  ?>
<div id="single-page" class="patient-support">
	<h1><?php print $node->obj_tpl_data->title; ?></h1>
	<div class="description"><?php print $node->obj_tpl_data->intro_text ?></div>
	<div class="cards">
		<div class="row">
			<?php foreach($node->obj_tpl_data->links_items as $item){ ?> 
				<?php include_card_one_link($item['title'], $item['description'], $item['link'], $item['target']);  ?>
			<?php } ?>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<?php print $node->obj_tpl_data->column_1; ?>
		</div>
		<div class="col-md-6">
			<?php print $node->obj_tpl_data->column_2; ?>
		</div>
	</div>
</div>