<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<?php print render($content_breadcrumbs);  ?>
<div id="single-page">
	<h1><?php print $node->obj_tpl_data->title; ?></h1>
	<div class="row">
		<div class="col-md-6">
			<?php print $node->obj_tpl_data->left_text; ?>
		</div>
		<div class="col-md-6">
			<?php print $node->obj_tpl_data->right_text; ?>
		</div>
	</div>
	<?php if ( !empty( $node->obj_tpl_data->provider_files ) ) { ?>
		<div class="row">
			<?php foreach ( $node->obj_tpl_data->provider_files as $key => $file ) { ?>
				<?php include_card_provider_file_download( $file['date'], $file['filename'], $file['uri'] ); ?>
			<?php } ?>
		</div>
	<?php } ?>
</div>