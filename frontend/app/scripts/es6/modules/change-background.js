module.exports = function(){

	function changeBackground(el, color){
	    if(color){
	        el.css('background-color', color);
	    }
	}

	var $sidebar 		= $('.pure-oh-m-sidebar');
	var sHeader 		= $sidebar.find('.header');
	var sRibbon 		= $sidebar.find('.ribbon');
	var sRibbonAfter 	= $sidebar.find('.ribbon');
	var hColor  		= sHeader.attr('data-background');

	changeBackground(sHeader, hColor);
	
}