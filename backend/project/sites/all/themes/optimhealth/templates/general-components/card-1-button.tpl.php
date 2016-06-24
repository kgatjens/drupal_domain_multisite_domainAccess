<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card-item">
    <div class="pure-oh-m-cards modal-cards modal-detail">
        <div class="panel">
            <div class="panel-body col-eq-height modal-node modal-action" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $node_id; ?>" data-dismiss="modal">
                <figure>
                    <?php if(isset($image)){ ?> 
	        			<img src="<?php print $image; ?>" alt="">
	        		<?php } ?>
                </figure>
                <h2 class="card-title"><?php print $title; ?></h2>
            </div>
            <div class="panel-footer">
                <div class="btn-group btn-group-justified buttons">
                    <div class="btn-group">
                    	<button type="button" class="btn modal-node modal-action" data-dismiss="modal" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $node_id; ?>"><i class=" fa fa-play"></i>  Watch</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>