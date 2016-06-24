module.exports = function() {
	// var imageBg = $('.pure-oh-m-testimonials .banner img').attr('data-bg-color');
	// $('.pure-oh-m-testimonials .banner').css('background-color', imageBg);

	function getMargin(){
		var	imageBg = $('.pure-oh-m-testimonials .banner .bannerImage'),
			$header = $('.pure-oh-m-testimonials .pure-oh-m-header-dark').outerHeight(),
			marginTop = - $header;
		imageBg.css('margin-top', marginTop);
	}

	getMargin();

	$(window).resize(getMargin);
}