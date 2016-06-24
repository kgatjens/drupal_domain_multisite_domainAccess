<?php 
    //the form was defined on drupal, check on the webform section in the cms
?>
<div class="modal fade pure-oh-h-modals pure-oh-m-modal-team" id="modalTeam" tabindex="-1" role="dialog" aria-labelledby="modalTeam">
	<div class="modal-loader"></div>
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-body">
				<div class="leftcol">
					<span data-dismiss="modal" aria-label="Close" class="pull-right close"><i class="fa fa-times"></i></span>
					<figure class="modal-img">
					</figure>
					<header class="main-header-info">
					</header>
			    	<div>
			    		<ul class="nav nav-pills nav-tabs" role="tablist">
			    			<li role="presentation" class="text-center">
			    				<a href="#info" aria-controls="info" role="tab" data-toggle="tab">
			    				<i class="fa fa-info-circle icon"></i>Info</a>
			    			</li>
			    			<li role="presentation" class="text-center">
			    				<a href="#locations" aria-controls="locations" role="tab" data-toggle="tab">
			    				<i class="fa fa-map-marker icon"></i>Locations</a>
			    			</li>
			    			<li role="presentation" class="text-center">
			    				<a href="#contact" aria-controls="contact" role="tab" data-toggle="tab">
			    				<i class="fa fa-envelope icon"></i>Contact</a>
			    			</li>
			    			<li role="presentation" class="text-center">
			    				<a href="#share" class="card-share" aria-controls="share" role="tab" data-toggle="tab">
			    				<i class="fa fa-share-square-o icon"></i>Share</a>
			    			</li>
			    			<li role="presentation" class="text-center">
			    				<a href="#links" aria-controls="links" role="tab" data-toggle="tab">
			    				<i class="fa fa-link icon"></i>Links</a>
			    			</li>
			    		</ul>
			    		<div class="tab-content">
			    			<div role="tabpanel" class="tab-pane active certifications-info" id="info">
			    			</div>
			    			<div role="tabpanel" class="tab-pane locations-tab" id="locations">
			    			</div>
			    			<div role="tabpanel" class="tab-pane" id="contact">
			    				<div class="row">
			    					<div class="col-xs-10 col-xs-offset-1">
			    						<p class="description">Complete the following form to contact this provider.</p>
			    					</div>
			    				</div>
			    				<div class="error-details"></div>
			    				<?php 
									$block = module_invoke('webform', 'block_view', 'client-block-143');
									print render($block['content']);
								?>
			    			</div>
			    			<div role="tabpanel" class="tab-pane" id="share">
			    				<div class="row">
			    					<div class="col-xs-10 col-xs-offset-1 text-center">
			    						<p class="share-info">Get social, share Dr. Jack Considine’s information through:</p>
			    					</div>
			    				</div>
			    				<div class="row">
			    					<div class="col-xs-12 text-center">
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
			    			<div role="tabpanel" class="tab-pane links-tab" id="links"></div>
			    		</div>
			    	</div>
		    	</div>
		    	
			</div>
		</div>
	</div>
</div>