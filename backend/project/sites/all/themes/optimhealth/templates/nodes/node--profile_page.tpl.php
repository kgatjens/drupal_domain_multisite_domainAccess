<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//NOTE: this page is related with physician.hbs on the FE project
?>
<?php print render($content_breadcrumbs);  ?>
<div id="single-page">
	<h1><?php print $node->obj_tpl_data->title; ?></h1>
	<p class="share-box">
		<a href="#" class="the-permalink share-action modal-action card-share" data-toggle="modal" data-target="#modalShare" data-node="<?php print $node->nid; ?>"><i class="fa fa-share-square-o"></i> share</a>
	</p>
	<?php if(isset($node->obj_tpl_data->image)){?>
		<img src="<?php print $node->obj_tpl_data->image ?>" alt="test" />
	<?php } ?>
	
	<div class="row">
		<div class="col-md-12">
			<?php print $node->obj_tpl_data->body ?>
		</div>
	</div>

</div>