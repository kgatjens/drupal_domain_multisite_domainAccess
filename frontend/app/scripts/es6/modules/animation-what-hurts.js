module.exports = function(){

	var ovals = [];
	ovals.push(document.getElementById("circle-01"));
	ovals.push(document.getElementById("circle-02"));
	ovals.push(document.getElementById("circle-03"));
	var image = document.getElementById("image-box");

	for(var e = 0; e < ovals.length; e++){
		ovals[e].addEventListener("animationstart", current, false);
		ovals[e].addEventListener("animationend", nextOne, false);
	}

	function removeClass(){
		for(var e = 0; e < ovals.length; e++){
			if(ovals[e].offsetParent){
				ovals[e].offsetParent.className = "lumbar-pain";
			}
		}
	}

	function current(){
		switch (this.id) {
			case "circle-01":
				image.className = "image-content oval-01";
				break;
			case "circle-02":
				image.className = "image-content oval-02";
				break;
			case "circle-03":
				image.className = "image-content oval-03";
				break;
			default:
				// statements_def
				break;
		}
	}

	function nextOne(){
		removeClass();
		switch (this.id) {
			case "circle-01":
				ovals[1].offsetParent.className += ' scale-image';
				break;
			case "circle-02":
				ovals[2].offsetParent.className += ' scale-image';
				break;
			case "circle-03":
				image.className = "image-content";
				break;
			default:
				// statements_def
				break;
		}
	}

	//firefox issue
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if(is_firefox){
		setTimeout(function(){
			ovals[0].offsetParent.className += " scale-image";
		},1500);
	}else{
		ovals[0].offsetParent.className += " scale-image";
	}

}