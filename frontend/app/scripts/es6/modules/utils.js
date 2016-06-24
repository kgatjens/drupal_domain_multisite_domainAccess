var injectUrl = (title) => {
        var urlTitle = $.trim(title.replace(/ /g, '-').toLowerCase());
        var hash = window.location.search;

        if(hash.indexOf('body_part') !== -1){
            var currentUrl = hash;
            var index = hash.indexOf('m=');
            if(index !== -1){
                index -= 1;
                currentUrl = hash.substring(index, 0);
            }

            history.pushState(null, null, currentUrl+'&m='+ urlTitle);

        }else{
            history.pushState(null, null, '?m='+ urlTitle);
        }
}

var msieversion = () => {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var result = false;

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
      result = true;
    else
      result = false;

    return result;
}


module.exports = {
  injectUrl: injectUrl,
  msieversion: msieversion
}