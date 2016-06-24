<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<?php print render($content_breadcrumbs);  ?>
<div id="single-page">
	<p class="post-date"><time datetime="<?php print $node->obj_tpl_data->date;?>"><?php print $node->obj_tpl_data->date_string;?></time></p>
	<h1><?php print $node->obj_tpl_data->title; ?></h1>
	<p class="share-box">
		<a href="#" class="the-permalink share-action modal-action card-share" data-node="<?php print $node->nid; ?>" data-toggle="modal" data-target="#modalShare"><i class="fa fa-share-square-o"></i> share</a>
	</p>
	<?php if(isset($node->obj_tpl_data->image)){?>
		<img src="<?php print $node->obj_tpl_data->image ?>" alt="test" />
	<?php } ?>
	<div class="row">
		<div class="col-md-6">
			<?php print $node->obj_tpl_data->left_text; ?>
		</div>
		<div class="col-md-6">
			<?php print $node->obj_tpl_data->right_text; ?>
		</div>
	</div>
</div>