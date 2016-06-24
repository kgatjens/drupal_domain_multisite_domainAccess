var utils = require('./utils');
module.exports = function(){
	$('.pure-oh-m-accordion-locations').slimScroll({
	    height: '600px',
	    railVisible: true,
	    alwaysVisible: true
	});

	if (utils.msieversion()){
		$('.sidebar').slimScroll({
		    height: 'auto',
		    railVisible: true,
		    alwaysVisible: true,
		    distance: '2px'
		});
	}
}