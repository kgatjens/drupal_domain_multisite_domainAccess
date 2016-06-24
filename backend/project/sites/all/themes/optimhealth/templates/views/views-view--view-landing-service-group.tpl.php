<?php 
    //the variables used on $view->obj_tpl_data->variable_name 
    //was defined on template-overrides.php 
    //the preprocess function of this view is the same as the filename. 
?>

<?php 
if(isset($view->obj_tpl_data->services)){
$tmp_group = '';
$cont = 0;
foreach($view->obj_tpl_data->services as $item){ 
    include_redirect_bot($item['node_id'],  $item['title']);
?> 
        <?php if($tmp_group == ''){ ?>
            
                <div class="row row-eq-height group-container">
                    <h2 class="col-md-12 group-title"><?php print $item['service_group']; ?></h2>
                    <?php $tmp_group = $item['service_group']; ?>
        <?php }elseif($tmp_group != $item['service_group']){?>
                </div>
            
            <div class="row row-eq-height group-container">
                    <h2 class="col-md-12 group-title"><?php print $item['service_group']; ?></h2>
                    <?php $tmp_group = $item['service_group']; ?>
        <?php } ?>
        <?php 
            $cont++;
            include_card_services($item['node_id'], $item['title'], $item['image'], $item['excerpt']); 
        ?>
        <?php if($cont == (count($view->obj_tpl_data->what_hurts))){ ?>
            </div>
            
        <?php } ?>
    
<?php } } ?>
