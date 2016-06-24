module.exports = function() {

    $('#search-locations').on('keyup keypress', function(e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
        var valThis = $(this).val().toLowerCase();
            if (valThis === "") {
            $('div.panel-heading').show();
        } else {
            $('div.panel.panel-default').each(function() {
                var text = $(this).find('.panel-heading, .caption').text().toLowerCase();
                    text = $.trim(text.replace(/(\r\n|\n|\r)/gm,""));
                if (text.indexOf(valThis) >= 0) {
                    $(this).find('.panel-heading').show(200);
                } else {
                    $(this).find('.panel-heading').addClass('collapsed');
                    $(this).find('.panel-collapse.collapse.in').removeClass('in');
                    $(this).find('.panel-heading').hide(200);
                }
            });
        }
    });
}

