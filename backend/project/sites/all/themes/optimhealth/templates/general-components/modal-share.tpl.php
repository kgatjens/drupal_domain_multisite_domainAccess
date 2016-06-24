<div class="modal fade pure-oh-h-modals pure-oh-m-modal-share" id="modalShare" tabindex="-1" role="dialog" aria-labelledby="modalShare">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header text-center">
				<span data-dismiss="modal" aria-label="Close" class="pull-right close"><i class="fa fa-times"></i></span>
				<h2><i class='fa fa-share-square-o'></i> Share</h2>
			</div>
			<div class="modal-body">	
				<div class="row pure-oh-m-share">
					<div class="col-xs-4 col-sm-4 text-center">
						<a class="facebook-share" href="" target="_blank">
							<svg class="svg-icon share-facebook"><use xlink:href="#share_fb"></use></svg>
							<span class="facebook share-facebook">Facebook</span>
						</a>
					</div>
					<div class="col-xs-4 col-sm-4 text-center">
						<a class="twitter-share" href="" target="_blank">		
							<svg class="svg-icon share-twitter"><use xlink:href="#share_twitter"></use></svg>
							<span class="twitter share-twitter">Twitter</span>
						</a>
					</div>
					<div class="col-xs-4 col-sm-4 text-center">
					<a class="mail-share" href="" data-subject="<?php print str_replace(' ', '%20', variable_get('contact_email_subject')); ?>">
						<svg class="svg-icon share-email"><use xlink:href="#share_mail"></use></svg>
						<span class="email share-email">Email</span>
					</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>