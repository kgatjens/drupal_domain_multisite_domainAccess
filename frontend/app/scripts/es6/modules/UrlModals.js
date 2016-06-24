module.exports = function (){
	// Modify the URL to add the name of the modal

	$('.modal.fade').on('hidden.bs.modal', function(e){
		e.preventDefault();
		var $modalVideo = $("#modalVideo");
		var currentUrl = window.location.search;
        if(currentUrl.indexOf('body_part') !== -1){
           var index = currentUrl.lastIndexOf('&');
           currentUrl = currentUrl.substring(index, 0);
        }else{
         	currentUrl = window.location.pathname;
        }

        if(currentUrl == ""){
        	currentUrl = '.';
        }

        if($modalVideo.length){
        	var theIframe = $modalVideo.find('iframe');
        	theIframe.attr("src","");
        }

        history.pushState(null, null, currentUrl);

	});

	$('#modalTeam').on('shown.bs.modal', function() {
		var tabList = $(this).find('.nav-tabs').find("a[href='#info']");
		tabList.click();
	});


	$('body').on('hidden.bs.modal', '.modal', function (e){
		e.preventDefault();
	  $(this).removeData('bs.modal');

	  // clear yt videos after close modal
	   var $iframes = $(e.target).find("iframe");
	    $iframes.each(function(index, iframe){
	      $(iframe).attr("src", $(iframe).attr("src"));
	    });

	    $('.modal:visible').length && $(document.body).addClass('modal-open');

	});

}
