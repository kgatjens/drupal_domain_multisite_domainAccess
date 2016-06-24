<?php 
    //the menu was defined on drupal
    //check the section structure/menus on the cms

	global $_domain;

	$host      = $_SERVER['HTTP_HOST'];
	$msg_title = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_title' ) : variable_get( 'sidebar_msg_title' );

	if ( $host == 'dev.spine.optimhealth.com' || $host == 'spine.optimhealth.com' ) {
		include_sidebar();
	} else {
		include_sidebar_flat();
	}