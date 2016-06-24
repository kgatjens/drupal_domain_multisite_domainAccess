<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="pure-oh-m-cards modal-cards modal-detail" <?php if ( isset( $data_filter ) ) { ?> data-filter="<?php print $data_filter; ?>"<?php } ?>>
        <div class="panel">
            <div class="panel-body col-eq-height modal-node modal-action" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $node_id; ?>">
                <?php if(isset($image)){ ?> 
                <figure>
                    <img src="<?php print $image; ?>" alt="">
                </figure>
                <?php } ?>
                <h2 class="card-title">
                   <?php print $title; ?>
                </h2>
                <p><?php print strip_tags($excerpt); ?></p>
                
            </div>
            <div class="panel-footer link-box">
                <a href="#" class="the-permalink modal-node modal-action" id="modal-node" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $node_id; ?>" ><i class="fa fa-arrow-right"></i> Continue Reading</a>
            </div>
        </div>
    </div>
</div>