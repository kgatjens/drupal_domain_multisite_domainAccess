$(document).ready(function() {
  console.log('prueba');
  // if(domWidth >= 668){
    $('.carousel_text').hover(function(){
      $(this).find('.home_arrow').text('V');
    },function(){
      $(this).find('.home_arrow').text('>');
    });
  // }

  //Carousel images

  var defaultUrl = $('.default-carousel img').attr('src');
  $('.front #main').css('background-image', 'url(' + defaultUrl + ')');

  $('.carousel_text').hover(function(){
  var hoverinUrl = $( this ).children('img').attr('src');
  $('.front #main').css('background-image', 'url(' + hoverinUrl + ')');
  }, function(){
  var defaultUrl = $('.default-carousel img').attr('src');
  $('.front #main').css('background-image', 'url(' + defaultUrl + ')');
  });



});

