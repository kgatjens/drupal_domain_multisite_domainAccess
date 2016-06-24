<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php 
if(isset($view->obj_tpl_data->staff)){
    foreach($view->obj_tpl_data->staff as $worker){
        $degree_text = ''; 
        foreach($worker['degree'] as $item)
        {
            $degree_text .= $item.', ';
        }
        $degree_text = substr($degree_text, 0, -2);
                        
        include_redirect_bot($worker['node_id'],  $worker['title']);
        include_card_team_optim($worker['node_id'], $worker['title'], $worker['photo'], $worker['speciality'], $degree_text, 'View');

    }
}
