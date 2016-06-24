var inject = require('./utils');

module.exports = function() {

    $(document).ready(function() {
        setTimeout(function (){
            var hash = window.location.search;
            if (hash != ""){
                if(hash.indexOf("m=") !== -1){
                    if(hash.indexOf("thank-you-confirmation") !== -1){
                        getModalThanks(hash);
                    }
                    var filter = /m=(.+)/;
                    var currentTitle = hash.match(filter);
                        currentTitle = $.trim(currentTitle[1]);
                        currentTitle = currentTitle.replace(/\%27/g, "'");
                        currentTitle = currentTitle.replace(/\%c2%ae/g, '®');
                        currentTitle = currentTitle.replace(/[^a-zA-Z0-9.]+/g, '');
                        currentTitle = currentTitle.replace(' ', '-');
                        currentTitle = currentTitle.toLowerCase();


                    $('.modal-cards').each(function(index) {
                        var text = $(this).find('h2').text();
                            text = $.trim(text.toLowerCase());
                            text = text.replace(/[^a-zA-Z0-9.]+/g,'');
                            text = text.replace(' ', '-');
                        if(text == currentTitle){
                            $(this).find('.modal-action').eq( 0 ).trigger( "click" );
                            if($(this).hasClass('modal-team')){
                                $('#modalTeam').modal('show');
                            }else if($(this).hasClass('modal-detail')){
                                $('#modalDetails').modal('show');
                            }

                            return false;
                        }
                    });


                    function getModalThanks(url){
                        function getParameterByName(name){
                            name = name.replace(/[\[\]]/g, "\\$&");
                            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                                results = regex.exec(url);
                            if (!results) return null;
                            if (!results[2]) return '';
                            return decodeURIComponent(results[2].replace(/\+/g, " "));
                        }
                        var modalTitle = getParameterByName('title');
                        var modalBody  = getParameterByName('body');
                        $("#modalThanksConfirmation").find('h1').text(modalTitle);
                        $("#modalThanksConfirmation").find('p').text(modalBody);
                        $("#modalThanksConfirmation").modal('show');
                    }
                }
            }
        }, 500);
    });


    $(document).ajaxStart(function() {
        $("#modalDetails .modal-loader, #modalTeam .modal-loader").show();
        $("#modalDetails .modal-dialog, #modalTeam .modal-dialog").hide();
    });

    $('.cards').on( 'click', '.modal-detail .modal-action', function(e) {
          // function that call ajax modal info
        e.preventDefault();
        var items = [];
        var htmlHeaderInfo = '';
        var htmlImg = '';
        var htmlBody = '';
        var htmlCustomEmbed = '';
        var htmlFileUrl = '';
        var htmlRelated = '';
        var nodeNumber = $(this).closest('.modal-cards, .wrap-hero-description').find('.modal-node');
        nodeNumber = nodeNumber.data('node');
        var cardModalContent = host + '/content-result';
        var cardModalRelated = host + '/related-content';
        var theModal = $($(this).data('target'));

        $.when(ajax(), ajax1()).done(function(data, data1){
            $("#modalDetails .modal-loader, #modalTeam .modal-loader").hide();
            $("#modalDetails .modal-dialog, #modalTeam .modal-dialog").show();
            modalInfo(data);
            modalRelated(data1);
            // reset modal scroll
            $('.leftcol').scrollTop(0);
        });

        function modalInfo(data){
            if (data[0].nodes.length > 0) {
                items = data[0].nodes;
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];

                    // loop through keys

                    htmlHeaderInfo += '<h2 class="detail-modal-header">' + item.node.title + '</h2>';

                    if (item.node.image) {
                        htmlImg += '<img src="' + item.node.image.src + '" alt="' + item.node.image.alt + '">';
                        $(".modal-content").removeClass('no-frame');
                    }else{
                        $(".modal-content").addClass('no-frame');
                    }

                    if (item.node.custom_scripts) {
                        htmlCustomEmbed += item.node.custom_scripts;
                    }

                    htmlBody += item.node.body;

                    inject.injectUrl(item.node.title);

                    if (item.node.file_url) {

                        htmlFileUrl += '<a href="' + item.node.file_url + '" class="link-download" download><i class=" fa fa-file-text-o"></i> Download</a>'
                    }

                }

                // add data to modal template
                theModal.find('.modal-header').html(htmlHeaderInfo);
                $('.modal-img').html(htmlImg);
                $('.modal-info').html(htmlBody).promise().done(function(){
                    var IframeBox = $('.modal-info').find('iframe').parent();
                    if(!IframeBox.hasClass('media_embed')){
                        IframeBox.addClass('media_embed');
                    }
                });
                $('.custom-embed').html(htmlCustomEmbed);
                $('.down-icon').html(htmlFileUrl);

            }
        }

        function modalRelated(data1){

            if (data1[0].nodes.length > 0) {
                items = data1[0].nodes;

                for (var i = 0; i < items.length; i++) {
                    var item = items[i];

                    if (item.node.treatment_title) {

                         htmlRelated = '<p><strong>Related Contents:</strong></p>';
                         htmlRelated += '<a href="' + item.node.treatment_url + '" class="reference">' + item.node.treatment_title + '</a>';

                    } else if (item.node.article_title){

                         htmlRelated = '<p><strong>Related Contents:</strong></p>';
                         htmlRelated += '<a href="' + item.node.article_url + '" class="reference">' + item.node.article_title + '</a>';
                    }

                }

                $('.references').html(htmlRelated);
            }

        }

        function ajax() {

            return $.ajax({
                url: cardModalContent,
                dataType: "json",
                data:  {
                    node: nodeNumber
                }
            });

        }

        function ajax1() {

            return $.ajax({
                url: cardModalRelated,
                dataType: "json",
                data:  {
                    node: nodeNumber
                }
            });

        }

    });

}
