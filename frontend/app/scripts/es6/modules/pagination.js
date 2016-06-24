module.exports = function() {
    if($('.cards-load-more').length){
        var start = 1;
        var min_elements = $('.cards .row-eq-height .card-item').length;
        var first_validation = true;
        var elements;
        var toggle = false;
        $('.load-more-main').hide();
        pagination_toggle(start, toggle);
        $('.cards').on('click','.load-more-main',function(e){
            e.preventDefault();
            $('.load-more-spinner');
            elements = load_elements(start);
            elements = $(elements).children();
            $(elements).appendTo('.cards-load-more .row-eq-height .row').hide().fadeIn(300);
            $('.col-eq-height').matchHeight({byRow: false});
            if($(elements).find('.pure-oh-m-cards').length == min_elements){
                start++;
            }else{
                $('#load-more-button').hide();
            }
            $('.load-more-spinner').hide();

            pagination_toggle(start, toggle);
        });

        if(first_validation){
            first_validation = false;
            elements = load_elements(start);
            if($(elements).find('.card-item').length > 0){
                $('#load-more-button').show();
            }
        }
    }

    function pagination_toggle(start, toggle) {
        if ( !toggle ) {
            var elements = load_elements( start );

            if ( $(elements).find( '.pure-oh-m-cards' ).length > 0 ) {
                $('.load-more-main').show();
            } else {
                $('.load-more-main').hide();
            }

            toggle = !toggle;
        }
    }

    function load_elements(start){

        $.extend({
            xResponse: function(url, data) {
                // local var
                var theResponse = null;
                // jQuery ajax
                $.ajax({
                    url: url,
                    type: 'GET',
                    data: data,
                    dataType: "html",
                    async: false,
                    success: function(respText) {
                        theResponse = respText;
                    }
                });
                // Return the response text
                return theResponse;
            }
        });

        var xData = $.xResponse(document.URL+'?page='+start, {issession: 1,selector: true});

        return $(xData).find('.cards .row-eq-height').html();

    }
}