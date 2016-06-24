<?php include_search(); ?>
<?php include_modal_contact(); ?>
<?php include_modal_request_appointment(); ?>
<?php include_modal_details(); ?>
<?php include_modal_team(); ?>
<?php include_modal_about(); ?>
<?php include_modal_share(); ?>
<?php include_modal_thanks_confirmation(); ?>
<?php include_modal_video(); ?>
<?php // include_modal_loading(); ?>
<section class="pure-oh-m-page">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<?php print render($page['header']); ?>
				<?php print render($page['header_white']); ?>
				<?php print render($page['content']); ?>
				<?php print render($page['footer']); ?>		
			</div>
			<div class="col-xs-12 visible-xs">
				<?php print render($page['sidebar']); ?>
			</div>
		</div>
	</div>
</section>