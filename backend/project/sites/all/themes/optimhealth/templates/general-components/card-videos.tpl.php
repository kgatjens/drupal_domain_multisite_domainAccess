<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>


<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card-item">
    <div class="pure-oh-m-cards modal-cards modal-videos" data-filter="Hand">
        <div class="panel col-eq-height">
            <div class="panel-body modal-node modal-action"  data-toggle="modal" data-target="#modalVideo" data-video="<?php print $video_id; ?>" data-title="<?php print $title; ?>" data-description="<?php print $description; ?>">
                <figure>
                    <div class="video-thumbnail">
                        <a href="#">
                            <div class="video-overlay"></div>
                            <img src="http://img.youtube.com/vi/<?php print $video_id;  ?>/0.jpg" alt="">
                        </a>
                    </div>
                </figure>
                <h2 class="video-title modal-action card-title" data-toggle="modal" data-target="#modalVideo" data-video="<?php print $video_id; ?>" data-title="<?php print $title; ?>" data-description="<?php print $description; ?>"><a href="#"><?php print $title; ?></a></h2>
                <p data-toggle="modal" data-target="#modalVideo" class="modal-node modal-action" data-video="<?php print $video_id; ?>" data-title="<?php print $title; ?>" data-description="<?php print $description; ?>"><?php print $description; ?></p>
            </div>
            <div class="panel-footer link-box">
                <a href="#" class="the-permalink modal-action"  data-toggle="modal" data-target="#modalVideo" data-video="<?php print $video_id; ?>" data-title="<?php print $title; ?>" data-description="<?php print $description; ?>">
                <i class="fa fa-play-circle-o"></i> WATCH VIDEO</a>
            </div>
        </div>
    </div>
</div>

