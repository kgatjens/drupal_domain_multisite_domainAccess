<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card-item">
    <div class="pure-oh-m-cards">
        <div class="panel ">
            <div class="panel-body col-eq-height">
                <a href= "<?php print $path; ?>">
                <?php if(isset($image)){ ?> 
                <figure>
                    <img src="<?php print $image; ?>" alt="">
                </figure>
                <?php } ?>

                <?php if(isset($publish_date)){ ?> 
                    <?php 
                        $date = date('m/d/y', strtotime($publish_date)); 
                        $date_text = date('F j, Y', strtotime($publish_date)); 
                    ?>
                    <p class="card-date"><time datetime="<?php print $date; ?>"><?php print $date_text; ?></time></p>
                <?php } ?>
                <h2 class="card-title">
                   <?php print $title; ?>
                </h2>
                <p><?php print strip_tags($description); ?></p>
                </a>
            </div>
            <div class="panel-footer link-box">
                <a href="<?php print $path; ?>" class="the-permalink"><i class="fa fa-arrow-right"></i> <?php print $link_text; ?></a>
            </div>
        </div>
    </div>
</div>