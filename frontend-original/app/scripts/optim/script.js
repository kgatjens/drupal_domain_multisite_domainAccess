/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


var domWidth = $( window ).width();
// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.home_carousel= {
  attach: function(context, settings) {

//Title > to V

if(domWidth >= 668){
  $('.carousel_text').hover(function(){
    $(this).find('.home_arrow').text('V');
  },function(){
    $(this).find('.home_arrow').text('>');
  });
}

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


  }
};

Drupal.behaviors.window_size= {
  attach: function(context, settings) {

    if(domWidth <= 668){
        $('#views-exposed-form-team-optim-page-1 input').attr('placeholder', 'NAME OR LOCATION');
    }
  }
};

//Offer block margins
Drupal.behaviors.offer_margin= {
  attach: function(context, settings) {
    var offerLength = $('.offer-block').length;

    if( offerLength > 0 && domWidth > 668 && domWidth <= 1024 ){
        $('#block-panels-mini-right-sidebar .appointment-block').css('margin-top', '21em');
    } else if( offerLength > 0 && domWidth > 1024){
        $('#block-panels-mini-right-sidebar .appointment-block').css('margin-top', '22em');
    } else if( offerLength == 0 && domWidth > 668 ) {
        $('#block-panels-mini-right-sidebar .appointment-block').css('margin-top', '15em');
    }
  }
};


//Sidebar Settings

Drupal.behaviors.mobile_sidebar= {
  attach: function(context, settings) {

  $('.mobile_footer_info').click(function(){
    $('.mobile_footer').toggle();
    $('#block-panels-mini-right-sidebar').toggle();
  });

  $('a.mobile_close').click(function(){
    $('.mobile_footer').toggle();
    $('#block-panels-mini-right-sidebar').toggle();
  });
  }
};

//Staff Tabs Class

Drupal.behaviors.tabs_classes= {
  attach: function(context, settings) {
    $('.ui-tabs-nav li').each(function(){
      var tabClass = $( this ).children('a').text();
      $( this ).addClass( tabClass.toLowerCase() );
    });

    //Links Tab Class
    $('.staff-links').closest('.ui-tabs-panel').addClass('staff-links-tab');
  }
};

//Patient Testimonial

Drupal.behaviors.pt= {
  attach: function(context, settings) {
    if($('#block-views-patient-testimonials-block-1 img').length) {
      $('body').addClass('has-banner');
      var bgImg = $('#block-views-patient-testimonials-block-1 img').attr('src');
      $('.patient-testimonials .header-wrapper').css('background-image', 'url(' + bgImg + ')');
    }
  }
};

//Newsletter form placeholder

Drupal.behaviors.newsletterps= {
  attach: function(context, settings) {
      $('.simplenews-subscribe #edit-realname').attr('placeholder', 'Type your full name here');
      $('.simplenews-subscribe #edit-mail').attr('placeholder', 'Type your email here');
  }
};

// Appointment
Drupal.behaviors.appointment= {
  attach: function(context, settings) {
    // Start with disabled submit button
    $('.entityform .form-submit').attr('disabled','disabled');
    $('.entityform .form-submit').addClass('disabled');
    $('.entityform .required').keydown(function() {
      // alert('change');

      var nameLength = 0,
            conditionLength = 0,
            phoneLength =0,
            totalLength =0;
      // Check if required fields are not empty
      // and enable the submit button
      nameLength = $('.entityform .field-name-field-name input').val().length;
      conditionLength = $('.entityform .field-name-field-condition input').val().length;
      phoneLength = $('.entityform .field-name-field-phone input').val().length;
      totalLength = nameLength && conditionLength && phoneLength;

      if( totalLength > 0 ) {
        $('.entityform .form-submit').removeAttr('disabled');
        $('.entityform .form-submit').removeClass('disabled');
      }
      // otherwise disable the submit button and add disabled class
      else {
        $('.entityform .form-submit').attr('disabled','disabled');
        $('.entityform .form-submit').addClass('disabled');
      }
    });
    $('.page-eform-appointment-confirm .appointment_done').click(function(){
      $('#overlay-close').click();
    });
    $(document).keyup(function(e) {
      if (e.keyCode == 27) { $('#overlay-close').click(); }
    });
  }
};


//Overlay Classes

Drupal.behaviors.overlay_classes= {
  attach: function(context, settings) {
    $('#appointment-entityform-edit-form').closest('#overlay').addClass('appointment_form');
    $('.node-condition').closest('#overlay').addClass('node_condition');
    $('.node-our-practice').closest('#overlay').addClass('node_practice');
    $('.node-treatment').closest('#overlay').addClass('node_treatment');
    $('.node-tips').closest('#overlay').addClass('node_tips');
    $('.view-moa').closest('#overlay').addClass('moa_overlay');
    $('.node-webform').closest('#overlay').addClass('offer_overlay');
    $('.webform-confirmation').closest('#overlay').addClass('offer_overlay');
    $('.view-id-share').closest('#overlay').addClass('modal-dialog');
    $('.contact_title').closest('#overlay').addClass('contact_overlay');
    $('.node-patient-testimonial').closest('#overlay').addClass('patient_testimonial');
    $('.view-patient-testimonial').closest('#overlay').addClass('patient_testimonial_video');
    $('.page-team-info.overlay').children('#overlay').removeClass('offer_overlay').addClass('node_team');
    $('#node-176').closest('#overlay').addClass('static-node');
  }
};

Drupal.behaviors.search_results= {
    attach: function(context, settings) {
        var title = document.querySelectorAll('.view-main-search .views-field-title a');
        var desc = document.querySelectorAll('.view-main-search .views-field-body span');
        Array.prototype.forEach.call(title, function(instance) {
            if(domWidth <= 668 && instance.innerText.length > 20){
                instance.innerText = instance.innerText.substring(0, 20) + '...';
            } else if( domWidth >= 1025 && domWidth < 1366 && instance.innerText.length > 25){
                instance.innerText = instance.innerText.substring(0, 25) + '...';
            }
        });

        Array.prototype.forEach.call(desc, function(instance) {
            if(domWidth >= 1025 && domWidth < 1366 && instance.innerText.length > 25){
                instance.innerText = instance.innerText.substring(0, 25) + '...';
            }
        });
    }
};
})(jQuery, Drupal, this, this.document);
