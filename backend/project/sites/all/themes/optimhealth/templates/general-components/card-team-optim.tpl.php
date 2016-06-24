<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card-item">
    <div class="pure-oh-m-cards modal-cards modal-team">
        <div class="panel">
            <div class="panel-body col-eq-height modal-node modal-action" data-toggle="modal" data-target="#modalTeam" data-node="<?php print $node_id ?>">
                <?php if(isset($image)){ ?> 
                <figure>
                    <img src="<?php print $image; ?>" alt="">
                <?php } ?>
                </figure>
                <h4><?php $i=1; if(count($speciality)>1){
                foreach ($speciality as $key => $value) {
                    $comma = ($i==count($speciality)) ? '' : ', ';
                    print $value.$comma;
                    $i++;
                }
                }else{
                    print $speciality;
                }?></h4>
                <h2><?php print $title; ?></h2>
                <h3><?php print $degree; ?></h3>
            </div>
            <div class="panel-footer">
                <div class="btn-group btn-group-justified buttons">
                    <div class="btn-group">
                        <button type="button" data-toggle="modal" class="btn modal-node modal-action" data-target="#modalTeam" data-node="<?php print $node_id; ?>"><i class=" fa fa fa-eye"></i> <?php print $view_button_text; ?></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>