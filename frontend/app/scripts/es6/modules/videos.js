var inject = require('./utils');
module.exports = function() {

    $('.modal-videos .modal-action').on('click', function(e) {
        e.preventDefault();
        var $parent             = $(this).closest('.modal-cards'),
            node                = $parent.find('.modal-node'),
            title               = node.data('title'),
            description         = node.data('description'),
            videoid             = node.data('video'),
            theModal            = $("#modalVideo"),
            theIframe           = theModal.find('iframe');
            theModal.find('h2').text(title);
            theModal.find('p').text(description);
            
            var video = theIframe.attr("src");
            theIframe.attr("src","");
            theIframe.attr("src","http://www.youtube.com/embed/" + videoid);

        inject.injectUrl(title);

    });
}