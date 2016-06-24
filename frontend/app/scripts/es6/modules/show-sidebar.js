module.exports = function(){
	$('.show-sidebar').click(function(event) {
		/* Act on the event */
		if ($('.pure-oh-m-sidebar').find('sidebar-modal')){
			$('.pure-oh-m-sidebar').find('.sidebar.hidden-xs').removeClass('hidden-xs');
			$('.pure-oh-m-sidebar').find('.mobile-footer').addClass('hidden-xs');
			$('.pure-oh-h-modals').find('.leftcol').addClass('hidden-xs');
		}else{
			$('.pure-oh-m-sidebar').find('.sidebar.hidden-xs').removeClass('hidden-xs');
			$('.pure-oh-m-sidebar').find('.mobile-footer').addClass('hidden-xs');
		}
	});

	$('.pure-oh-m-sidebar .close').click(function(event) {
		/* Act on the event */
		if($('.pure-oh-m-sidebar').find('sidebar-modal')){
			$('.sidebar').addClass('hidden-xs');
			$('.mobile-footer').removeClass('hidden-xs');
			$('.pure-oh-h-modals').find('.leftcol').removeClass('hidden-xs');
		}else{
			$('.sidebar').addClass('hidden-xs');
			$('.mobile-footer').removeClass('hidden-xs');
		}
	});

}