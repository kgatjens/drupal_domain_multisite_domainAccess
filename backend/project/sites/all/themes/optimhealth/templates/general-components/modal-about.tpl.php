<div class="modal fade pure-oh-h-modals pure-oh-m-modal-about" id="modalAbout" tabindex="-1" role="dialog" aria-labelledby="modalCAbout">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div id="modal-header">
				<span data-dismiss="modal" aria-label="Close" class="pull-right close"><i class="fa fa-times"></i></span>
				<h1><?php print variable_get('about_title'); ?></h1>
			</div>
			<div class="modal-body">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-12">
							<div class="leftcol">
								<p class="description"><?php print str_replace(PHP_EOL, '<br/>',variable_get('about_info'));?></p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>