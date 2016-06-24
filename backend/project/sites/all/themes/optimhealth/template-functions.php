<?php 

const COASTAL_ID = 10;
/**
 * 
 * Includes the breadcrumbs section
 * 
 */
function include_breadcrumbs($breadcrumbs){
	include(realpath(dirname(__FILE__)).'/templates/general-components/breadcrumbs.tpl.php');
}

/**
 * 
 * Includes the modal share template
 * 
 */
function include_modal_share(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-share.tpl.php');
}

function include_modal_loading(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-loading.tpl.php');
}

/**
 * 
 * Includes the modal search template
 * 
 */
function include_search(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-search.tpl.php');
}

/**
 * 
 * Includes the modal contact template
 * 
 */
function include_modal_contact(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-contact.tpl.php');
}

/**
 * 
 * Includes the modal request an appointment template
 * 
 */
function include_modal_request_appointment(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-request-appointment.tpl.php');
}

/**
 * 
 * Includes the modal details template
 * 
 */
function include_modal_details(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-detail.tpl.php');
}

/**
 * 
 * Includes the modal team template
 * 
 */
function include_modal_team(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-team.tpl.php');
}

/**
 * 
 * Includes the modal about template
 * 
 */
function include_modal_about(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-about.tpl.php');
}

/**
 * 
 * Includes the modal thanks appointment template
 * 
 */
function include_modal_thanks_confirmation(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-thanks-confirmation.tpl.php');
}

/**
 * 
 * Includes the modal thanks appointment template
 * 
 */
function include_modal_thanks_appointment(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-thanks-appointment.tpl.php');
}

/**
 * 
 * Includes the sidebar modal template
 * 
 */
function include_sidebar_modal(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/sidebar-modal.tpl.php');
}

/**
 * 
 * Includes the sidebar template
 * 
 */
function include_sidebar(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/sidebar.tpl.php');
}

/**
 * 
 * Includes the sidebar flat template
 * 
 */
function include_sidebar_flat(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/sidebar-flat.tpl.php');
}

/**
 * 
 * Includes the modal video template
 * 
 */
function include_modal_video(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/modal-video.tpl.php');
}


/**
 * 
 * Includes the card with 1 buttons template
 * 
 */
function include_card_one_link($title, $description, $link, $target){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-one-link.tpl.php');
}

/**
 * 
 * Includes the card with 1 buttons template
 * 
 */
function include_card_1_buttons($node_id, $title, $image=null){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-1-button.tpl.php');
}

/**
 * 
 * Includes the card with 2 buttons template
 * 
 */
function include_card_2_buttons($node_id, $title, $image=null, $excerpt=null, $view_button_text, $data_filter=null, $neck_occurrence=null, $middle_back_occurrence=null, $lower_back_occurrence=null, $general_occurrence=null){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-2-buttons.tpl.php');
}

/**
 * 
 * Includes for services
 * 
 */
function include_card_services($node_id, $title, $image=null, $excerpt=null, $data_filter=null){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-services.tpl.php');
}

/**
 * 
 * Includes for service multilevel
 * 
 */
function include_card_service_multilevel($title, $description, $link, $image=null, $target=null){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-service-multilevel.tpl.php');
}

/**
 * 
 * Includes the card for videos
 * 
 */
function include_card_videos($video_id, $title, $description){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-videos.tpl.php');
}

/**
 * 
 * Includes the card with download link template
 * 
 */
function include_card_download($node_id, $title, $image=null, $excerpt=null, $download_file, $data_filter=null){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-download.tpl.php');
}

/**
 * 
 * Includes the card with staff information
 * 
 */
function include_card_team_optim($node_id, $title, $image=null, $speciality, $degree, $view_button_text){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-team-optim.tpl.php');
}


/**
 * 
 * Includes the card with patient support info
 * 
 */
function include_card_patient_support($title, $description, $link){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-patient-support.tpl.php');
}

/**
 * 
 * Includes the card with patient tools info
 * 
 */
function include_card_patient_tools($node_id, $title, $description, $download_file){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-patient-tools.tpl.php');
}

 /** 
 * Includes the card with news/events info
 * 
 */
 //TODO: link_text default value is a patch, needs to resolve including the variable on others sections
function include_card_news_events($title, $description, $path, $image, $publish_date, $link_text='View Details'){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-news-events.tpl.php');
}

/** 
 * Includes the card with news/events info
 * 
 */
 //TODO: link_text default value is a patch, needs to resolve including the variable on others sections
function include_card_facility($title, $description, $node_id, $image, $link_text='View Details'){
	include(realpath(dirname(__FILE__)).'/templates/general-components/card-facility.tpl.php');
}


/** 
 * Includes the load more button
 * 
 */
function include_load_more_button(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/load-more-button.tpl.php');
}

/** 
 * Includes the search local form
 * 
 */
function include_search_local(){
	include(realpath(dirname(__FILE__)).'/templates/general-components/search-local.tpl.php');
}

/** 
 * Includes the search local with filter form
 * 
 */
function include_search_with_filter($collection){
	include(realpath(dirname(__FILE__)).'/templates/general-components/search-with-filter.tpl.php');
}

/**
 * 
 * This function is used to redirect bots from the page to clean page with only metatags
 * 
 */
function include_redirect_bot($id, $title){
	$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
	//parse_str($_SERVER['QUERY_STRING']);
	$text = str_replace(' ', '-', strtolower(trim($title)));

	if (strpos($url,$text) !== false) {
		
		
		//Check if the user agent is a bot.
	    if (isset($_SERVER['HTTP_USER_AGENT']) && preg_match('/bot|crawl|slurp|spider|externalhit/i', $_SERVER['HTTP_USER_AGENT'])) {
			header('Location: http://'.$_SERVER['SERVER_NAME'].'/share/'.$id);
		}
	} 
}

/**
 * 
 * Includes for providers download files
 * 
 */
function include_card_provider_file_download($date, $filename, $url) {
	include( realpath( dirname( __FILE__ ) ) . '/templates/general-components/card-provider-file-download.tpl.php' );
}


function is_coastal_site(){
	global $_domain;
	return ($_domain['domain_id'] == COASTAL_ID);
}