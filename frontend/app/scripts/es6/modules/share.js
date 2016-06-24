var inject = require('./utils');
module.exports = function(){
	function share(el, title){

		var $theModal = el.data('target'),
			ModalTitle = title || 'Share';

		if($theModal){
			$theModal = $($theModal);
			var shareTitle = ModalTitle.replace(/ /g, '-').toLowerCase();
			inject.injectUrl(shareTitle);
		}else{
			$theModal 	= $('#modalTeam');
			ModalTitle 	= $theModal.find('.name').text();
		}

		var	url = escape(window.location.href);
	    var facebookShare 	= $theModal.find('.facebook-share'),
			twitterShare 	= $theModal.find('.twitter-share'),
			mailShare 		= $theModal.find('.mail-share'),
			
			facebookUrl = 'http://www.facebook.com/sharer/sharer.php?u='+ url +'&t=',
			twitterUrl = 'http://www.twitter.com/home?status='+ url +'&source=webclient',
			mailInfo = 'mailto:?subject='+ ModalTitle+'%20'.replace(/\s/g, "%20")+$theModal.find('.mail-share').data('subject')+'.&body='+ url +'';
			mailInfo = mailInfo.replace(/\n/g, "%0D%0");
			console.log(mailInfo);
			facebookShare.attr("href", facebookUrl);
			twitterShare.attr("href", twitterUrl);
			mailShare.attr("href", mailInfo);
	}


	$('.card-share').on('click', function(){
		var $this = $(this);
		var cardTitle = $this.closest('.pure-oh-m-cards').find('h2').text().toLowerCase();
		if($this.hasClass('link-share')){
			cardTitle = $this.closest('.pure-oh-h-modals').find('.detail-modal-header').text().toLowerCase(); //just for modal detail
		}
		if(cardTitle){
			$('.pure-oh-m-modal-share h2').text(cardTitle);
		}else{
			  var shareHtml = '<span data-dismiss="modal" aria-label="Close" class="pull-right close"><i class="fa fa-times"></i></span>'+
							  '<h2><i class="fa fa-share-square-o"></i> Share</h2>';
			  $('.pure-oh-m-modal-share .modal-header').html(shareHtml);
		}
		share($(this), cardTitle);
	});
}