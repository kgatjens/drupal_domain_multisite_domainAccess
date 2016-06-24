module.exports = function(){

	$('#modalDetails').on('shown.bs.modal', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.sidebar').slimScroll({
			height: 'auto',
		    railVisible: true,
		    alwaysVisible: true,
		    distance: '0px'
		});
	});
}