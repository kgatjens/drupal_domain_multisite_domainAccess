var utils = require('./utils');
module.exports = () => {

	//to resolve footer behavior in homepage
	var homePageFooter 	    = $(".pure-oh-m-homepage footer"),
		theAccordion   	    = $(".accordion"),
		accordionItems 	    = theAccordion.find('.accordion-item'),
		minDistance         = 20,
		distanceElements    =  0;


	var flag = $(window).width() > 1024;

	if(desktopDevice){
		minDistance = 200;
	}

	$(".accordion").accordion({
		header: ".accordion-heading",
		collapsible: true,
		active: false,
		icons: false,
		autoHeight: false,
		heightStyle: "content",
		event: "mouseover",
		beforeActivate: function(event, ui) {
			if (flag) {

				var icon = $(ui.newHeader[0]).find('.arrow-title'),
					iconResetRotate = 0,
					iconRotate = 90;

				icon.css({
					'-webkit-transform': 'rotate(' + iconResetRotate + 'deg)',
					'-moz-transform': 'rotate(' + iconResetRotate + 'deg)',
					'-ms-transform': 'rotate(' + iconResetRotate + 'deg)',
					'-o-transform': 'rotate(' + iconResetRotate + 'deg)',
					'transform': 'rotate(' + iconResetRotate + 'deg)'
				}).css({
					'-webkit-transform': 'rotate(' + iconRotate + 'deg)',
					'-moz-transform': 'rotate(' + iconRotate + 'deg)',
					'-ms-transform': 'rotate(' + iconRotate + 'deg)',
					'-o-transform': 'rotate(' + iconRotate + 'deg)',
					'transform': 'rotate(' + iconRotate + 'deg)'
				});

				if (ui.oldHeader[0]) {
					var oldIcon = $(ui.oldHeader[0]).find('.arrow-title');
					oldIcon.css({
						'-webkit-transform': 'rotate(' + iconRotate + 'deg)',
						'-moz-transform': 'rotate(' + iconRotate + 'deg)',
						'-ms-transform': 'rotate(' + iconRotate + 'deg)',
						'-o-transform': 'rotate(' + iconRotate + 'deg)',
						'transform': 'rotate(' + iconRotate + 'deg)'
					}).css({
						'-webkit-transform': 'rotate(' + iconResetRotate + 'deg)',
						'-moz-transform': 'rotate(' + iconResetRotate + 'deg)',
						'-ms-transform': 'rotate(' + iconResetRotate + 'deg)',
						'-o-transform': 'rotate(' + iconResetRotate + 'deg)',
						'transform': 'rotate(' + iconResetRotate + 'deg)'
					});
				}
			}
		}
	});

	$(".ui-accordion").on('mouseleave', (e) => {
		$(".accordion").accordion({
			active: false
		});
	});

	if(desktopDevice){
		$( ".accordion" ).accordion( "enable" );
	}else{
		$( ".accordion" ).accordion( "disable" );
	}

	if(utils.msieversion()){
		$(window).trigger('resize');
	}

}