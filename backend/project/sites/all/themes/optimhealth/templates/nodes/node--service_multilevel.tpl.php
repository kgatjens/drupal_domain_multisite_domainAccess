<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php
?>

<?php print render($content_breadcrumbs);  ?>

<?php
  $page_type=$node->obj_tpl_data->page_type;
  $page_type=strtolower($page_type);
  $page_type=str_replace(' ', '_', $page_type);
  $page_type='landing-pages/landing-page--'.$page_type.'.tpl.php';
  if(@include($page_type));
?>






