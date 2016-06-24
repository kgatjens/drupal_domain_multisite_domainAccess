<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card-item">
    <div class="pure-oh-m-cards modal-cards modal-detail">
        
            <div class="panel">
                <a href="<?php print $link; ?>" target="<?php print $target; ?>">
                    <div class="panel-body col-eq-height">
                        <h2 class="card-title"><?php print $title; ?></h2>
                        <p><?php print strip_tags($description); ?></p>
                    </div>
                </a>
                <div class="panel-footer">
                    <div class="btn-group btn-group-justified buttons">
                        <div class="btn-group">
                            <a href="<?php print $link; ?>" target="<?php print $target; ?>" class="btn the-permalink">
                                Click Here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
</div>

