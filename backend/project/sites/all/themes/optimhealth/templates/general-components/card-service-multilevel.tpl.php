<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="pure-oh-m-cards modal-cards modal-detail">
        <div class="panel">
            <div class="panel-body col-eq-height">
                <a href="<?php print $link; ?>" class="card-links" <?php print $target; ?> >
                    <?php if(isset($image)){ ?> 
                    <figure>
                        <img src="<?php print $image; ?>" alt="">
                    </figure>
                    <?php } ?>
                    <h2 class="card-title">
                       <?php print $title; ?>
                    </h2>
                    <p><?php print strip_tags($description); ?></p>
                </a>
            </div>
            <div class="panel-footer link-box">
                <a href="<?php print $link; ?>" class="the-permalink"<?php print $target; ?>><i class="fa fa-arrow-right"></i> Continue Reading</a>
            </div>
        </div>
    </div>
</div>