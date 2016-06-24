'use strict';

import accordion from "./modules/Accordion";
import modalTeam from "./modules/ModalTeam";
import globalSearch from "./modules/search";
import locations from "./modules/locations";
import searchLocal from "./modules/search-local";
import searchLocations from "./modules/search-locations";
import formsValidate from "./modules/formsValidate";
import cardModalDetails from "./modules/cardModalDetails";
import cardModalTeam from "./modules/cardModalTeam";
import whatHurts from "./modules/what-hurts";
import testimonial from "./modules/testimonial";
import resizeCards from "./modules/ResizeCards";
import share from "./modules/share";
import showSidebar from "./modules/show-sidebar";
import urlModal from "./modules/UrlModals";
import searchWithFilter from "./modules/search-withfilter";
import validateForms from "./modules/validateForms";
import videos from "./modules/videos";
import clearInputModals from "./modules/clearInputModals";
import animationWH from "./modules/animation-what-hurts";
import pagination from "./modules/pagination";
import changeBg from "./modules/change-background";
import scroll from "./modules/scroll";
import sidebarScroll from "./modules/sidebar-scroll";


// jQuery DOM Ready
$(() => {
	'use strict';
	// initialize

	global.host = 'http://' + document.domain;
	global.desktopDevice = false;
	global.mobileDevice  = false;

	if((document.domain == '') || (document.domain == 'localhost')){
	  host = 'http://104.130.12.33';
	}

	if (!("ontouchstart" in document.documentElement)) {
		document.documentElement.className += " no-touch";
		desktopDevice = true;
	}else{
		document.documentElement.className += " touch-dev";
		mobileDevice = true;
	}

	if(typeof window.orientation !== 'undefined'){
		mobileDevice = true;
	}

	accordion();
	modalTeam();

	if($("#search-locations").length > 0){
		searchLocations();
	}

	if($("#search-text-field").length > 0){
		globalSearch();
	}

	whatHurts();

	if ($('#map').length > 0) {
		locations();
	}

	if($('.sidebar .header')){
		changeBg();
	}

	searchLocal();
	videos();
	formsValidate();
	cardModalDetails();
	cardModalTeam();
	testimonial();
	resizeCards();
	share();
	showSidebar();
	urlModal();
	searchWithFilter();
	validateForms();
	clearInputModals();
	if($('.circle').length > 0){
		animationWH();
	}
	pagination();
	scroll();
	sidebarScroll();

});