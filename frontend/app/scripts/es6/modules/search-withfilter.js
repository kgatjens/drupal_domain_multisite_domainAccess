module.exports = function(){
	function searching(valInput, valDropdown){
		$('.pure-oh-m-cards').each(function() {
			var text = $(this).find('.panel-body').text().toLowerCase();
				text = $.trim(text.replace(/(\r\n|\n|\r)/gm,""));
			var dataFilter = [];
			
			if($(this).attr('data-filter')){
				dataFilter = $(this).attr('data-filter').split(",");
			}

			var show = "";
			var groupContainer = $(this).closest('.group-container');
			if(valDropdown == "All"){
				$('.dropdown-menu .all').addClass('display-none');
				if(valInput != ""){
					if (text.indexOf(valInput) >= 0) {
	                	$(this).parent().show(200);
	            	} else {
	                	$(this).parent().hide(200);
	            	}
				}else{
					$(this).parent().show(200);
					if(groupContainer){
						groupContainer.removeClass('no-options');
					}
				}
			}else{
				$('.dropdown-menu .all').removeClass('display-none');
				for (var i = 0; i < dataFilter.length; i++) {
					// var filtered = dataFilter[i].replace('-',', ');
					var _dropdown_value = valDropdown.replace(/\,/gi, '').replace(/\s/gi, '-');

					if(_dropdown_value == dataFilter[i]){
						show = true;
						break;
					}else{
						show = false;
					}
				};
				if(show){
					if (text.indexOf(valInput) >= 0) {
		                $(this).parent().show(200);
		                if(groupContainer){
		                	groupContainer.removeClass('no-options');
		                }
		            } else {
		                $(this).parent().hide(200);
		            }
				}else{
					$(this).parent().hide(200);
				}
			}

			if(groupContainer){
				setTimeout(function(){
	            	var itemBox = groupContainer.find('.card-item:visible').length;
			        if(itemBox == 0){
			        	groupContainer.addClass('no-options');
			        }
	        	}, 500)
			}
			
		});

	};

	function sorting_elements(valDropdown){
		valDropdown = valDropdown.toLowerCase().replace(/ /g,"-");
		var wrapper = $('.cards .block .content');
		wrapper.children().sort(function(a, b) {
			a = $(a.children[0]).attr('data-occurrence-'+valDropdown);
			b = $(b.children[0]).attr('data-occurrence-'+valDropdown);
			return a>b ? -1 : a<b ? 1 : 0;
		}).each(function(){
			wrapper.prepend(this);
		});
		
	}

	$('#inputSearch').on('keyup', function(event) {
		event.preventDefault();
		if(event.keyCode == 13){
			searching($(this).val().toLowerCase(), $('span[data-bind="label"]').text().replace(/\s+/g, '-'));
			sorting_elements($('span[data-bind="label"]').text().replace(/\s+/g, '-'));
		}
	});


	$('.pure-oh-m-search-withfilter .icon-search').on('click', function (event){
		event.preventDefault();
		console.log($('#inputSearch').val().toLowerCase(), $('span[data-bind="label"]').text().replace(/\s+/g, '-'));
		searching($('#inputSearch').val().toLowerCase(), $('span[data-bind="label"]').text().replace(/\s+/g, '-'));
		sorting_elements($('span[data-bind="label"]').text().replace(/\s+/g, '-'));
	});

	$('.dropdown-menu li').on('click', function(event) {
		event.preventDefault();
		var $target = $( event.currentTarget );

		$target.closest( '.filter' )
            .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
            .children( '.dropdown-toggle' ).dropdown( 'toggle' );

		searching($('#inputSearch').val().toLowerCase(), $('span[data-bind="label"]').text());
		sorting_elements($('span[data-bind="label"]').text().replace(/\s+/g, '-'));
	});
}