<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<?php print render($content_breadcrumbs);  ?>
<div id="single-page">
	
	<h1 class="work-comp"><?php print $node->obj_tpl_data->title; ?></h1>
	<div class="row">
		<div class="col-md-12">
			<?php print $node->obj_tpl_data->body; ?>
		</div>
	</div>
</div>