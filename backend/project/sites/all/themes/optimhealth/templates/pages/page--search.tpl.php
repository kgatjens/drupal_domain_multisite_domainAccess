<?php include_search(); ?>
<?php include_modal_contact(); ?>
<?php include_modal_request_appointment(); ?>
<?php include_modal_details(); ?>
<?php include_modal_team(); ?>
<?php include_modal_about(); ?>
<?php include_modal_share(); ?>
<?php include_modal_thanks_confirmation(); ?>
<?php include_modal_video(); ?>
<?php //include_modal_loading(); ?>
<section class="pure-oh-m-page">
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
				<?php print render($page['header']); ?>
				<div class="pure-oh-m-search-result">
					<div class="result-list">
						<ul>
							<?php print render($page['content']); ?>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-4">
				<?php print render($page['sidebar']); ?>
			</div>
		</div>
	</div>
</section>