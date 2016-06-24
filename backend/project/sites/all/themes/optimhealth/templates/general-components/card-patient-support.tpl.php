<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 card-item">
    <div class="pure-oh-m-cards">
        
            <div class="panel">
                <a href="<?php print $link; ?>">
                    <div class="panel-body col-eq-height">
                        <h2 class="card-title">
                            <?php print $title; ?>
                        </h2>
                        <p><?php print $description; ?></p>
                    </div>
                </a>
                <div class="panel-footer link-box">
                    <a href="<?php print $link; ?>" class="the-permalink"><i class="fa fa-arrow-right"></i> Learn More</a>
                </div>
            </div>
        
    </div>
</div>
