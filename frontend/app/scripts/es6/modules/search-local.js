module.exports = function() {

    $('#local-search').on('keyup keypress', function(e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
        var valThis = $(this).val().toLowerCase();
        var showItem = $(this).data('show-element');
            if (valThis === "") {
            $('.'+showItem).parent().show();
        } else {
            $('.'+showItem).each(function() {
                var text = $(this).find('.panel-body').text().toLowerCase();
                text = $.trim(text.replace(/(\r\n|\n|\r)/gm,""));
                if (text.indexOf(valThis) != -1) {
                    $(this).parent().show(200);
                } else {
                    $(this).parent().hide(200);
                }
            });
        }
    });
}