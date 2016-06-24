module.exports = function (){
	var $input = $("#search-text-field"),
		$theForm = $input.closest('form'),
		searchUrl = host + "/content-results", //$theForm[0].action;
		resultPage = host + "/search/node/",
		selectedItem = '',
		callResult = false,
		resultItems = [],
		enterAvailable = false;

	$('#search-modal').on('shown.bs.modal', function(event) {
		event.preventDefault();
		$("#search-text-field").focus();
	});

	$input.autocomplete({

		create: function( event, ui ) {
			event.target.value = "";
		},
		appendTo: $theForm,
		source: function (request, response) {
	        $.ajax({
	            url: searchUrl,
	            dataType: 'json',
	            data: {'title':request.term},
	            success: function (data) {

	            	var views     = [];
	            	var nodes = data.nodes;

	            	if(nodes.length === 0){
	            		views.push('no result found');
	            	}else{
	            		callResult = true;
	            		for(var i = 0; i < nodes.length; i++){
	            			var node = nodes[i].node;
	            			views.push(node.title);
	            		}
	            	}

	            	response(views);

	            }
	        });
		},

		select: function( event, ui ) {

			selectedItem = ui.item.value.replace(/\s+/g, '%20');
			event.preventDefault();
			if(callResult){
				window.location.href = resultPage+selectedItem.toLowerCase();
			}
		},

		response: function( event, ui ) {
			resultItems = [];
			for(var i = 0; i < ui.content.length; i++){
	            var node = ui.content[i].value;
	            resultItems.push(node);
	        }
		},

		minLength: 3

	}).keydown(function(e){
		if (e.keyCode === 13){
			enterAvailable = false;
			selectedItem = e.target.value.replace(/\s+/g, '%20');
			for(var i = 0; i < resultItems.length; i++){
	            var node = resultItems[i].toLowerCase();
	            if(node.indexOf(selectedItem) !== -1){
	            	enterAvailable = true;
	            }
	        }
			if(callResult && enterAvailable){
				window.location.href = resultPage+selectedItem.toLowerCase();
				e.preventDefault();
				return false;

			}else{
				e.preventDefault();
				return false;
			}

		}
	}).data("ui-autocomplete")._renderItem = function (ul, item) {

		var theItem = item.label.replace(/\s+/g, '%20'),
			listItem = $("<li>").data("item.autocomplete", item);

		if(callResult){
			return listItem.append('<a href="' + resultPage + theItem.toLowerCase() + '">' + item.label + '</a>').appendTo(ul);
		}else{
			return listItem.append(item.label).appendTo(ul);
		}

	};
}

