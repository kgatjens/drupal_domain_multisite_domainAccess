<?php 
    //the variables used on $view->obj_tpl_data->variable_name 
    //was defined on template-overrides.php 
    //the preprocess function of this view is the same as the filename. 
?>

<?php 
    if(isset($view->obj_tpl_data->service_multilevel)){
        foreach($view->obj_tpl_data->service_multilevel as $item){
            foreach ($item['link_items'] as $key => $value) {
                
                include_card_service_multilevel($value['links_title'],  $value['links_description'], $value['links_link'], $value['links_image'], $value['links_target']);
            }
        } 
    } 
?>
