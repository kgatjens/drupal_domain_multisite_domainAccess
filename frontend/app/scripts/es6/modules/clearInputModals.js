module.exports = function(){
	function clear(modal){
		$(modal)
    		.find("input,textarea,select")
       			.removeClass('error-field')
       			.end()
	    	.find("input[type=checkbox], input[type=radio]")
	       		.prop("checked", "")
	       		.end()
	       	.find('.error-details')
	       		.children('p').remove()
	       		.end();
	};

	$('#modalRequestAppointment').on('hidden.bs.modal', function (e) {
  		clear($(this));
	});
	$('#modalContact').on('hidden.bs.modal', function (e) {
  		clear($(this));
	});
	$('#modalTeam').on('hidden.bs.modal', function (e) {
  		clear($(this));
	});
}