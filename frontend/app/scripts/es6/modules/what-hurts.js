module.exports = function(){
	var $stepContainer 	= $(".step-info"),
		$stepBox 		= $stepContainer.find('.step-box'),
		$questionBox 	= $stepContainer.find('.question-box'),
		$items 	  		= $('.lumbar-pain'),
		$counter  		= $('.step-counter'),
		$stepBack 		= $('.step-back'),
		questions 		= $stepBox.find('.selection-box a'),
		counterIndex	= $counter.find('button'),
		stepUrl  		= host + "/diagnostics-results",
		resultUrl  		= host + "/conditions-results",
		conditionUrl   	= host + "/what-hurts-results",
		whatHurtImage 	= $("#image-box"),
		stepsData 		= {};
		

	var currentUrl = window.location.pathname;

    if(currentUrl.indexOf('whats-hurting') !== -1){

        $.address.path('step-1');

        var visitedPages = [$.address.path()];

        $.address.internalChange(function() {
           visitedPages.push($.address.path());
        });

        $.address.externalChange(function(ev) { 

        	var newPage = $.address.path();
        	visitedPages.push(newPage);
        	var lastPage = visitedPages[visitedPages.length - 2],
        		newPageIndex = Number(newPage.replace("/step-","")),
        		lastPageIndex = Number(lastPage.replace("/step-",""));

           	if(newPageIndex == 1){
           		moveStep(0);
           		history.pushState(null, null, location.href);
           		history.go(1);
           	}else{
           		console.dir($(counterIndex[newPageIndex - 1]));
           		$(counterIndex[newPageIndex - 1]).trigger('click');
           	}

        });
    }

	function setImageClass(img){
		if(img){
			whatHurtImage.removeClass (function (index, css) {
			    return (css.match (/\boval-\S+/g) || []).join(' ');
			}).addClass(img);
		}else{
			whatHurtImage.removeClass (function (index, css) {
			    return (css.match (/\boval-\S+/g) || []).join(' ');
			});
		}
	}

	// animation-what-hurts.js integration
	function stopAnimation(element)
	{
	    $(element).css("-webkit-animation", "none");
	    $(element).css("-moz-animation", "none");
	    $(element).css("-ms-animation", "none");
	    $(element).css("animation", "none");
	}

	$stepBack.on('click', function(e){

		e.preventDefault();
		var currentStep = $(this).closest('.step-info').find('.question-box.active').index(),
			moveTo 		= currentStep - 1;
		moveStep(moveTo);

	});

	counterIndex.on('click', function(e){

		var $this = $(this);

		if($this.hasClass('disabled')){
			return false;
		}else{
			e.preventDefault();
			moveStep($this.index());
			$.address.path('step-'+($this.index()+1));
		}

	});

	$items.on('click', function(e){

		$items.removeClass('scale-image');// animation-what-hurts.js integration
		stopAnimation($items.find('.circle'));// animation-what-hurts.js integration

		var $this 		= $(this),
			bodyPart 	= $this.data('body-part'),
			bodyId 		= $this.attr('id');

		setImageClass(bodyId);
		whatHurtImage.addClass('selected');

		stepsData['body_part'] = bodyPart;
		

		$this.addClass('active');
		$this.siblings().hide();

		getData(stepsData).success(function (data) {
			addElements($this, data);
		});

	});

	$items.hover(
		function(){
			var $this 	= $(this),
				bodyId 	= $this.attr('id');
			if(!$this.hasClass('active')){
				setImageClass(bodyId);
			}
			
		},
		function(){

			if(!$(this).hasClass('active')){
				setImageClass();
			}
	});

	$(questions).on('click', function(e){
		e.preventDefault();
		var theParent 	= $(this).closest('.step-box'),
			theAnswer 	= $(this).attr('data-question');

		if(theParent.index() == 1){
			stepsData['node'] = theAnswer;
			stepsData['diagnostic1'] = $(this).attr('data-diagnostic');
			if(stepsData['diagnostic2']){
				stepsData['diagnostic2'] = '';
			}

			getData(stepsData).success(function (data) {
				lastQuestion(theParent.next(), data);
			});

		}else{
			stepsData['diagnostic2'] = $(this).attr('data-diagnostic');
			getResult(stepsData);
		}

	});	

	function addElements(el, data){

		var nodes 				= data.nodes,
			question1 			= "question 1",
			firstQuestionBox	= $($questionBox[0]),
			itemTitle      		= el.find('.title'),
			titleFilter			= itemTitle.text().replace(/\s+/g, '%20'),
			itemDescription 	= el.find('.description'),
			firstNodes			= [];

		for(var e = 0; e < nodes.length; e++){
			if(nodes[e].node.is_first_question == 1){
				firstNodes.push(nodes[e].node);
				question1 = nodes[e].node.question_text;
			}
		}
		
		$.each($questionBox, function(index, el){

			var currentTitle = $(this).find('.title');
			if(!currentTitle.length){
				itemDescription.clone().prependTo($(this));
				itemTitle.clone().prependTo($(this));
			}

		});

		setAnswers(firstQuestionBox, firstNodes);
			
		firstQuestionBox.find('.step-question h2').text(question1);
		
		moveStep(1);

	}

	function setAnswers(el, nodes){
		var currentQuestions = el.find('.selection-box a');

		$.each(currentQuestions, function(index, item){
			var boxIndex = el.index();
			if(boxIndex == 1){
				$(item).text(nodes[index].answer_text + ' > ').attr('data-question', nodes[index].next_question).attr('data-diagnostic',nodes[index].diagnostics_category);
			}else{
				$(item).text(nodes[index].answer_text + ' > ').attr('data-question', nodes[index].diagnostics_category).attr('data-diagnostic',nodes[index].diagnostics_category);
			}
		});
	}

	function lastQuestion(el, data){
		var nodes 		= data.nodes;
		var question2	= "question 2";
		var lastNodes	= [];

		for(var e = 0; e < nodes.length; e++){
			lastNodes.push(nodes[e].node);
			question2 = nodes[e].node.question_text;
		}

		setAnswers(el, lastNodes);

		el.find('.step-question h2').text(question2);

		moveStep(2);

	}

	function resetStep1(){
		$.each($questionBox, function(index, el){
			var currentTitle 		= $(this).find('.title'),
				currentDescription 	= $(this).find('.description');
			if(currentTitle.length){
				currentTitle.remove();
				currentDescription.remove();
			}
		});

		setImageClass();
		whatHurtImage.removeClass('selected');
		$items.show().removeClass('active');
		counterIndex.not( counterIndex[ 0 ] ).addClass('disabled');
		$stepBack.hide();
		stepsData.node = '';
		stepsData.diagnostic1 = '';
		stepsData.diagnostic2 = '';
	}

	function moveStep(index){
		$stepBox.removeClass('active').hide();
		$($stepBox[index]).show().addClass('active');
		counterIndex.removeClass('active');
		$(counterIndex[index]).addClass('active');

		if(index == 0){
			resetStep1();
			$('.hide-btn').hide();
		}else{
			$(counterIndex[index]).removeClass('disabled');
			$stepBack.css('display','block');
			$('.hide-btn').show();
		}
		$.address.path('step-'+(index+1));
	}

	function getData(stpData){
		return $.ajax({
		    url: stepUrl,
		    dataType: 'json',
		    data: stpData  
		});
	}


	function getResult(stpData){
		var finalresult = '?body_part=' + stpData.body_part +'&node=' + stpData.node + '&diagnostic1=' + stpData.diagnostic1 + '&diagnostic2=' + stpData.diagnostic2;
		window.location.href = conditionUrl + finalresult;
	}
	
}