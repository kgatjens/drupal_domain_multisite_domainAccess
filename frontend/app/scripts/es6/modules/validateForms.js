module.exports = function(){

	$.fn.modal.Constructor.prototype.enforceFocus = function () { };

	console.log($('.form-actions').parent());

	var isEmpty;
	var modal;

	String.prototype.capitalFirstLetter = function() {
    	return this.charAt(0).toUpperCase() + this.slice(1);
	}

	function isValidEmailAddress(emailAddress) {
    	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    	return pattern.test(emailAddress);
	};

	function fieldRequired(fieldName){
		isEmpty = "";
		if(fieldName.val().length == 0){
			fieldName.addClass('error-field');
			isEmpty = true;
		}else{
			fieldName.removeClass('error-field');
			isEmpty = false;
		}
		return isEmpty;
	};

	function validateField(el){
		fieldRequired(el);
		var fieldName = '',
			classList = el.attr('class').split(/\s+/);

		$.each(classList, function(index, item) {
		    if (item.indexOf('field-') != -1) {
		        fieldName = item.replace('field-','');
		    }
		});

		var errorName = "#"+ fieldName +"-error",
			modal = el.closest('.in'),
			errorItem = $(errorName);
		if(isEmpty && (errorItem.length == 0)){
			modal.find('.error-details').append('<p id="'+ fieldName +'-error">'+ fieldName.capitalFirstLetter() +' is required</p>');
		}else if(isEmpty && errorItem.length >= 1 && (fieldName == "email")){
			$(errorName).text('Email is required');
		}else if(!isEmpty){
			if(fieldName == "email"){
				if(!isValidEmailAddress(el.val())){
					if($('.error-details ' + errorName).length > 0){
						el.addClass('error-field');
						$(errorName).text('Email is not valid');
					}else{
						modal.find('.error-details').append('<p id="'+ fieldName +'-error">'+ fieldName.capitalFirstLetter() +' is not valid</p>');
						el.addClass('error-field');
					}
				}else{
					el.removeClass('error-field');
					$('p').remove(errorName);
				}
			}else{
				$('p').remove(errorName);
			}
		}
	}

	function validateCaptchaField(el){
		fieldRequired(el);
		var fieldName = '',
			classList = el.attr('class').split(/\s+/),
			recaptchaResponse = grecaptcha.getResponse();

		$.each(classList, function(index, item) {
		    if (item.indexOf('field-') != -1) {
		        fieldName = item.replace('field-','');
		    }
		});

		var errorName = "#"+ fieldName +"-error",
			modal = el.closest('.in'),
			errorItem = $(errorName);
		if(isEmpty && (errorItem.length == 0) && (recaptchaResponse.length == 0)){
			modal.find('.error-details').append('<p id="'+ fieldName +'-error">'+ fieldName.capitalFirstLetter() +' is required</p>');
		}else if(isEmpty && errorItem.length >= 1 && (fieldName == "email")){
			$(errorName).text('Email is required');
		}else if(!isEmpty){
			if(fieldName == "email"){
				if(!isValidEmailAddress(el.val())){
					if($('.error-details ' + errorName).length > 0){
						el.addClass('error-field');
						$(errorName).text('Email is not valid');
					}else{
						modal.find('.error-details').append('<p id="'+ fieldName +'-error">'+ fieldName.capitalFirstLetter() +' is not valid</p>');
						el.addClass('error-field');
					}
				}else{
					el.removeClass('error-field');
					$('p').remove(errorName);
				}
			}else{
				$('p').remove(errorName);
			}
		}
	}

	function validateForm(el){

		var fields = el.find(".form-text");

		fields.each(function(){
			validateField($(this));
		});

		if(isEmpty != undefined){
			if($('.error-details').children().length == 0){
				el.submit();
			}
		}
	}

	function validateFormCaptcha(el){

		var fields = el.find(".form-text");

		fields.each(function(){
			validateCaptchaField($(this));
		});
	}


	$('.modal.fade').on('hidden.bs.modal', function(e){
		$('form .form-text').each(function(){
			$(this).val('');
		});
		isEmpty = undefined;
	});

	$('form .form-text').each(function(){
		$(this).blur(function(){
			validateField($(this));
		});
	});

	// $('.form-submit').on('click', function(event) {

	// 	event.preventDefault();

	// 	if($(this).attr('value') == 'Log in'){
	// 		$(this).closest('form').submit();
	// 		return;
	// 	}else{
	// 		validateForm($(this).closest('form'));
	// 	}

	// });

	$('.form-submit').on('click', function(e) {

		e.preventDefault();

		if ($(this).closest('form').find('.captcha').length) {
			var recaptchaResponse = grecaptcha.getResponse();
			if( $(this).attr('value') != 0  && recaptchaResponse.length != 0 ) {
				$(this).closest('form').submit();
				return true;
			} else if ($(this).attr('value') != 0 && recaptchaResponse.length == 0 ) {
				validateFormCaptcha($(this).closest('form')); 
				if ($('.captcha-error').length == 0) { 
					$('#modalContact').find('.g-recaptcha').append('<p class="'+ 'captcha' +'-error">'+ 'recaptcha' +' is required</p>')
				}
				return false;
			} else {
				validateForm($(this).closest('form'));
				return false;
			}
		} else if (($(this).attr('value') == 'Log in')) {
				$(this).closest('form').submit();
				return;
		} else {
			validateForm($(this).closest('form'));
		}

	});


}