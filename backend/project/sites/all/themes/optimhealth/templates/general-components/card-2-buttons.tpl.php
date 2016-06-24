<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>
	<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card-item">
	    <div class="pure-oh-m-cards modal-cards modal-detail" <?php if(isset($data_filter)){?> data-filter="<?php print $data_filter; ?>"<?php } ?>
			<?php if(isset($neck_occurrence)){ ?>data-occurrence-neck="<?php print $neck_occurrence.$title; ?>"<?php }?>
			<?php if(isset($middle_back_occurrence)){ ?>data-occurrence-middle-back="<?php print $middle_back_occurrence.$title; ?> "<?php } ?>
			<?php if(isset($lower_back_occurrence)){ ?>data-occurrence-lower-back="<?php print $lower_back_occurrence.$title; ?> "<?php } ?>
			<?php if(isset($general_occurrence)){ ?>data-occurrence-all="<?php print $general_occurrence.$title; ?> "<?php } ?>
	   	>
	        <div class="panel ">
	            <div class="panel-body col-eq-height modal-node modal-action" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $node_id; ?>" data-dismiss="modal">
	                <figure>
	                <?php if(isset($image)){ ?> 
	                    <img src="<?php print $image; ?>" alt="">
	                <?php } ?>
	                </figure>
	                <h2 class=" card-title" id="modal-node" ><?php print $title; ?></h2>
	                <?php if(isset($excerpt)) { ?>
	                	<p><?php print $excerpt; ?></p>
		                <span><i class="fa fa-arrow-right"></i>  Continue Reading</span>
	                <?php } ?>                
	            </div>
	            <div class="panel-footer">
				    <div class="btn-group btn-group-justified buttons">
					    <div class="btn-group">
					    	<button type="button" class="btn modal-node modal-action" data-toggle="modal" data-target="#modalDetails" data-dismiss="modal" data-node="<?php print $node_id; ?>"><i class=" fa fa-play"></i>  <?php print $view_button_text; ?></button>
					    </div>
					    <div class="btn-group">
					      	<button type="button" class="btn card-share" data-toggle="modal" data-target="#modalShare" data-dismiss="modal" data-node="<?php print $node_id; ?>"><i class="fa fa-share-square-o"></i>  Share</button>
					    </div>
					</div>
		    	</div>
	        </div>
	    </div>
	</div>

