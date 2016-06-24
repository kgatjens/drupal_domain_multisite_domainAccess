<?php 
    //the form was defined on drupal, check on the webform section in the cms
?>
<?php //variable_get returns the information defined on site information ?>
<div class="modal fade pure-oh-h-modals pure-oh-m-modal-contact" id="modalContact" tabindex="-1" role="dialog" aria-labelledby="modalContact">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-body">
				<div class="container-fluid">
					<div class="row background">
						<div class="col-sm-5 col-xs-12 contact-col">
							<h2 class="text-center">Contact</h2>
							<div class="row line">
								<div class="col-xs-1">
									<i class="fa fa-phone"></i>
								</div>
								<div class="col-xs-10">
									<p class="phone"><a href="tel:<?php print variable_get('contact_international_phone'); ?>"><?php print variable_get('contact_international_phone'); ?></a></p>
								</div>
							</div>
							<div class="row line">
								<div class="col-xs-1">
									<i class="fa fa-envelope"></i>
								</div>
								<div class="col-xs-10">
									<p class="email"><a href="mailto:<?php print variable_get('contact_email'); ?>"><?php print variable_get('contact_email'); ?></a></p>
								</div>
							</div>
							<div class="row address-container">
								<div class="col-xs-1">
									<i class="fa fa-envelope"></i>
								</div>
								<div class="col-xs-10">
									<div class="info-details">
										<p class="institution"><?php print variable_get('contact_organization'); ?></p>
										<p class="info"><?php print variable_get('contact_address_1'); ?></p>
										<p class="info"><?php print variable_get('contact_address_2'); ?></p>
										<p class="info"><?php print variable_get('contact_phone'); ?></p>
										<p class="info"><?php print variable_get('contact_schedule'); ?></p>
									</div>
								</div>
							</div>
							<a href="<?php print optimhealth_get_contact_vcf(); ?>" download class="save-contact">Save Contact <i class="fa fa-newspaper-o"></i></a>
						</div>
						<div class="col-sm-7 col-xs-12 signup-col">
							<div class="row pull-rigth">
								<span data-dismiss="modal" aria-label="Close" class="pull-right close"><i class="fa fa-times"></i></span>
							</div>
							<h4><?php print variable_get('contact_title'); ?></h4>
							<div class="paragraph"><?php print variable_get('contact_description'); ?></div>
							<div class="error-details"></div>
							<?php 
								$block = module_invoke('webform', 'block_view', 'client-block-142');
								print render($block['content']);
							?>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>