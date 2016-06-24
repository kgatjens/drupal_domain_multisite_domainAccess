<?php //$color = variable_get('sidebar_msg_color') ? '' : 'blank_color'; ?>

<div class="modal fade pure-oh-h-modals pure-oh-m-modal-details <?php // print $color;?>" id="modalDetails" tabindex="-1" role="dialog" aria-labelledby="modalDetails">
	<div class="modal-loader"></div>
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<span data-dismiss="modal" aria-label="Close" class="pull-right close"><i class="fa fa-times"></i></span>
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12 col-sm-7 col-md-9 leftcol">
						<div class="modal-header"></div>
						<div class="modal-body">
							<figure class="modal-img">
							</figure>
							<span class="modal-icons-group">
								<a href="#" class="link-share card-share" data-toggle="modal" data-target="#modalShare" data-dismiss="modal"><i class="fa fa-share-square-o"></i>  Share</a>
								<span class="down-icon"></span>
							</span>
							<div class="details modal-info"></div>
							<div class="custom-embed"></div>
							<div class="references"></div>
						</div>
					</div>
					<div class="col-sm-5 col-md-3 rightcol">
						<?php include_sidebar_modal(); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>