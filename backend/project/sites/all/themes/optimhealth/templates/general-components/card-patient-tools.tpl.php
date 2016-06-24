<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>


<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card-item">
	<div class="pure-oh-m-cards modal-cards modal-detail">
	    <div class="panel">
	    	<div class="panel-body col-eq-height modal-node modal-action" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $node_id; ?>">
	    		<h2 class="card-title"> <?php print $title; ?></h2>
			    <p><?php print $description; ?></p>
			    <span><i class="fa fa-arrow-right"></i>  Continue Reading</span>
	    	</div>
	    	<div class="panel-footer">
				<div class="btn-group btn-group-justified buttons">
				    <div class="btn-group">
				    	<?php if(isset($download_file)) { ?> 
				    		<a href="<?php print $download_file; ?>" type="button" class="btn button" target="_blank"><i class=" fa fa-file-text-o"></i> Download</a>
				    	<?php }else{ ?> 
				    		<button type="button" class="btn modal-node modal-action modal-node " data-toggle="modal" data-target="#modalDetails" data-node="<?php print $node_id; ?>"><i class=" fa fa-play"></i>  Watch</button>
				    	<?php } ?>
				    </div>
				    <div class="btn-group">
				      	<button type="button" class="btn card-share" data-toggle="modal" data-target="#modalShare" data-node="<?php print $node_id; ?>"><i class="fa fa-share-square-o"></i>  Share</button>
				    </div>
				</div>
	    	</div>
	    </div>
	</div>
</div>
