(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesAccordion = require("./modules/Accordion");

var _modulesAccordion2 = _interopRequireDefault(_modulesAccordion);

var _modulesModalTeam = require("./modules/ModalTeam");

var _modulesModalTeam2 = _interopRequireDefault(_modulesModalTeam);

var _modulesSearch = require("./modules/search");

var _modulesSearch2 = _interopRequireDefault(_modulesSearch);

var _modulesLocations = require("./modules/locations");

var _modulesLocations2 = _interopRequireDefault(_modulesLocations);

var _modulesSearchLocal = require("./modules/search-local");

var _modulesSearchLocal2 = _interopRequireDefault(_modulesSearchLocal);

var _modulesSearchLocations = require("./modules/search-locations");

var _modulesSearchLocations2 = _interopRequireDefault(_modulesSearchLocations);

var _modulesFormsValidate = require("./modules/formsValidate");

var _modulesFormsValidate2 = _interopRequireDefault(_modulesFormsValidate);

var _modulesCardModalDetails = require("./modules/cardModalDetails");

var _modulesCardModalDetails2 = _interopRequireDefault(_modulesCardModalDetails);

var _modulesCardModalTeam = require("./modules/cardModalTeam");

var _modulesCardModalTeam2 = _interopRequireDefault(_modulesCardModalTeam);

var _modulesWhatHurts = require("./modules/what-hurts");

var _modulesWhatHurts2 = _interopRequireDefault(_modulesWhatHurts);

var _modulesTestimonial = require("./modules/testimonial");

var _modulesTestimonial2 = _interopRequireDefault(_modulesTestimonial);

var _modulesResizeCards = require("./modules/ResizeCards");

var _modulesResizeCards2 = _interopRequireDefault(_modulesResizeCards);

var _modulesShare = require("./modules/share");

var _modulesShare2 = _interopRequireDefault(_modulesShare);

var _modulesShowSidebar = require("./modules/show-sidebar");

var _modulesShowSidebar2 = _interopRequireDefault(_modulesShowSidebar);

var _modulesUrlModals = require("./modules/UrlModals");

var _modulesUrlModals2 = _interopRequireDefault(_modulesUrlModals);

var _modulesSearchWithfilter = require("./modules/search-withfilter");

var _modulesSearchWithfilter2 = _interopRequireDefault(_modulesSearchWithfilter);

var _modulesValidateForms = require("./modules/validateForms");

var _modulesValidateForms2 = _interopRequireDefault(_modulesValidateForms);

var _modulesVideos = require("./modules/videos");

var _modulesVideos2 = _interopRequireDefault(_modulesVideos);

var _modulesClearInputModals = require("./modules/clearInputModals");

var _modulesClearInputModals2 = _interopRequireDefault(_modulesClearInputModals);

var _modulesAnimationWhatHurts = require("./modules/animation-what-hurts");

var _modulesAnimationWhatHurts2 = _interopRequireDefault(_modulesAnimationWhatHurts);

var _modulesPagination = require("./modules/pagination");

var _modulesPagination2 = _interopRequireDefault(_modulesPagination);

var _modulesChangeBackground = require("./modules/change-background");

var _modulesChangeBackground2 = _interopRequireDefault(_modulesChangeBackground);

var _modulesScroll = require("./modules/scroll");

var _modulesScroll2 = _interopRequireDefault(_modulesScroll);

var _modulesSidebarScroll = require("./modules/sidebar-scroll");

var _modulesSidebarScroll2 = _interopRequireDefault(_modulesSidebarScroll);

// jQuery DOM Ready
$(function () {
	'use strict';
	// initialize

	global.host = 'http://' + document.domain;
	global.desktopDevice = false;
	global.mobileDevice = false;

	if (document.domain == '' || document.domain == 'localhost') {
		host = 'http://104.130.12.33';
	}

	if (!("ontouchstart" in document.documentElement)) {
		document.documentElement.className += " no-touch";
		desktopDevice = true;
	} else {
		document.documentElement.className += " touch-dev";
		mobileDevice = true;
	}

	if (typeof window.orientation !== 'undefined') {
		mobileDevice = true;
	}

	(0, _modulesAccordion2["default"])();
	(0, _modulesModalTeam2["default"])();

	if ($("#search-locations").length > 0) {
		(0, _modulesSearchLocations2["default"])();
	}

	if ($("#search-text-field").length > 0) {
		(0, _modulesSearch2["default"])();
	}

	(0, _modulesWhatHurts2["default"])();

	if ($('#map').length > 0) {
		(0, _modulesLocations2["default"])();
	}

	if ($('.sidebar .header')) {
		(0, _modulesChangeBackground2["default"])();
	}

	(0, _modulesSearchLocal2["default"])();
	(0, _modulesVideos2["default"])();
	(0, _modulesFormsValidate2["default"])();
	(0, _modulesCardModalDetails2["default"])();
	(0, _modulesCardModalTeam2["default"])();
	(0, _modulesTestimonial2["default"])();
	(0, _modulesResizeCards2["default"])();
	(0, _modulesShare2["default"])();
	(0, _modulesShowSidebar2["default"])();
	(0, _modulesUrlModals2["default"])();
	(0, _modulesSearchWithfilter2["default"])();
	(0, _modulesValidateForms2["default"])();
	(0, _modulesClearInputModals2["default"])();
	if ($('.circle').length > 0) {
		(0, _modulesAnimationWhatHurts2["default"])();
	}
	(0, _modulesPagination2["default"])();
	(0, _modulesScroll2["default"])();
	(0, _modulesSidebarScroll2["default"])();
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./modules/Accordion":2,"./modules/ModalTeam":3,"./modules/ResizeCards":4,"./modules/UrlModals":5,"./modules/animation-what-hurts":6,"./modules/cardModalDetails":7,"./modules/cardModalTeam":8,"./modules/change-background":9,"./modules/clearInputModals":10,"./modules/formsValidate":11,"./modules/locations":12,"./modules/pagination":13,"./modules/scroll":14,"./modules/search":18,"./modules/search-local":15,"./modules/search-locations":16,"./modules/search-withfilter":17,"./modules/share":19,"./modules/show-sidebar":20,"./modules/sidebar-scroll":21,"./modules/testimonial":22,"./modules/validateForms":24,"./modules/videos":25,"./modules/what-hurts":26}],2:[function(require,module,exports){
"use strict";

var utils = require('./utils');
module.exports = function () {

	//to resolve footer behavior in homepage
	var homePageFooter = $(".pure-oh-m-homepage footer"),
	    theAccordion = $(".accordion"),
	    accordionItems = theAccordion.find('.accordion-item'),
	    minDistance = 20,
	    distanceElements = 0;

	var flag = $(window).width() > 1024;

	if (desktopDevice) {
		minDistance = 200;
	}

	$(".accordion").accordion({
		header: ".accordion-heading",
		collapsible: true,
		active: false,
		icons: false,
		autoHeight: false,
		heightStyle: "content",
		event: "mouseover",
		beforeActivate: function beforeActivate(event, ui) {
			if (flag) {

				var icon = $(ui.newHeader[0]).find('.arrow-title'),
				    iconResetRotate = 0,
				    iconRotate = 90;

				icon.css({
					'-webkit-transform': 'rotate(' + iconResetRotate + 'deg)',
					'-moz-transform': 'rotate(' + iconResetRotate + 'deg)',
					'-ms-transform': 'rotate(' + iconResetRotate + 'deg)',
					'-o-transform': 'rotate(' + iconResetRotate + 'deg)',
					'transform': 'rotate(' + iconResetRotate + 'deg)'
				}).css({
					'-webkit-transform': 'rotate(' + iconRotate + 'deg)',
					'-moz-transform': 'rotate(' + iconRotate + 'deg)',
					'-ms-transform': 'rotate(' + iconRotate + 'deg)',
					'-o-transform': 'rotate(' + iconRotate + 'deg)',
					'transform': 'rotate(' + iconRotate + 'deg)'
				});

				if (ui.oldHeader[0]) {
					var oldIcon = $(ui.oldHeader[0]).find('.arrow-title');
					oldIcon.css({
						'-webkit-transform': 'rotate(' + iconRotate + 'deg)',
						'-moz-transform': 'rotate(' + iconRotate + 'deg)',
						'-ms-transform': 'rotate(' + iconRotate + 'deg)',
						'-o-transform': 'rotate(' + iconRotate + 'deg)',
						'transform': 'rotate(' + iconRotate + 'deg)'
					}).css({
						'-webkit-transform': 'rotate(' + iconResetRotate + 'deg)',
						'-moz-transform': 'rotate(' + iconResetRotate + 'deg)',
						'-ms-transform': 'rotate(' + iconResetRotate + 'deg)',
						'-o-transform': 'rotate(' + iconResetRotate + 'deg)',
						'transform': 'rotate(' + iconResetRotate + 'deg)'
					});
				}
			}
		}
	});

	$(".ui-accordion").on('mouseleave', function (e) {
		$(".accordion").accordion({
			active: false
		});
	});

	if (desktopDevice) {
		$(".accordion").accordion("enable");
	} else {
		$(".accordion").accordion("disable");
	}

	if (utils.msieversion()) {
		$(window).trigger('resize');
	}
};

},{"./utils":23}],3:[function(require,module,exports){
"use strict";

module.exports = function () {
	// locations hover
	// $(document).on('mouseover', '.direction',function() {
	// 	$(this).find('.map').css('display', 'block');
	// 	$(this).css('background', '#F5F5F5');
	// });
	// $(document).on('mouseout', '.direction',function() {
	// 	$(this).find('.map').css('display', 'none');
	// 	$(this).css('background', '#FFFFFF');
	// });
};

},{}],4:[function(require,module,exports){
'use strict';

module.exports = function () {

	$(function () {
		$('.col-eq-height').matchHeight({ byRow: false });
	});
};

},{}],5:[function(require,module,exports){
'use strict';

module.exports = function () {
	// Modify the URL to add the name of the modal

	$('.modal.fade').on('hidden.bs.modal', function (e) {
		e.preventDefault();
		var $modalVideo = $("#modalVideo");
		var currentUrl = window.location.search;
		if (currentUrl.indexOf('body_part') !== -1) {
			var index = currentUrl.lastIndexOf('&');
			currentUrl = currentUrl.substring(index, 0);
		} else {
			currentUrl = window.location.pathname;
		}

		if (currentUrl == "") {
			currentUrl = '.';
		}

		if ($modalVideo.length) {
			var theIframe = $modalVideo.find('iframe');
			theIframe.attr("src", "");
		}

		history.pushState(null, null, currentUrl);
	});

	$('#modalTeam').on('shown.bs.modal', function () {
		var tabList = $(this).find('.nav-tabs').find("a[href='#info']");
		tabList.click();
	});

	$('body').on('hidden.bs.modal', '.modal', function (e) {
		e.preventDefault();
		$(this).removeData('bs.modal');

		// clear yt videos after close modal
		var $iframes = $(e.target).find("iframe");
		$iframes.each(function (index, iframe) {
			$(iframe).attr("src", $(iframe).attr("src"));
		});

		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});
};

},{}],6:[function(require,module,exports){
"use strict";

module.exports = function () {

	var ovals = [];
	ovals.push(document.getElementById("circle-01"));
	ovals.push(document.getElementById("circle-02"));
	ovals.push(document.getElementById("circle-03"));
	var image = document.getElementById("image-box");

	for (var e = 0; e < ovals.length; e++) {
		ovals[e].addEventListener("animationstart", current, false);
		ovals[e].addEventListener("animationend", nextOne, false);
	}

	function removeClass() {
		for (var e = 0; e < ovals.length; e++) {
			if (ovals[e].offsetParent) {
				ovals[e].offsetParent.className = "lumbar-pain";
			}
		}
	}

	function current() {
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

	function nextOne() {
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
	if (is_firefox) {
		setTimeout(function () {
			ovals[0].offsetParent.className += " scale-image";
		}, 1500);
	} else {
		ovals[0].offsetParent.className += " scale-image";
	}
};

},{}],7:[function(require,module,exports){
"use strict";

var inject = require('./utils');

module.exports = function () {

    $(document).ready(function () {
        setTimeout(function () {
            var hash = window.location.search;
            if (hash != "") {
                if (hash.indexOf("m=") !== -1) {
                    var getModalThanks = function getModalThanks(url) {
                        function getParameterByName(name) {
                            name = name.replace(/[\[\]]/g, "\\$&");
                            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                                results = regex.exec(url);
                            if (!results) return null;
                            if (!results[2]) return '';
                            return decodeURIComponent(results[2].replace(/\+/g, " "));
                        }
                        var modalTitle = getParameterByName('title');
                        var modalBody = getParameterByName('body');
                        $("#modalThanksConfirmation").find('h1').text(modalTitle);
                        $("#modalThanksConfirmation").find('p').text(modalBody);
                        $("#modalThanksConfirmation").modal('show');
                    };

                    if (hash.indexOf("thank-you-confirmation") !== -1) {
                        getModalThanks(hash);
                    }
                    var filter = /m=(.+)/;
                    var currentTitle = hash.match(filter);
                    currentTitle = $.trim(currentTitle[1]);
                    currentTitle = currentTitle.replace(/\%27/g, "'");
                    currentTitle = currentTitle.replace(/\%c2%ae/g, '®');
                    currentTitle = currentTitle.replace(/[^a-zA-Z0-9.]+/g, '');
                    currentTitle = currentTitle.replace(' ', '-');
                    currentTitle = currentTitle.toLowerCase();

                    $('.modal-cards').each(function (index) {
                        var text = $(this).find('h2').text();
                        text = $.trim(text.toLowerCase());
                        text = text.replace(/[^a-zA-Z0-9.]+/g, '');
                        text = text.replace(' ', '-');
                        if (text == currentTitle) {
                            $(this).find('.modal-action').eq(0).trigger("click");
                            if ($(this).hasClass('modal-team')) {
                                $('#modalTeam').modal('show');
                            } else if ($(this).hasClass('modal-detail')) {
                                $('#modalDetails').modal('show');
                            }

                            return false;
                        }
                    });
                }
            }
        }, 500);
    });

    $(document).ajaxStart(function () {
        $("#modalDetails .modal-loader, #modalTeam .modal-loader").show();
        $("#modalDetails .modal-dialog, #modalTeam .modal-dialog").hide();
    });

    $('.cards').on('click', '.modal-detail .modal-action', function (e) {
        // function that call ajax modal info
        e.preventDefault();
        var items = [];
        var htmlHeaderInfo = '';
        var htmlImg = '';
        var htmlBody = '';
        var htmlCustomEmbed = '';
        var htmlFileUrl = '';
        var htmlRelated = '';
        var nodeNumber = $(this).closest('.modal-cards, .wrap-hero-description').find('.modal-node');
        nodeNumber = nodeNumber.data('node');
        var cardModalContent = host + '/content-result';
        var cardModalRelated = host + '/related-content';
        var theModal = $($(this).data('target'));

        $.when(ajax(), ajax1()).done(function (data, data1) {
            $("#modalDetails .modal-loader, #modalTeam .modal-loader").hide();
            $("#modalDetails .modal-dialog, #modalTeam .modal-dialog").show();
            modalInfo(data);
            modalRelated(data1);
            // reset modal scroll
            $('.leftcol').scrollTop(0);
        });

        function modalInfo(data) {
            if (data[0].nodes.length > 0) {
                items = data[0].nodes;
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];

                    // loop through keys

                    htmlHeaderInfo += '<h2 class="detail-modal-header">' + item.node.title + '</h2>';

                    if (item.node.image) {
                        htmlImg += '<img src="' + item.node.image.src + '" alt="' + item.node.image.alt + '">';
                        $(".modal-content").removeClass('no-frame');
                    } else {
                        $(".modal-content").addClass('no-frame');
                    }

                    if (item.node.custom_scripts) {
                        htmlCustomEmbed += item.node.custom_scripts;
                    }

                    htmlBody += item.node.body;

                    inject.injectUrl(item.node.title);

                    if (item.node.file_url) {

                        htmlFileUrl += '<a href="' + item.node.file_url + '" class="link-download" download><i class=" fa fa-file-text-o"></i> Download</a>';
                    }
                }

                // add data to modal template
                theModal.find('.modal-header').html(htmlHeaderInfo);
                $('.modal-img').html(htmlImg);
                $('.modal-info').html(htmlBody).promise().done(function () {
                    var IframeBox = $('.modal-info').find('iframe').parent();
                    if (!IframeBox.hasClass('media_embed')) {
                        IframeBox.addClass('media_embed');
                    }
                });
                $('.custom-embed').html(htmlCustomEmbed);
                $('.down-icon').html(htmlFileUrl);
            }
        }

        function modalRelated(data1) {

            if (data1[0].nodes.length > 0) {
                items = data1[0].nodes;

                for (var i = 0; i < items.length; i++) {
                    var item = items[i];

                    if (item.node.treatment_title) {

                        htmlRelated = '<p><strong>Related Contents:</strong></p>';
                        htmlRelated += '<a href="' + item.node.treatment_url + '" class="reference">' + item.node.treatment_title + '</a>';
                    } else if (item.node.article_title) {

                        htmlRelated = '<p><strong>Related Contents:</strong></p>';
                        htmlRelated += '<a href="' + item.node.article_url + '" class="reference">' + item.node.article_title + '</a>';
                    }
                }

                $('.references').html(htmlRelated);
            }
        }

        function ajax() {

            return $.ajax({
                url: cardModalContent,
                dataType: "json",
                data: {
                    node: nodeNumber
                }
            });
        }

        function ajax1() {

            return $.ajax({
                url: cardModalRelated,
                dataType: "json",
                data: {
                    node: nodeNumber
                }
            });
        }
    });
};

},{"./utils":23}],8:[function(require,module,exports){
'use strict';

var inject = require('./utils');
module.exports = function () {

    // function that call ajax modal info

    $('.modal-team .modal-action').on('click', function (e) {
        e.preventDefault();
        var items = [];
        var htmlHeaderInfo = '';
        var htmlImg = '';
        var htmlCertifications = '';
        var htmlLocations = '';
        var htmlLinksTab = '';
        var htmlName = '';
        var nodeNumber = $(this).closest('.modal-cards').find('.modal-node');
        nodeNumber = nodeNumber.data('node');
        var cardXHR = host + '/staff-results';

        // ajax request

        $.ajax({
            url: cardXHR,
            dataType: 'json',
            data: {
                node: nodeNumber
            },
            success: function success(data) {
                $("#modalDetails .modal-loader, #modalTeam .modal-loader").hide();
                $("#modalDetails .modal-dialog, #modalTeam .modal-dialog").show();
                if (data.nodes.length > 0) {
                    var i;
                    var item;
                    var certifications;
                    var otherInfo;
                    var e;
                    var links;
                    var target;
                    var titles;
                    var theLinks;

                    (function () {
                        var setCertification = function setCertification() {
                            var data = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
                            var title = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

                            htmlCertifications += '<h5>' + title + '</h5>' + data;
                        };

                        items = data.nodes;

                        for (i = 0; i < items.length; i++) {
                            item = items[i];

                            if (i == 0) {

                                if (item.node.name) {
                                    htmlName += 'Get social, share ' + item.node.name + ', ' + item.node.degree + ', information through:';
                                }

                                if (item.node.photo) {
                                    htmlImg += '<img src="' + item.node.photo.src + '" alt="' + item.node.photo.alt + '">';
                                }

                                if (item.node.speciality) {
                                    htmlHeaderInfo += '<h4>' + item.node.speciality + '</h4><h2 class="name">' + item.node.name + '</h2><h3>' + item.node.degree + '</h3>';
                                    inject.injectUrl(item.node.name);
                                }

                                certifications = [{ data: item.node.medical_school, title: "Medical School" }, { data: item.node.internship, title: "Internship" }, { data: item.node.residency, title: "Residency" }, { data: item.node.fellowship, title: "Fellowship" }, { data: item.node.board_certification, title: "Board Certification" }];

                                $.each(certifications, function (index, elem) {
                                    if (elem.data && elem.data != "") {
                                        setCertification(elem.data, elem.title);
                                    }
                                });

                                otherInfo = eval(item.node.other_info);

                                if (otherInfo && otherInfo.length > 0) {
                                    for (e = 0; e < otherInfo.length; e++) {
                                        setCertification(otherInfo[e].text, otherInfo[e].title);
                                    }
                                }
                                if (item.node.field_links) {
                                    links = item.node.field_links.split("\n");
                                    target = '';
                                    titles = [];
                                    theLinks = [];

                                    $.each(links, function (index, elem) {

                                        var theString = elem.trim();

                                        if (theString != "" && theString != ",") {
                                            var tiIndex = theString.indexOf('Title:');
                                            var lIndex = theString.indexOf('Link:');
                                            var tIndex = theString.indexOf('Target');

                                            if (tiIndex != -1) {
                                                var currentTitle = theString.substring(tiIndex + 'Title:&nbsp;'.length, lIndex);
                                            }

                                            titles.push(currentTitle);

                                            if (tIndex != -1) {
                                                var currentLink = theString.substring(lIndex + 'Link:&nbsp;'.length, tIndex);
                                            } else {
                                                currentLink = theString.substring(lIndex + 'Link:&nbsp;'.length);
                                            }

                                            theLinks.push(currentLink);
                                        }
                                    });
                                    $.each(titles, function (index, el) {
                                        if (el != "" && el.indexOf('&nbsp;') == -1) {
                                            htmlLinksTab += '<a class="link" href="' + theLinks[index] + '" target="_blank">' + el + '</a>';
                                        } else {
                                            if (theLinks[index] != '#') {
                                                htmlLinksTab += '<a class="link" href="' + theLinks[index] + '" target="_blank">' + theLinks[index] + '</a>';
                                            }
                                        }
                                    });
                                } else {
                                    htmlLinksTab = '<p class="no-links">No links provided</p>';
                                }
                            }
                            // loop through keys
                            if (item.node.location_city) {
                                htmlLocations += '<div class="direction">';
                                if (item.node.location_city) {
                                    htmlLocations += '<p>' + item.node.location_city;
                                    if (item.node.location_type) {
                                        htmlLocations += ' <a href="#" class="location">' + item.node.location_type + '</a>';
                                    }
                                    htmlLocations += '</p>';
                                }
                                if (item.node.location_street) {
                                    htmlLocations += '<p class="address">' + item.node.location_street + '</p>';
                                }
                                if (item.node.location_city) {
                                    htmlLocations += '<p class="address">' + item.node.location_city + ', GA ';
                                    if (item.node.location_postal_code) {
                                        htmlLocations += item.node.location_postal_code;
                                    }
                                    htmlLocations += '</p>';
                                }
                                if (item.node.location_type) {
                                    htmlLocations += '<a href="https://www.google.com/maps?saddr=My+Location&daddr=' + item.node.location_type + ',' + item.node.location_street + ',' + item.node.location_postal_code + ',' + item.node.location_province + ',' + item.node.location_country + '" target="_blank" class="map text-center"><svg xmlns="http://www.w3.org/2000/svg" width="27.2" height="27.2" viewBox="110.4 106.4 67.2 67.2"><path fill="#508FBB" d="M110.4 140c0 18.6 15 33.6 33.6 33.6s33.6-15 33.6-33.6-15-33.6-33.6-33.6-33.6 15-33.6 33.6zm59.9 0c0 14.5-11.8 26.3-26.3 26.3s-26.3-11.8-26.3-26.3 11.8-26.3 26.3-26.3 26.3 11.8 26.3 26.3zm-40.4-6.6v13.1h14.9v8.2l13.9-14.8-13.9-14.8v8.2h-14.9z"/></svg>Directions</a>';
                                }
                                if (item.node.location_phone) {
                                    htmlLocations += '<p class="phone-number">Phone: ' + item.node.location_phone + '</p>';
                                }
                                htmlLocations += '</div>';
                            }
                        }

                        // add data to modal template

                        $('.modal-img').html(htmlImg);
                        $('.main-header-info').html(htmlHeaderInfo);
                        $('.certifications-info').html(htmlCertifications);
                        $('.locations-tab').html(htmlLocations);
                        $('.links-tab').html(htmlLinksTab);
                        $('#share .share-info').text(htmlName);
                    })();
                }
            }
        });
    });
};

},{"./utils":23}],9:[function(require,module,exports){
'use strict';

module.exports = function () {

	function changeBackground(el, color) {
		if (color) {
			el.css('background-color', color);
		}
	}

	var $sidebar = $('.pure-oh-m-sidebar');
	var sHeader = $sidebar.find('.header');
	var sRibbon = $sidebar.find('.ribbon');
	var sRibbonAfter = $sidebar.find('.ribbon');
	var hColor = sHeader.attr('data-background');

	changeBackground(sHeader, hColor);
};

},{}],10:[function(require,module,exports){
"use strict";

module.exports = function () {
	function clear(modal) {
		$(modal).find("input,textarea,select").removeClass('error-field').end().find("input[type=checkbox], input[type=radio]").prop("checked", "").end().find('.error-details').children('p').remove().end();
	};

	$('#modalRequestAppointment').on('hidden.bs.modal', function (e) {
		clear($(this));
	});
	$('#modalContact').on('hidden.bs.modal', function (e) {
		clear($(this));
	});
	$('#modalTeam').on('hidden.bs.modal', function (e) {
		clear($(this));
	});
};

},{}],11:[function(require,module,exports){
"use strict";

module.exports = function () {
	$.validate();
};

},{}],12:[function(require,module,exports){
"use strict";

module.exports = function () {

    // map styles

    var styles = [{
        stylers: [{
            hue: "#F3F8FB"
        }, {
            saturation: -10
        }]
    }, {
        featureType: "road.highway",
        stylers: [{
            lightness: 100
        }, {
            color: "#578EBA"
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "water",
        stylers: [{
            lightness: 100
        }, {
            color: "#D1E2EF"
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];

    var map;

    // This function add markers to the map from .json

    function loadResults(data) {
        var items,
            markers_data = [];
        var locationsHtml = '';
        if (data.nodes.length > 0) {
            items = data.nodes;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.node.latitude != undefined && item.node.longitude != undefined) {
                    var icons = {
                        path: "M12.483332,0.965917c-6.407186,0 -11.683689,5.182281 -11.683689,11.589466s9.610777,19.504233 11.683689,19.504233s11.683691,-13.191271 11.683691,-19.504233c0,-6.407185 -5.276505,-11.589466 -11.683691,-11.589466zm0,18.090873c-3.768929,0 -6.784078,-3.015137 -6.784078,-6.78407s3.015149,-6.784085 6.784078,-6.784085s6.784081,3.015151 6.784081,6.784085c0.094225,3.674712 -3.015144,6.78407 -6.784081,6.78407z",
                        fillColor: '#1E4166',
                        fillOpacity: 1,
                        scale: 1,
                        strokeWeight: 0.2,
                        strokeColor: '#1E4166'
                    };

                    markers_data.push({
                        lat: item.node.latitude,
                        lng: item.node.longitude,
                        title: item.node.title,
                        infoWindow: {
                            content: '<div>' + item.node.location_type + '<div class="vcard" itemscope="" itemtype="http://schema.org/PostalAddress"><div class="adr street-address"><span itemprop="streetAddress">' + item.node.street + '</span></div><div class="location"><span>' + item.node.province + '</span><br><span>' + item.node.city + ', ' + item.node.postal_code + '</span></br><span> ' + item.node.description + '</span></div></div></div>'
                        },

                        icon: icons

                    });
                }

                // creates template for accordion

                locationsHtml += '<div class="panel panel-default"><div class="panel-heading" data-marker-index="' + i + '" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" id="heading' + i + '"><div class="panel-title"><div class="info-box"><p class="location-type">' + item.node.location_type + '</p><a class="location-title pan-to-marker" data-marker-index="' + i + '" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + i + '">' + item.node.title + '</a></div><div class="icon-box"><a class="pull-right right-icon collapsed pan-to-marker" data-marker-index="' + i + '" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + i + '"><svg class="right-ico-arrow"><use xlink:href="#right_ico"></use></svg></a></div></div></div><div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + i + '"><div class="panel-body"><div class="row"><div class="thumbnail" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '">';
                if (item.node.image) {
                    locationsHtml += '<img src="' + item.node.image.src + '" alt="">';
                }
                locationsHtml += '<div class="caption vcard" itemscope="" itemtype="http://schema.org/PostalAddress"><div class="adr street-address"><span itemprop="streetAddress">' + item.node.street + '</span></div><div class="location"><span>' + item.node.city + ', ' + item.node.province + ' ' + item.node.postal_code + '</span><span> ' + item.node.description + '</span></div></div></div><div class="info-buttons"><a href=tel:' + item.node.phone + ' class="phone-number" role="button"><span><svg class="right-down-ico"><use xlink:href="#phn_slant_ico"></use></svg></span>Call</a><a href="https://www.google.com/maps?saddr=My+Location&daddr=' + item.node.street + ',' + item.node.postal_code + ' ' + item.node.province + ',' + item.node.country + ' " target="_blank" class="get-direction" role="button"><span><svg class="right-down-ico"><use xlink:href="#map_fold_ico"></use></svg></span>DIRECTIONS</a></div></div></div></div></div>';
            }
            $('.pure-oh-m-accordion-locations').append(locationsHtml);
        }

        map.addMarkers(markers_data);
    }

    // Pan to the selected marker on the map

    $(document).on('click', '.pan-to-marker, .panel-heading', function (e) {
        e.preventDefault();

        var position, lat, lng, $index;

        $index = $(this).data('marker-index');

        position = map.markers[$index].getPosition();

        lat = position.lat();
        lng = position.lng();

        map.setCenter(lat, lng);
        map.setZoom(18);
    });

    // Add map

    map = new GMaps({
        el: '#map',
        lat: 32.425384,
        lng: -81.939368,
        styles: styles,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    map.on('marker_added', function (marker) {
        var index = map.markers.indexOf(marker);
        if (index == map.markers.length - 1) {
            map.fitZoom();
        }
    });

    var xhr = $.getJSON(host + "/locations-results?name=");

    xhr.done(loadResults);
};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function () {
    if ($('.cards-load-more').length) {
        var start = 1;
        var min_elements = $('.cards .row-eq-height .card-item').length;
        var first_validation = true;
        var elements;
        var toggle = false;
        $('.load-more-main').hide();
        pagination_toggle(start, toggle);
        $('.cards').on('click', '.load-more-main', function (e) {
            e.preventDefault();
            $('.load-more-spinner');
            elements = load_elements(start);
            elements = $(elements).children();
            $(elements).appendTo('.cards-load-more .row-eq-height .row').hide().fadeIn(300);
            $('.col-eq-height').matchHeight({ byRow: false });
            if ($(elements).find('.pure-oh-m-cards').length == min_elements) {
                start++;
            } else {
                $('#load-more-button').hide();
            }
            $('.load-more-spinner').hide();

            pagination_toggle(start, toggle);
        });

        if (first_validation) {
            first_validation = false;
            elements = load_elements(start);
            if ($(elements).find('.card-item').length > 0) {
                $('#load-more-button').show();
            }
        }
    }

    function pagination_toggle(start, toggle) {
        if (!toggle) {
            var elements = load_elements(start);

            if ($(elements).find('.pure-oh-m-cards').length > 0) {
                $('.load-more-main').show();
            } else {
                $('.load-more-main').hide();
            }

            toggle = !toggle;
        }
    }

    function load_elements(start) {

        $.extend({
            xResponse: function xResponse(url, data) {
                // local var
                var theResponse = null;
                // jQuery ajax
                $.ajax({
                    url: url,
                    type: 'GET',
                    data: data,
                    dataType: "html",
                    async: false,
                    success: function success(respText) {
                        theResponse = respText;
                    }
                });
                // Return the response text
                return theResponse;
            }
        });

        var xData = $.xResponse(document.URL + '?page=' + start, { issession: 1, selector: true });

        return $(xData).find('.cards .row-eq-height').html();
    }
};

},{}],14:[function(require,module,exports){
'use strict';

var utils = require('./utils');
module.exports = function () {
	$('.pure-oh-m-accordion-locations').slimScroll({
		height: '600px',
		railVisible: true,
		alwaysVisible: true
	});

	if (utils.msieversion()) {
		$('.sidebar').slimScroll({
			height: 'auto',
			railVisible: true,
			alwaysVisible: true,
			distance: '2px'
		});
	}
};

},{"./utils":23}],15:[function(require,module,exports){
'use strict';

module.exports = function () {

    $('#local-search').on('keyup keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
        var valThis = $(this).val().toLowerCase();
        var showItem = $(this).data('show-element');
        if (valThis === "") {
            $('.' + showItem).parent().show();
        } else {
            $('.' + showItem).each(function () {
                var text = $(this).find('.panel-body').text().toLowerCase();
                text = $.trim(text.replace(/(\r\n|\n|\r)/gm, ""));
                if (text.indexOf(valThis) != -1) {
                    $(this).parent().show(200);
                } else {
                    $(this).parent().hide(200);
                }
            });
        }
    });
};

},{}],16:[function(require,module,exports){
'use strict';

module.exports = function () {

    $('#search-locations').on('keyup keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
        var valThis = $(this).val().toLowerCase();
        if (valThis === "") {
            $('div.panel-heading').show();
        } else {
            $('div.panel.panel-default').each(function () {
                var text = $(this).find('.panel-heading, .caption').text().toLowerCase();
                text = $.trim(text.replace(/(\r\n|\n|\r)/gm, ""));
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
};

},{}],17:[function(require,module,exports){
'use strict';

module.exports = function () {
	function searching(valInput, valDropdown) {
		$('.pure-oh-m-cards').each(function () {
			var text = $(this).find('.panel-body').text().toLowerCase();
			text = $.trim(text.replace(/(\r\n|\n|\r)/gm, ""));
			var dataFilter = [];

			if ($(this).attr('data-filter')) {
				dataFilter = $(this).attr('data-filter').split(",");
			}

			var show = "";
			var groupContainer = $(this).closest('.group-container');
			if (valDropdown == "All") {
				$('.dropdown-menu .all').addClass('display-none');
				if (valInput != "") {
					if (text.indexOf(valInput) >= 0) {
						$(this).parent().show(200);
					} else {
						$(this).parent().hide(200);
					}
				} else {
					$(this).parent().show(200);
					if (groupContainer) {
						groupContainer.removeClass('no-options');
					}
				}
			} else {
				$('.dropdown-menu .all').removeClass('display-none');
				for (var i = 0; i < dataFilter.length; i++) {
					// var filtered = dataFilter[i].replace('-',', ');
					var _dropdown_value = valDropdown.replace(/\,/gi, '').replace(/\s/gi, '-');

					if (_dropdown_value == dataFilter[i]) {
						show = true;
						break;
					} else {
						show = false;
					}
				};
				if (show) {
					if (text.indexOf(valInput) >= 0) {
						$(this).parent().show(200);
						if (groupContainer) {
							groupContainer.removeClass('no-options');
						}
					} else {
						$(this).parent().hide(200);
					}
				} else {
					$(this).parent().hide(200);
				}
			}

			if (groupContainer) {
				setTimeout(function () {
					var itemBox = groupContainer.find('.card-item:visible').length;
					if (itemBox == 0) {
						groupContainer.addClass('no-options');
					}
				}, 500);
			}
		});
	};

	function sorting_elements(valDropdown) {
		valDropdown = valDropdown.toLowerCase().replace(/ /g, "-");
		var wrapper = $('.cards .block .content');
		wrapper.children().sort(function (a, b) {
			a = $(a.children[0]).attr('data-occurrence-' + valDropdown);
			b = $(b.children[0]).attr('data-occurrence-' + valDropdown);
			return a > b ? -1 : a < b ? 1 : 0;
		}).each(function () {
			wrapper.prepend(this);
		});
	}

	$('#inputSearch').on('keyup', function (event) {
		event.preventDefault();
		if (event.keyCode == 13) {
			searching($(this).val().toLowerCase(), $('span[data-bind="label"]').text().replace(/\s+/g, '-'));
			sorting_elements($('span[data-bind="label"]').text().replace(/\s+/g, '-'));
		}
	});

	$('.pure-oh-m-search-withfilter .icon-search').on('click', function (event) {
		event.preventDefault();
		console.log($('#inputSearch').val().toLowerCase(), $('span[data-bind="label"]').text().replace(/\s+/g, '-'));
		searching($('#inputSearch').val().toLowerCase(), $('span[data-bind="label"]').text().replace(/\s+/g, '-'));
		sorting_elements($('span[data-bind="label"]').text().replace(/\s+/g, '-'));
	});

	$('.dropdown-menu li').on('click', function (event) {
		event.preventDefault();
		var $target = $(event.currentTarget);

		$target.closest('.filter').find('[data-bind="label"]').text($target.text()).end().children('.dropdown-toggle').dropdown('toggle');

		searching($('#inputSearch').val().toLowerCase(), $('span[data-bind="label"]').text());
		sorting_elements($('span[data-bind="label"]').text().replace(/\s+/g, '-'));
	});
};

},{}],18:[function(require,module,exports){
"use strict";

module.exports = function () {
	var $input = $("#search-text-field"),
	    $theForm = $input.closest('form'),
	    searchUrl = host + "/content-results",
	    //$theForm[0].action;
	resultPage = host + "/search/node/",
	    selectedItem = '',
	    callResult = false,
	    resultItems = [],
	    enterAvailable = false;

	$('#search-modal').on('shown.bs.modal', function (event) {
		event.preventDefault();
		$("#search-text-field").focus();
	});

	$input.autocomplete({

		create: function create(event, ui) {
			event.target.value = "";
		},
		appendTo: $theForm,
		source: function source(request, response) {
			$.ajax({
				url: searchUrl,
				dataType: 'json',
				data: { 'title': request.term },
				success: function success(data) {

					var views = [];
					var nodes = data.nodes;

					if (nodes.length === 0) {
						views.push('no result found');
					} else {
						callResult = true;
						for (var i = 0; i < nodes.length; i++) {
							var node = nodes[i].node;
							views.push(node.title);
						}
					}

					response(views);
				}
			});
		},

		select: function select(event, ui) {

			selectedItem = ui.item.value.replace(/\s+/g, '%20');
			event.preventDefault();
			if (callResult) {
				window.location.href = resultPage + selectedItem.toLowerCase();
			}
		},

		response: function response(event, ui) {
			resultItems = [];
			for (var i = 0; i < ui.content.length; i++) {
				var node = ui.content[i].value;
				resultItems.push(node);
			}
		},

		minLength: 3

	}).keydown(function (e) {
		if (e.keyCode === 13) {
			enterAvailable = false;
			selectedItem = e.target.value.replace(/\s+/g, '%20');
			for (var i = 0; i < resultItems.length; i++) {
				var node = resultItems[i].toLowerCase();
				if (node.indexOf(selectedItem) !== -1) {
					enterAvailable = true;
				}
			}
			if (callResult && enterAvailable) {
				window.location.href = resultPage + selectedItem.toLowerCase();
				e.preventDefault();
				return false;
			} else {
				e.preventDefault();
				return false;
			}
		}
	}).data("ui-autocomplete")._renderItem = function (ul, item) {

		var theItem = item.label.replace(/\s+/g, '%20'),
		    listItem = $("<li>").data("item.autocomplete", item);

		if (callResult) {
			return listItem.append('<a href="' + resultPage + theItem.toLowerCase() + '">' + item.label + '</a>').appendTo(ul);
		} else {
			return listItem.append(item.label).appendTo(ul);
		}
	};
};

},{}],19:[function(require,module,exports){
'use strict';

var inject = require('./utils');
module.exports = function () {
	function share(el, title) {

		var $theModal = el.data('target'),
		    ModalTitle = title || 'Share';

		if ($theModal) {
			$theModal = $($theModal);
			var shareTitle = ModalTitle.replace(/ /g, '-').toLowerCase();
			inject.injectUrl(shareTitle);
		} else {
			$theModal = $('#modalTeam');
			ModalTitle = $theModal.find('.name').text();
		}

		var url = escape(window.location.href);
		var facebookShare = $theModal.find('.facebook-share'),
		    twitterShare = $theModal.find('.twitter-share'),
		    mailShare = $theModal.find('.mail-share'),
		    facebookUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + url + '&t=',
		    twitterUrl = 'http://www.twitter.com/home?status=' + url + '&source=webclient',
		    mailInfo = 'mailto:?subject=' + ModalTitle + '%20'.replace(/\s/g, "%20") + $theModal.find('.mail-share').data('subject') + '.&body=' + url + '';
		mailInfo = mailInfo.replace(/\n/g, "%0D%0");
		console.log(mailInfo);
		facebookShare.attr("href", facebookUrl);
		twitterShare.attr("href", twitterUrl);
		mailShare.attr("href", mailInfo);
	}

	$('.card-share').on('click', function () {
		var $this = $(this);
		var cardTitle = $this.closest('.pure-oh-m-cards').find('h2').text().toLowerCase();
		if ($this.hasClass('link-share')) {
			cardTitle = $this.closest('.pure-oh-h-modals').find('.detail-modal-header').text().toLowerCase(); //just for modal detail
		}
		if (cardTitle) {
			$('.pure-oh-m-modal-share h2').text(cardTitle);
		} else {
			var shareHtml = '<span data-dismiss="modal" aria-label="Close" class="pull-right close"><i class="fa fa-times"></i></span>' + '<h2><i class="fa fa-share-square-o"></i> Share</h2>';
			$('.pure-oh-m-modal-share .modal-header').html(shareHtml);
		}
		share($(this), cardTitle);
	});
};

},{"./utils":23}],20:[function(require,module,exports){
'use strict';

module.exports = function () {
	$('.show-sidebar').click(function (event) {
		/* Act on the event */
		if ($('.pure-oh-m-sidebar').find('sidebar-modal')) {
			$('.pure-oh-m-sidebar').find('.sidebar.hidden-xs').removeClass('hidden-xs');
			$('.pure-oh-m-sidebar').find('.mobile-footer').addClass('hidden-xs');
			$('.pure-oh-h-modals').find('.leftcol').addClass('hidden-xs');
		} else {
			$('.pure-oh-m-sidebar').find('.sidebar.hidden-xs').removeClass('hidden-xs');
			$('.pure-oh-m-sidebar').find('.mobile-footer').addClass('hidden-xs');
		}
	});

	$('.pure-oh-m-sidebar .close').click(function (event) {
		/* Act on the event */
		if ($('.pure-oh-m-sidebar').find('sidebar-modal')) {
			$('.sidebar').addClass('hidden-xs');
			$('.mobile-footer').removeClass('hidden-xs');
			$('.pure-oh-h-modals').find('.leftcol').removeClass('hidden-xs');
		} else {
			$('.sidebar').addClass('hidden-xs');
			$('.mobile-footer').removeClass('hidden-xs');
		}
	});
};

},{}],21:[function(require,module,exports){
'use strict';

module.exports = function () {

	$('#modalDetails').on('shown.bs.modal', function (event) {
		event.preventDefault();
		/* Act on the event */
		$('.sidebar').slimScroll({
			height: 'auto',
			railVisible: true,
			alwaysVisible: true,
			distance: '0px'
		});
	});
};

},{}],22:[function(require,module,exports){
'use strict';

module.exports = function () {
	// var imageBg = $('.pure-oh-m-testimonials .banner img').attr('data-bg-color');
	// $('.pure-oh-m-testimonials .banner').css('background-color', imageBg);

	function getMargin() {
		var imageBg = $('.pure-oh-m-testimonials .banner .bannerImage'),
		    $header = $('.pure-oh-m-testimonials .pure-oh-m-header-dark').outerHeight(),
		    marginTop = -$header;
		imageBg.css('margin-top', marginTop);
	}

	getMargin();

	$(window).resize(getMargin);
};

},{}],23:[function(require,module,exports){
'use strict';

var injectUrl = function injectUrl(title) {
    var urlTitle = $.trim(title.replace(/ /g, '-').toLowerCase());
    var hash = window.location.search;

    if (hash.indexOf('body_part') !== -1) {
        var currentUrl = hash;
        var index = hash.indexOf('m=');
        if (index !== -1) {
            index -= 1;
            currentUrl = hash.substring(index, 0);
        }

        history.pushState(null, null, currentUrl + '&m=' + urlTitle);
    } else {
        history.pushState(null, null, '?m=' + urlTitle);
    }
};

var msieversion = function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var result = false;

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) result = true;else result = false;

    return result;
};

module.exports = {
    injectUrl: injectUrl,
    msieversion: msieversion
};

},{}],24:[function(require,module,exports){
'use strict';

module.exports = function () {

	$.fn.modal.Constructor.prototype.enforceFocus = function () {};

	console.log($('.form-actions').parent());

	var isEmpty;
	var modal;

	String.prototype.capitalFirstLetter = function () {
		return this.charAt(0).toUpperCase() + this.slice(1);
	};

	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	};

	function fieldRequired(fieldName) {
		isEmpty = "";
		if (fieldName.val().length == 0) {
			fieldName.addClass('error-field');
			isEmpty = true;
		} else {
			fieldName.removeClass('error-field');
			isEmpty = false;
		}
		return isEmpty;
	};

	function validateField(el) {
		fieldRequired(el);
		var fieldName = '',
		    classList = el.attr('class').split(/\s+/);

		$.each(classList, function (index, item) {
			if (item.indexOf('field-') != -1) {
				fieldName = item.replace('field-', '');
			}
		});

		var errorName = "#" + fieldName + "-error",
		    modal = el.closest('.in'),
		    errorItem = $(errorName);
		if (isEmpty && errorItem.length == 0) {
			modal.find('.error-details').append('<p id="' + fieldName + '-error">' + fieldName.capitalFirstLetter() + ' is required</p>');
		} else if (isEmpty && errorItem.length >= 1 && fieldName == "email") {
			$(errorName).text('Email is required');
		} else if (!isEmpty) {
			if (fieldName == "email") {
				if (!isValidEmailAddress(el.val())) {
					if ($('.error-details ' + errorName).length > 0) {
						el.addClass('error-field');
						$(errorName).text('Email is not valid');
					} else {
						modal.find('.error-details').append('<p id="' + fieldName + '-error">' + fieldName.capitalFirstLetter() + ' is not valid</p>');
						el.addClass('error-field');
					}
				} else {
					el.removeClass('error-field');
					$('p').remove(errorName);
				}
			} else {
				$('p').remove(errorName);
			}
		}
	}

	function validateCaptchaField(el) {
		fieldRequired(el);
		var fieldName = '',
		    classList = el.attr('class').split(/\s+/),
		    recaptchaResponse = grecaptcha.getResponse();

		$.each(classList, function (index, item) {
			if (item.indexOf('field-') != -1) {
				fieldName = item.replace('field-', '');
			}
		});

		var errorName = "#" + fieldName + "-error",
		    modal = el.closest('.in'),
		    errorItem = $(errorName);
		if (isEmpty && errorItem.length == 0 && recaptchaResponse.length == 0) {
			modal.find('.error-details').append('<p id="' + fieldName + '-error">' + fieldName.capitalFirstLetter() + ' is required</p>');
		} else if (isEmpty && errorItem.length >= 1 && fieldName == "email") {
			$(errorName).text('Email is required');
		} else if (!isEmpty) {
			if (fieldName == "email") {
				if (!isValidEmailAddress(el.val())) {
					if ($('.error-details ' + errorName).length > 0) {
						el.addClass('error-field');
						$(errorName).text('Email is not valid');
					} else {
						modal.find('.error-details').append('<p id="' + fieldName + '-error">' + fieldName.capitalFirstLetter() + ' is not valid</p>');
						el.addClass('error-field');
					}
				} else {
					el.removeClass('error-field');
					$('p').remove(errorName);
				}
			} else {
				$('p').remove(errorName);
			}
		}
	}

	function validateForm(el) {

		var fields = el.find(".form-text");

		fields.each(function () {
			validateField($(this));
		});

		if (isEmpty != undefined) {
			if ($('.error-details').children().length == 0) {
				el.submit();
			}
		}
	}

	function validateFormCaptcha(el) {

		var fields = el.find(".form-text");

		fields.each(function () {
			validateCaptchaField($(this));
		});
	}

	$('.modal.fade').on('hidden.bs.modal', function (e) {
		$('form .form-text').each(function () {
			$(this).val('');
		});
		isEmpty = undefined;
	});

	$('form .form-text').each(function () {
		$(this).blur(function () {
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

	$('.form-submit').on('click', function (e) {

		e.preventDefault();

		if ($(this).closest('form').find('.captcha').length) {
			var recaptchaResponse = grecaptcha.getResponse();
			if ($(this).attr('value') != 0 && recaptchaResponse.length != 0) {
				$(this).closest('form').submit();
				return true;
			} else if ($(this).attr('value') != 0 && recaptchaResponse.length == 0) {
				validateFormCaptcha($(this).closest('form'));
				if ($('.captcha-error').length == 0) {
					$('#modalContact').find('.g-recaptcha').append('<p class="' + 'captcha' + '-error">' + 'recaptcha' + ' is required</p>');
				}
				return false;
			} else {
				validateForm($(this).closest('form'));
				return false;
			}
		} else if ($(this).attr('value') == 'Log in') {
			$(this).closest('form').submit();
			return;
		} else {
			validateForm($(this).closest('form'));
		}
	});
};

},{}],25:[function(require,module,exports){
'use strict';

var inject = require('./utils');
module.exports = function () {

    $('.modal-videos .modal-action').on('click', function (e) {
        e.preventDefault();
        var $parent = $(this).closest('.modal-cards'),
            node = $parent.find('.modal-node'),
            title = node.data('title'),
            description = node.data('description'),
            videoid = node.data('video'),
            theModal = $("#modalVideo"),
            theIframe = theModal.find('iframe');
        theModal.find('h2').text(title);
        theModal.find('p').text(description);

        var video = theIframe.attr("src");
        theIframe.attr("src", "");
        theIframe.attr("src", "http://www.youtube.com/embed/" + videoid);

        inject.injectUrl(title);
    });
};

},{"./utils":23}],26:[function(require,module,exports){
'use strict';

module.exports = function () {
	var $stepContainer = $(".step-info"),
	    $stepBox = $stepContainer.find('.step-box'),
	    $questionBox = $stepContainer.find('.question-box'),
	    $items = $('.lumbar-pain'),
	    $counter = $('.step-counter'),
	    $stepBack = $('.step-back'),
	    questions = $stepBox.find('.selection-box a'),
	    counterIndex = $counter.find('button'),
	    stepUrl = host + "/diagnostics-results",
	    resultUrl = host + "/conditions-results",
	    conditionUrl = host + "/what-hurts-results",
	    whatHurtImage = $("#image-box"),
	    stepsData = {};

	var currentUrl = window.location.pathname;

	if (currentUrl.indexOf('whats-hurting') !== -1) {

		$.address.path('step-1');

		var visitedPages = [$.address.path()];

		$.address.internalChange(function () {
			visitedPages.push($.address.path());
		});

		$.address.externalChange(function (ev) {

			var newPage = $.address.path();
			visitedPages.push(newPage);
			var lastPage = visitedPages[visitedPages.length - 2],
			    newPageIndex = Number(newPage.replace("/step-", "")),
			    lastPageIndex = Number(lastPage.replace("/step-", ""));

			if (newPageIndex == 1) {
				moveStep(0);
				history.pushState(null, null, location.href);
				history.go(1);
			} else {
				console.dir($(counterIndex[newPageIndex - 1]));
				$(counterIndex[newPageIndex - 1]).trigger('click');
			}
		});
	}

	function setImageClass(img) {
		if (img) {
			whatHurtImage.removeClass(function (index, css) {
				return (css.match(/\boval-\S+/g) || []).join(' ');
			}).addClass(img);
		} else {
			whatHurtImage.removeClass(function (index, css) {
				return (css.match(/\boval-\S+/g) || []).join(' ');
			});
		}
	}

	// animation-what-hurts.js integration
	function stopAnimation(element) {
		$(element).css("-webkit-animation", "none");
		$(element).css("-moz-animation", "none");
		$(element).css("-ms-animation", "none");
		$(element).css("animation", "none");
	}

	$stepBack.on('click', function (e) {

		e.preventDefault();
		var currentStep = $(this).closest('.step-info').find('.question-box.active').index(),
		    moveTo = currentStep - 1;
		moveStep(moveTo);
	});

	counterIndex.on('click', function (e) {

		var $this = $(this);

		if ($this.hasClass('disabled')) {
			return false;
		} else {
			e.preventDefault();
			moveStep($this.index());
			$.address.path('step-' + ($this.index() + 1));
		}
	});

	$items.on('click', function (e) {

		$items.removeClass('scale-image'); // animation-what-hurts.js integration
		stopAnimation($items.find('.circle')); // animation-what-hurts.js integration

		var $this = $(this),
		    bodyPart = $this.data('body-part'),
		    bodyId = $this.attr('id');

		setImageClass(bodyId);
		whatHurtImage.addClass('selected');

		stepsData['body_part'] = bodyPart;

		$this.addClass('active');
		$this.siblings().hide();

		getData(stepsData).success(function (data) {
			addElements($this, data);
		});
	});

	$items.hover(function () {
		var $this = $(this),
		    bodyId = $this.attr('id');
		if (!$this.hasClass('active')) {
			setImageClass(bodyId);
		}
	}, function () {

		if (!$(this).hasClass('active')) {
			setImageClass();
		}
	});

	$(questions).on('click', function (e) {
		e.preventDefault();
		var theParent = $(this).closest('.step-box'),
		    theAnswer = $(this).attr('data-question');

		if (theParent.index() == 1) {
			stepsData['node'] = theAnswer;
			stepsData['diagnostic1'] = $(this).attr('data-diagnostic');
			if (stepsData['diagnostic2']) {
				stepsData['diagnostic2'] = '';
			}

			getData(stepsData).success(function (data) {
				lastQuestion(theParent.next(), data);
			});
		} else {
			stepsData['diagnostic2'] = $(this).attr('data-diagnostic');
			getResult(stepsData);
		}
	});

	function addElements(el, data) {

		var nodes = data.nodes,
		    question1 = "question 1",
		    firstQuestionBox = $($questionBox[0]),
		    itemTitle = el.find('.title'),
		    titleFilter = itemTitle.text().replace(/\s+/g, '%20'),
		    itemDescription = el.find('.description'),
		    firstNodes = [];

		for (var e = 0; e < nodes.length; e++) {
			if (nodes[e].node.is_first_question == 1) {
				firstNodes.push(nodes[e].node);
				question1 = nodes[e].node.question_text;
			}
		}

		$.each($questionBox, function (index, el) {

			var currentTitle = $(this).find('.title');
			if (!currentTitle.length) {
				itemDescription.clone().prependTo($(this));
				itemTitle.clone().prependTo($(this));
			}
		});

		setAnswers(firstQuestionBox, firstNodes);

		firstQuestionBox.find('.step-question h2').text(question1);

		moveStep(1);
	}

	function setAnswers(el, nodes) {
		var currentQuestions = el.find('.selection-box a');

		$.each(currentQuestions, function (index, item) {
			var boxIndex = el.index();
			if (boxIndex == 1) {
				$(item).text(nodes[index].answer_text + ' > ').attr('data-question', nodes[index].next_question).attr('data-diagnostic', nodes[index].diagnostics_category);
			} else {
				$(item).text(nodes[index].answer_text + ' > ').attr('data-question', nodes[index].diagnostics_category).attr('data-diagnostic', nodes[index].diagnostics_category);
			}
		});
	}

	function lastQuestion(el, data) {
		var nodes = data.nodes;
		var question2 = "question 2";
		var lastNodes = [];

		for (var e = 0; e < nodes.length; e++) {
			lastNodes.push(nodes[e].node);
			question2 = nodes[e].node.question_text;
		}

		setAnswers(el, lastNodes);

		el.find('.step-question h2').text(question2);

		moveStep(2);
	}

	function resetStep1() {
		$.each($questionBox, function (index, el) {
			var currentTitle = $(this).find('.title'),
			    currentDescription = $(this).find('.description');
			if (currentTitle.length) {
				currentTitle.remove();
				currentDescription.remove();
			}
		});

		setImageClass();
		whatHurtImage.removeClass('selected');
		$items.show().removeClass('active');
		counterIndex.not(counterIndex[0]).addClass('disabled');
		$stepBack.hide();
		stepsData.node = '';
		stepsData.diagnostic1 = '';
		stepsData.diagnostic2 = '';
	}

	function moveStep(index) {
		$stepBox.removeClass('active').hide();
		$($stepBox[index]).show().addClass('active');
		counterIndex.removeClass('active');
		$(counterIndex[index]).addClass('active');

		if (index == 0) {
			resetStep1();
			$('.hide-btn').hide();
		} else {
			$(counterIndex[index]).removeClass('disabled');
			$stepBack.css('display', 'block');
			$('.hide-btn').show();
		}
		$.address.path('step-' + (index + 1));
	}

	function getData(stpData) {
		return $.ajax({
			url: stepUrl,
			dataType: 'json',
			data: stpData
		});
	}

	function getResult(stpData) {
		var finalresult = '?body_part=' + stpData.body_part + '&node=' + stpData.node + '&diagnostic1=' + stpData.diagnostic1 + '&diagnostic2=' + stpData.diagnostic2;
		window.location.href = conditionUrl + finalresult;
	}
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHVuZ3QvRG9jdW1lbnRzL3Byb2plY3RzL3B1cmUtb3B0aW1oZWFsdGgvcHVyZS1vcHRpbWhlYWx0aC1zaXRlcy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbWFpbi5qcyIsIi9Vc2Vycy9odW5ndC9Eb2N1bWVudHMvcHJvamVjdHMvcHVyZS1vcHRpbWhlYWx0aC9wdXJlLW9wdGltaGVhbHRoLXNpdGVzL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL0FjY29yZGlvbi5qcyIsIi9Vc2Vycy9odW5ndC9Eb2N1bWVudHMvcHJvamVjdHMvcHVyZS1vcHRpbWhlYWx0aC9wdXJlLW9wdGltaGVhbHRoLXNpdGVzL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL01vZGFsVGVhbS5qcyIsIi9Vc2Vycy9odW5ndC9Eb2N1bWVudHMvcHJvamVjdHMvcHVyZS1vcHRpbWhlYWx0aC9wdXJlLW9wdGltaGVhbHRoLXNpdGVzL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL1Jlc2l6ZUNhcmRzLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvVXJsTW9kYWxzLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvYW5pbWF0aW9uLXdoYXQtaHVydHMuanMiLCIvVXNlcnMvaHVuZ3QvRG9jdW1lbnRzL3Byb2plY3RzL3B1cmUtb3B0aW1oZWFsdGgvcHVyZS1vcHRpbWhlYWx0aC1zaXRlcy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9jYXJkTW9kYWxEZXRhaWxzLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvY2FyZE1vZGFsVGVhbS5qcyIsIi9Vc2Vycy9odW5ndC9Eb2N1bWVudHMvcHJvamVjdHMvcHVyZS1vcHRpbWhlYWx0aC9wdXJlLW9wdGltaGVhbHRoLXNpdGVzL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL2NoYW5nZS1iYWNrZ3JvdW5kLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvY2xlYXJJbnB1dE1vZGFscy5qcyIsIi9Vc2Vycy9odW5ndC9Eb2N1bWVudHMvcHJvamVjdHMvcHVyZS1vcHRpbWhlYWx0aC9wdXJlLW9wdGltaGVhbHRoLXNpdGVzL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL2Zvcm1zVmFsaWRhdGUuanMiLCIvVXNlcnMvaHVuZ3QvRG9jdW1lbnRzL3Byb2plY3RzL3B1cmUtb3B0aW1oZWFsdGgvcHVyZS1vcHRpbWhlYWx0aC1zaXRlcy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9sb2NhdGlvbnMuanMiLCIvVXNlcnMvaHVuZ3QvRG9jdW1lbnRzL3Byb2plY3RzL3B1cmUtb3B0aW1oZWFsdGgvcHVyZS1vcHRpbWhlYWx0aC1zaXRlcy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9wYWdpbmF0aW9uLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvc2Nyb2xsLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvc2VhcmNoLWxvY2FsLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvc2VhcmNoLWxvY2F0aW9ucy5qcyIsIi9Vc2Vycy9odW5ndC9Eb2N1bWVudHMvcHJvamVjdHMvcHVyZS1vcHRpbWhlYWx0aC9wdXJlLW9wdGltaGVhbHRoLXNpdGVzL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL3NlYXJjaC13aXRoZmlsdGVyLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvc2VhcmNoLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvc2hhcmUuanMiLCIvVXNlcnMvaHVuZ3QvRG9jdW1lbnRzL3Byb2plY3RzL3B1cmUtb3B0aW1oZWFsdGgvcHVyZS1vcHRpbWhlYWx0aC1zaXRlcy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9zaG93LXNpZGViYXIuanMiLCIvVXNlcnMvaHVuZ3QvRG9jdW1lbnRzL3Byb2plY3RzL3B1cmUtb3B0aW1oZWFsdGgvcHVyZS1vcHRpbWhlYWx0aC1zaXRlcy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9zaWRlYmFyLXNjcm9sbC5qcyIsIi9Vc2Vycy9odW5ndC9Eb2N1bWVudHMvcHJvamVjdHMvcHVyZS1vcHRpbWhlYWx0aC9wdXJlLW9wdGltaGVhbHRoLXNpdGVzL2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL3Rlc3RpbW9uaWFsLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvdXRpbHMuanMiLCIvVXNlcnMvaHVuZ3QvRG9jdW1lbnRzL3Byb2plY3RzL3B1cmUtb3B0aW1oZWFsdGgvcHVyZS1vcHRpbWhlYWx0aC1zaXRlcy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy92YWxpZGF0ZUZvcm1zLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvdmlkZW9zLmpzIiwiL1VzZXJzL2h1bmd0L0RvY3VtZW50cy9wcm9qZWN0cy9wdXJlLW9wdGltaGVhbHRoL3B1cmUtb3B0aW1oZWFsdGgtc2l0ZXMvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvd2hhdC1odXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSxZQUFZLENBQUM7Ozs7Z0NBRVMscUJBQXFCOzs7O2dDQUNyQixxQkFBcUI7Ozs7NkJBQ2xCLGtCQUFrQjs7OztnQ0FDckIscUJBQXFCOzs7O2tDQUNuQix3QkFBd0I7Ozs7c0NBQ3BCLDRCQUE0Qjs7OztvQ0FDOUIseUJBQXlCOzs7O3VDQUN0Qiw0QkFBNEI7Ozs7b0NBQy9CLHlCQUF5Qjs7OztnQ0FDN0Isc0JBQXNCOzs7O2tDQUNwQix1QkFBdUI7Ozs7a0NBQ3ZCLHVCQUF1Qjs7Ozs0QkFDN0IsaUJBQWlCOzs7O2tDQUNYLHdCQUF3Qjs7OztnQ0FDM0IscUJBQXFCOzs7O3VDQUNiLDZCQUE2Qjs7OztvQ0FDaEMseUJBQXlCOzs7OzZCQUNoQyxrQkFBa0I7Ozs7dUNBQ1IsNEJBQTRCOzs7O3lD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LENBQUMsRUFBQztBQUNiLGFBQVUsRUFBRSxDQUFDO0FBQ2IsSUFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ3RCLE1BQUk7QUFDSixJQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLFlBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pDLElBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUN0QjtBQUNELEdBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBRSxLQUFLLEdBQUMsQ0FBQyxDQUFBLEFBQUMsQ0FBQyxDQUFDO0VBQ2xDOztBQUVELFVBQVMsT0FBTyxDQUFDLE9BQU8sRUFBQztBQUN4QixTQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDVixNQUFHLEVBQUUsT0FBTztBQUNaLFdBQVEsRUFBRSxNQUFNO0FBQ2hCLE9BQUksRUFBRSxPQUFPO0dBQ2hCLENBQUMsQ0FBQztFQUNIOztBQUdELFVBQVMsU0FBUyxDQUFDLE9BQU8sRUFBQztBQUMxQixNQUFJLFdBQVcsR0FBRyxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxlQUFlLEdBQUcsT0FBTyxDQUFDLFdBQVcsR0FBRyxlQUFlLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUM3SixRQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsV0FBVyxDQUFDO0VBQ2xEO0NBRUQsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhY2NvcmRpb24gZnJvbSBcIi4vbW9kdWxlcy9BY2NvcmRpb25cIjtcbmltcG9ydCBtb2RhbFRlYW0gZnJvbSBcIi4vbW9kdWxlcy9Nb2RhbFRlYW1cIjtcbmltcG9ydCBnbG9iYWxTZWFyY2ggZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hcIjtcbmltcG9ydCBsb2NhdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy9sb2NhdGlvbnNcIjtcbmltcG9ydCBzZWFyY2hMb2NhbCBmcm9tIFwiLi9tb2R1bGVzL3NlYXJjaC1sb2NhbFwiO1xuaW1wb3J0IHNlYXJjaExvY2F0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3NlYXJjaC1sb2NhdGlvbnNcIjtcbmltcG9ydCBmb3Jtc1ZhbGlkYXRlIGZyb20gXCIuL21vZHVsZXMvZm9ybXNWYWxpZGF0ZVwiO1xuaW1wb3J0IGNhcmRNb2RhbERldGFpbHMgZnJvbSBcIi4vbW9kdWxlcy9jYXJkTW9kYWxEZXRhaWxzXCI7XG5pbXBvcnQgY2FyZE1vZGFsVGVhbSBmcm9tIFwiLi9tb2R1bGVzL2NhcmRNb2RhbFRlYW1cIjtcbmltcG9ydCB3aGF0SHVydHMgZnJvbSBcIi4vbW9kdWxlcy93aGF0LWh1cnRzXCI7XG5pbXBvcnQgdGVzdGltb25pYWwgZnJvbSBcIi4vbW9kdWxlcy90ZXN0aW1vbmlhbFwiO1xuaW1wb3J0IHJlc2l6ZUNhcmRzIGZyb20gXCIuL21vZHVsZXMvUmVzaXplQ2FyZHNcIjtcbmltcG9ydCBzaGFyZSBmcm9tIFwiLi9tb2R1bGVzL3NoYXJlXCI7XG5pbXBvcnQgc2hvd1NpZGViYXIgZnJvbSBcIi4vbW9kdWxlcy9zaG93LXNpZGViYXJcIjtcbmltcG9ydCB1cmxNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL1VybE1vZGFsc1wiO1xuaW1wb3J0IHNlYXJjaFdpdGhGaWx0ZXIgZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2gtd2l0aGZpbHRlclwiO1xuaW1wb3J0IHZhbGlkYXRlRm9ybXMgZnJvbSBcIi4vbW9kdWxlcy92YWxpZGF0ZUZvcm1zXCI7XG5pbXBvcnQgdmlkZW9zIGZyb20gXCIuL21vZHVsZXMvdmlkZW9zXCI7XG5pbXBvcnQgY2xlYXJJbnB1dE1vZGFscyBmcm9tIFwiLi9tb2R1bGVzL2NsZWFySW5wdXRNb2RhbHNcIjtcbmltcG9ydCBhbmltYXRpb25XSCBmcm9tIFwiLi9tb2R1bGVzL2FuaW1hdGlvbi13aGF0LWh1cnRzXCI7XG5pbXBvcnQgcGFnaW5hdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBjaGFuZ2VCZyBmcm9tIFwiLi9tb2R1bGVzL2NoYW5nZS1iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgc2Nyb2xsIGZyb20gXCIuL21vZHVsZXMvc2Nyb2xsXCI7XG5pbXBvcnQgc2lkZWJhclNjcm9sbCBmcm9tIFwiLi9tb2R1bGVzL3NpZGViYXItc2Nyb2xsXCI7XG5cblxuLy8galF1ZXJ5IERPTSBSZWFkeVxuJCgoKSA9PiB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaW5pdGlhbGl6ZVxuXG5cdGdsb2JhbC5ob3N0ID0gJ2h0dHA6Ly8nICsgZG9jdW1lbnQuZG9tYWluO1xuXHRnbG9iYWwuZGVza3RvcERldmljZSA9IGZhbHNlO1xuXHRnbG9iYWwubW9iaWxlRGV2aWNlICA9IGZhbHNlO1xuXG5cdGlmKChkb2N1bWVudC5kb21haW4gPT0gJycpIHx8IChkb2N1bWVudC5kb21haW4gPT0gJ2xvY2FsaG9zdCcpKXtcblx0ICBob3N0ID0gJ2h0dHA6Ly8xMDQuMTMwLjEyLjMzJztcblx0fVxuXG5cdGlmICghKFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSkge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgbm8tdG91Y2hcIjtcblx0XHRkZXNrdG9wRGV2aWNlID0gdHJ1ZTtcblx0fWVsc2V7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSBcIiB0b3VjaC1kZXZcIjtcblx0XHRtb2JpbGVEZXZpY2UgPSB0cnVlO1xuXHR9XG5cblx0aWYodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpe1xuXHRcdG1vYmlsZURldmljZSA9IHRydWU7XG5cdH1cblxuXHRhY2NvcmRpb24oKTtcblx0bW9kYWxUZWFtKCk7XG5cblx0aWYoJChcIiNzZWFyY2gtbG9jYXRpb25zXCIpLmxlbmd0aCA+IDApe1xuXHRcdHNlYXJjaExvY2F0aW9ucygpO1xuXHR9XG5cblx0aWYoJChcIiNzZWFyY2gtdGV4dC1maWVsZFwiKS5sZW5ndGggPiAwKXtcblx0XHRnbG9iYWxTZWFyY2goKTtcblx0fVxuXG5cdHdoYXRIdXJ0cygpO1xuXG5cdGlmICgkKCcjbWFwJykubGVuZ3RoID4gMCkge1xuXHRcdGxvY2F0aW9ucygpO1xuXHR9XG5cblx0aWYoJCgnLnNpZGViYXIgLmhlYWRlcicpKXtcblx0XHRjaGFuZ2VCZygpO1xuXHR9XG5cblx0c2VhcmNoTG9jYWwoKTtcblx0dmlkZW9zKCk7XG5cdGZvcm1zVmFsaWRhdGUoKTtcblx0Y2FyZE1vZGFsRGV0YWlscygpO1xuXHRjYXJkTW9kYWxUZWFtKCk7XG5cdHRlc3RpbW9uaWFsKCk7XG5cdHJlc2l6ZUNhcmRzKCk7XG5cdHNoYXJlKCk7XG5cdHNob3dTaWRlYmFyKCk7XG5cdHVybE1vZGFsKCk7XG5cdHNlYXJjaFdpdGhGaWx0ZXIoKTtcblx0dmFsaWRhdGVGb3JtcygpO1xuXHRjbGVhcklucHV0TW9kYWxzKCk7XG5cdGlmKCQoJy5jaXJjbGUnKS5sZW5ndGggPiAwKXtcblx0XHRhbmltYXRpb25XSCgpO1xuXHR9XG5cdHBhZ2luYXRpb24oKTtcblx0c2Nyb2xsKCk7XG5cdHNpZGViYXJTY3JvbGwoKTtcblxufSk7IiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cblx0Ly90byByZXNvbHZlIGZvb3RlciBiZWhhdmlvciBpbiBob21lcGFnZVxuXHR2YXIgaG9tZVBhZ2VGb290ZXIgXHQgICAgPSAkKFwiLnB1cmUtb2gtbS1ob21lcGFnZSBmb290ZXJcIiksXG5cdFx0dGhlQWNjb3JkaW9uICAgXHQgICAgPSAkKFwiLmFjY29yZGlvblwiKSxcblx0XHRhY2NvcmRpb25JdGVtcyBcdCAgICA9IHRoZUFjY29yZGlvbi5maW5kKCcuYWNjb3JkaW9uLWl0ZW0nKSxcblx0XHRtaW5EaXN0YW5jZSAgICAgICAgID0gMjAsXG5cdFx0ZGlzdGFuY2VFbGVtZW50cyAgICA9ICAwO1xuXG5cblx0dmFyIGZsYWcgPSAkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQ7XG5cblx0aWYoZGVza3RvcERldmljZSl7XG5cdFx0bWluRGlzdGFuY2UgPSAyMDA7XG5cdH1cblxuXHQkKFwiLmFjY29yZGlvblwiKS5hY2NvcmRpb24oe1xuXHRcdGhlYWRlcjogXCIuYWNjb3JkaW9uLWhlYWRpbmdcIixcblx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRhY3RpdmU6IGZhbHNlLFxuXHRcdGljb25zOiBmYWxzZSxcblx0XHRhdXRvSGVpZ2h0OiBmYWxzZSxcblx0XHRoZWlnaHRTdHlsZTogXCJjb250ZW50XCIsXG5cdFx0ZXZlbnQ6IFwibW91c2VvdmVyXCIsXG5cdFx0YmVmb3JlQWN0aXZhdGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuXHRcdFx0aWYgKGZsYWcpIHtcblxuXHRcdFx0XHR2YXIgaWNvbiA9ICQodWkubmV3SGVhZGVyWzBdKS5maW5kKCcuYXJyb3ctdGl0bGUnKSxcblx0XHRcdFx0XHRpY29uUmVzZXRSb3RhdGUgPSAwLFxuXHRcdFx0XHRcdGljb25Sb3RhdGUgPSA5MDtcblxuXHRcdFx0XHRpY29uLmNzcyh7XG5cdFx0XHRcdFx0Jy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgaWNvblJlc2V0Um90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdCctbW96LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGljb25SZXNldFJvdGF0ZSArICdkZWcpJyxcblx0XHRcdFx0XHQnLW1zLXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGljb25SZXNldFJvdGF0ZSArICdkZWcpJyxcblx0XHRcdFx0XHQnLW8tdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgaWNvblJlc2V0Um90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdCd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUmVzZXRSb3RhdGUgKyAnZGVnKSdcblx0XHRcdFx0fSkuY3NzKHtcblx0XHRcdFx0XHQnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUm90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdCctbW96LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGljb25Sb3RhdGUgKyAnZGVnKScsXG5cdFx0XHRcdFx0Jy1tcy10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUm90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdCctby10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUm90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdCd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUm90YXRlICsgJ2RlZyknXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICh1aS5vbGRIZWFkZXJbMF0pIHtcblx0XHRcdFx0XHR2YXIgb2xkSWNvbiA9ICQodWkub2xkSGVhZGVyWzBdKS5maW5kKCcuYXJyb3ctdGl0bGUnKTtcblx0XHRcdFx0XHRvbGRJY29uLmNzcyh7XG5cdFx0XHRcdFx0XHQnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUm90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdFx0Jy1tb3otdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgaWNvblJvdGF0ZSArICdkZWcpJyxcblx0XHRcdFx0XHRcdCctbXMtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgaWNvblJvdGF0ZSArICdkZWcpJyxcblx0XHRcdFx0XHRcdCctby10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUm90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdFx0J3RyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGljb25Sb3RhdGUgKyAnZGVnKSdcblx0XHRcdFx0XHR9KS5jc3Moe1xuXHRcdFx0XHRcdFx0Jy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgaWNvblJlc2V0Um90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdFx0Jy1tb3otdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgaWNvblJlc2V0Um90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdFx0Jy1tcy10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBpY29uUmVzZXRSb3RhdGUgKyAnZGVnKScsXG5cdFx0XHRcdFx0XHQnLW8tdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgaWNvblJlc2V0Um90YXRlICsgJ2RlZyknLFxuXHRcdFx0XHRcdFx0J3RyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGljb25SZXNldFJvdGF0ZSArICdkZWcpJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQkKFwiLnVpLWFjY29yZGlvblwiKS5vbignbW91c2VsZWF2ZScsIChlKSA9PiB7XG5cdFx0JChcIi5hY2NvcmRpb25cIikuYWNjb3JkaW9uKHtcblx0XHRcdGFjdGl2ZTogZmFsc2Vcblx0XHR9KTtcblx0fSk7XG5cblx0aWYoZGVza3RvcERldmljZSl7XG5cdFx0JCggXCIuYWNjb3JkaW9uXCIgKS5hY2NvcmRpb24oIFwiZW5hYmxlXCIgKTtcblx0fWVsc2V7XG5cdFx0JCggXCIuYWNjb3JkaW9uXCIgKS5hY2NvcmRpb24oIFwiZGlzYWJsZVwiICk7XG5cdH1cblxuXHRpZih1dGlscy5tc2lldmVyc2lvbigpKXtcblx0XHQkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG5cdH1cblxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCl7XG5cdC8vIGxvY2F0aW9ucyBob3ZlclxuXHQvLyAkKGRvY3VtZW50KS5vbignbW91c2VvdmVyJywgJy5kaXJlY3Rpb24nLGZ1bmN0aW9uKCkge1xuXHQvLyBcdCQodGhpcykuZmluZCgnLm1hcCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHQvLyBcdCQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywgJyNGNUY1RjUnKTtcblx0Ly8gfSk7XG5cdC8vICQoZG9jdW1lbnQpLm9uKCdtb3VzZW91dCcsICcuZGlyZWN0aW9uJyxmdW5jdGlvbigpIHtcblx0Ly8gXHQkKHRoaXMpLmZpbmQoJy5tYXAnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHQvLyBcdCQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywgJyNGRkZGRkYnKTtcblx0Ly8gfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKXtcblxuXHQkKGZ1bmN0aW9uKCkge1xuXHQgICAgJCgnLmNvbC1lcS1oZWlnaHQnKS5tYXRjaEhlaWdodCh7YnlSb3c6IGZhbHNlfSk7XG5cdH0pO1xuXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKXtcblx0Ly8gTW9kaWZ5IHRoZSBVUkwgdG8gYWRkIHRoZSBuYW1lIG9mIHRoZSBtb2RhbFxuXG5cdCQoJy5tb2RhbC5mYWRlJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgJG1vZGFsVmlkZW8gPSAkKFwiI21vZGFsVmlkZW9cIik7XG5cdFx0dmFyIGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICBpZihjdXJyZW50VXJsLmluZGV4T2YoJ2JvZHlfcGFydCcpICE9PSAtMSl7XG4gICAgICAgICAgIHZhciBpbmRleCA9IGN1cnJlbnRVcmwubGFzdEluZGV4T2YoJyYnKTtcbiAgICAgICAgICAgY3VycmVudFVybCA9IGN1cnJlbnRVcmwuc3Vic3RyaW5nKGluZGV4LCAwKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICBcdGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50VXJsID09IFwiXCIpe1xuICAgICAgICBcdGN1cnJlbnRVcmwgPSAnLic7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkbW9kYWxWaWRlby5sZW5ndGgpe1xuICAgICAgICBcdHZhciB0aGVJZnJhbWUgPSAkbW9kYWxWaWRlby5maW5kKCdpZnJhbWUnKTtcbiAgICAgICAgXHR0aGVJZnJhbWUuYXR0cihcInNyY1wiLFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgY3VycmVudFVybCk7XG5cblx0fSk7XG5cblx0JCgnI21vZGFsVGVhbScpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0YWJMaXN0ID0gJCh0aGlzKS5maW5kKCcubmF2LXRhYnMnKS5maW5kKFwiYVtocmVmPScjaW5mbyddXCIpO1xuXHRcdHRhYkxpc3QuY2xpY2soKTtcblx0fSk7XG5cblxuXHQkKCdib2R5Jykub24oJ2hpZGRlbi5icy5tb2RhbCcsICcubW9kYWwnLCBmdW5jdGlvbiAoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICQodGhpcykucmVtb3ZlRGF0YSgnYnMubW9kYWwnKTtcblxuXHQgIC8vIGNsZWFyIHl0IHZpZGVvcyBhZnRlciBjbG9zZSBtb2RhbFxuXHQgICB2YXIgJGlmcmFtZXMgPSAkKGUudGFyZ2V0KS5maW5kKFwiaWZyYW1lXCIpO1xuXHQgICAgJGlmcmFtZXMuZWFjaChmdW5jdGlvbihpbmRleCwgaWZyYW1lKXtcblx0ICAgICAgJChpZnJhbWUpLmF0dHIoXCJzcmNcIiwgJChpZnJhbWUpLmF0dHIoXCJzcmNcIikpO1xuXHQgICAgfSk7XG5cblx0ICAgICQoJy5tb2RhbDp2aXNpYmxlJykubGVuZ3RoICYmICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ21vZGFsLW9wZW4nKTtcblxuXHR9KTtcblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXG5cdHZhciBvdmFscyA9IFtdO1xuXHRvdmFscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2lyY2xlLTAxXCIpKTtcblx0b3ZhbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpcmNsZS0wMlwiKSk7XG5cdG92YWxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXJjbGUtMDNcIikpO1xuXHR2YXIgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWJveFwiKTtcblxuXHRmb3IodmFyIGUgPSAwOyBlIDwgb3ZhbHMubGVuZ3RoOyBlKyspe1xuXHRcdG92YWxzW2VdLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25zdGFydFwiLCBjdXJyZW50LCBmYWxzZSk7XG5cdFx0b3ZhbHNbZV0uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBuZXh0T25lLCBmYWxzZSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDbGFzcygpe1xuXHRcdGZvcih2YXIgZSA9IDA7IGUgPCBvdmFscy5sZW5ndGg7IGUrKyl7XG5cdFx0XHRpZihvdmFsc1tlXS5vZmZzZXRQYXJlbnQpe1xuXHRcdFx0XHRvdmFsc1tlXS5vZmZzZXRQYXJlbnQuY2xhc3NOYW1lID0gXCJsdW1iYXItcGFpblwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGN1cnJlbnQoKXtcblx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdGNhc2UgXCJjaXJjbGUtMDFcIjpcblx0XHRcdFx0aW1hZ2UuY2xhc3NOYW1lID0gXCJpbWFnZS1jb250ZW50IG92YWwtMDFcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiY2lyY2xlLTAyXCI6XG5cdFx0XHRcdGltYWdlLmNsYXNzTmFtZSA9IFwiaW1hZ2UtY29udGVudCBvdmFsLTAyXCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNpcmNsZS0wM1wiOlxuXHRcdFx0XHRpbWFnZS5jbGFzc05hbWUgPSBcImltYWdlLWNvbnRlbnQgb3ZhbC0wM1wiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdC8vIHN0YXRlbWVudHNfZGVmXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG5leHRPbmUoKXtcblx0XHRyZW1vdmVDbGFzcygpO1xuXHRcdHN3aXRjaCAodGhpcy5pZCkge1xuXHRcdFx0Y2FzZSBcImNpcmNsZS0wMVwiOlxuXHRcdFx0XHRvdmFsc1sxXS5vZmZzZXRQYXJlbnQuY2xhc3NOYW1lICs9ICcgc2NhbGUtaW1hZ2UnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJjaXJjbGUtMDJcIjpcblx0XHRcdFx0b3ZhbHNbMl0ub2Zmc2V0UGFyZW50LmNsYXNzTmFtZSArPSAnIHNjYWxlLWltYWdlJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiY2lyY2xlLTAzXCI6XG5cdFx0XHRcdGltYWdlLmNsYXNzTmFtZSA9IFwiaW1hZ2UtY29udGVudFwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdC8vIHN0YXRlbWVudHNfZGVmXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vZmlyZWZveCBpc3N1ZVxuXHR2YXIgaXNfZmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcblx0aWYoaXNfZmlyZWZveCl7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0b3ZhbHNbMF0ub2Zmc2V0UGFyZW50LmNsYXNzTmFtZSArPSBcIiBzY2FsZS1pbWFnZVwiO1xuXHRcdH0sMTUwMCk7XG5cdH1lbHNle1xuXHRcdG92YWxzWzBdLm9mZnNldFBhcmVudC5jbGFzc05hbWUgKz0gXCIgc2NhbGUtaW1hZ2VcIjtcblx0fVxuXG59IiwidmFyIGluamVjdCA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICAgICAgaWYgKGhhc2ggIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgaWYoaGFzaC5pbmRleE9mKFwibT1cIikgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGFzaC5pbmRleE9mKFwidGhhbmsteW91LWNvbmZpcm1hdGlvblwiKSAhPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TW9kYWxUaGFua3MoaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IC9tPSguKykvO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpdGxlID0gaGFzaC5tYXRjaChmaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpdGxlID0gJC50cmltKGN1cnJlbnRUaXRsZVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGl0bGUgPSBjdXJyZW50VGl0bGUucmVwbGFjZSgvXFwlMjcvZywgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpdGxlID0gY3VycmVudFRpdGxlLnJlcGxhY2UoL1xcJWMyJWFlL2csICfCricpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpdGxlID0gY3VycmVudFRpdGxlLnJlcGxhY2UoL1teYS16QS1aMC05Ll0rL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaXRsZSA9IGN1cnJlbnRUaXRsZS5yZXBsYWNlKCcgJywgJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaXRsZSA9IGN1cnJlbnRUaXRsZS50b0xvd2VyQ2FzZSgpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWNhcmRzJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLmZpbmQoJ2gyJykudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSAkLnRyaW0odGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXmEtekEtWjAtOS5dKy9nLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCcgJywgJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRleHQgPT0gY3VycmVudFRpdGxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5tb2RhbC1hY3Rpb24nKS5lcSggMCApLnRyaWdnZXIoIFwiY2xpY2tcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ21vZGFsLXRlYW0nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2RhbFRlYW0nKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoJ21vZGFsLWRldGFpbCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21vZGFsRGV0YWlscycpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldE1vZGFsVGhhbmtzKHVybCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsVGl0bGUgPSBnZXRQYXJhbWV0ZXJCeU5hbWUoJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kYWxCb2R5ICA9IGdldFBhcmFtZXRlckJ5TmFtZSgnYm9keScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbFRoYW5rc0NvbmZpcm1hdGlvblwiKS5maW5kKCdoMScpLnRleHQobW9kYWxUaXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsVGhhbmtzQ29uZmlybWF0aW9uXCIpLmZpbmQoJ3AnKS50ZXh0KG1vZGFsQm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsVGhhbmtzQ29uZmlybWF0aW9uXCIpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSk7XG5cblxuICAgICQoZG9jdW1lbnQpLmFqYXhTdGFydChmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNtb2RhbERldGFpbHMgLm1vZGFsLWxvYWRlciwgI21vZGFsVGVhbSAubW9kYWwtbG9hZGVyXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNtb2RhbERldGFpbHMgLm1vZGFsLWRpYWxvZywgI21vZGFsVGVhbSAubW9kYWwtZGlhbG9nXCIpLmhpZGUoKTtcbiAgICB9KTtcblxuICAgICQoJy5jYXJkcycpLm9uKCAnY2xpY2snLCAnLm1vZGFsLWRldGFpbCAubW9kYWwtYWN0aW9uJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIC8vIGZ1bmN0aW9uIHRoYXQgY2FsbCBhamF4IG1vZGFsIGluZm9cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdmFyIGh0bWxIZWFkZXJJbmZvID0gJyc7XG4gICAgICAgIHZhciBodG1sSW1nID0gJyc7XG4gICAgICAgIHZhciBodG1sQm9keSA9ICcnO1xuICAgICAgICB2YXIgaHRtbEN1c3RvbUVtYmVkID0gJyc7XG4gICAgICAgIHZhciBodG1sRmlsZVVybCA9ICcnO1xuICAgICAgICB2YXIgaHRtbFJlbGF0ZWQgPSAnJztcbiAgICAgICAgdmFyIG5vZGVOdW1iZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbC1jYXJkcywgLndyYXAtaGVyby1kZXNjcmlwdGlvbicpLmZpbmQoJy5tb2RhbC1ub2RlJyk7XG4gICAgICAgIG5vZGVOdW1iZXIgPSBub2RlTnVtYmVyLmRhdGEoJ25vZGUnKTtcbiAgICAgICAgdmFyIGNhcmRNb2RhbENvbnRlbnQgPSBob3N0ICsgJy9jb250ZW50LXJlc3VsdCc7XG4gICAgICAgIHZhciBjYXJkTW9kYWxSZWxhdGVkID0gaG9zdCArICcvcmVsYXRlZC1jb250ZW50JztcbiAgICAgICAgdmFyIHRoZU1vZGFsID0gJCgkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKTtcblxuICAgICAgICAkLndoZW4oYWpheCgpLCBhamF4MSgpKS5kb25lKGZ1bmN0aW9uKGRhdGEsIGRhdGExKXtcbiAgICAgICAgICAgICQoXCIjbW9kYWxEZXRhaWxzIC5tb2RhbC1sb2FkZXIsICNtb2RhbFRlYW0gLm1vZGFsLWxvYWRlclwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI21vZGFsRGV0YWlscyAubW9kYWwtZGlhbG9nLCAjbW9kYWxUZWFtIC5tb2RhbC1kaWFsb2dcIikuc2hvdygpO1xuICAgICAgICAgICAgbW9kYWxJbmZvKGRhdGEpO1xuICAgICAgICAgICAgbW9kYWxSZWxhdGVkKGRhdGExKTtcbiAgICAgICAgICAgIC8vIHJlc2V0IG1vZGFsIHNjcm9sbFxuICAgICAgICAgICAgJCgnLmxlZnRjb2wnKS5zY3JvbGxUb3AoMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1vZGFsSW5mbyhkYXRhKXtcbiAgICAgICAgICAgIGlmIChkYXRhWzBdLm5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IGRhdGFbMF0ubm9kZXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBrZXlzXG5cbiAgICAgICAgICAgICAgICAgICAgaHRtbEhlYWRlckluZm8gKz0gJzxoMiBjbGFzcz1cImRldGFpbC1tb2RhbC1oZWFkZXJcIj4nICsgaXRlbS5ub2RlLnRpdGxlICsgJzwvaDI+JztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5ub2RlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sSW1nICs9ICc8aW1nIHNyYz1cIicgKyBpdGVtLm5vZGUuaW1hZ2Uuc3JjICsgJ1wiIGFsdD1cIicgKyBpdGVtLm5vZGUuaW1hZ2UuYWx0ICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLWNvbnRlbnRcIikucmVtb3ZlQ2xhc3MoJ25vLWZyYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5tb2RhbC1jb250ZW50XCIpLmFkZENsYXNzKCduby1mcmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubm9kZS5jdXN0b21fc2NyaXB0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEN1c3RvbUVtYmVkICs9IGl0ZW0ubm9kZS5jdXN0b21fc2NyaXB0cztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGh0bWxCb2R5ICs9IGl0ZW0ubm9kZS5ib2R5O1xuXG4gICAgICAgICAgICAgICAgICAgIGluamVjdC5pbmplY3RVcmwoaXRlbS5ub2RlLnRpdGxlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5ub2RlLmZpbGVfdXJsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGaWxlVXJsICs9ICc8YSBocmVmPVwiJyArIGl0ZW0ubm9kZS5maWxlX3VybCArICdcIiBjbGFzcz1cImxpbmstZG93bmxvYWRcIiBkb3dubG9hZD48aSBjbGFzcz1cIiBmYSBmYS1maWxlLXRleHQtb1wiPjwvaT4gRG93bmxvYWQ8L2E+J1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgZGF0YSB0byBtb2RhbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIHRoZU1vZGFsLmZpbmQoJy5tb2RhbC1oZWFkZXInKS5odG1sKGh0bWxIZWFkZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtaW1nJykuaHRtbChodG1sSW1nKTtcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtaW5mbycpLmh0bWwoaHRtbEJvZHkpLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBJZnJhbWVCb3ggPSAkKCcubW9kYWwtaW5mbycpLmZpbmQoJ2lmcmFtZScpLnBhcmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZighSWZyYW1lQm94Lmhhc0NsYXNzKCdtZWRpYV9lbWJlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIElmcmFtZUJveC5hZGRDbGFzcygnbWVkaWFfZW1iZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5jdXN0b20tZW1iZWQnKS5odG1sKGh0bWxDdXN0b21FbWJlZCk7XG4gICAgICAgICAgICAgICAgJCgnLmRvd24taWNvbicpLmh0bWwoaHRtbEZpbGVVcmwpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb2RhbFJlbGF0ZWQoZGF0YTEpe1xuXG4gICAgICAgICAgICBpZiAoZGF0YTFbMF0ubm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gZGF0YTFbMF0ubm9kZXM7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubm9kZS50cmVhdG1lbnRfdGl0bGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxSZWxhdGVkID0gJzxwPjxzdHJvbmc+UmVsYXRlZCBDb250ZW50czo8L3N0cm9uZz48L3A+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICBodG1sUmVsYXRlZCArPSAnPGEgaHJlZj1cIicgKyBpdGVtLm5vZGUudHJlYXRtZW50X3VybCArICdcIiBjbGFzcz1cInJlZmVyZW5jZVwiPicgKyBpdGVtLm5vZGUudHJlYXRtZW50X3RpdGxlICsgJzwvYT4nO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5ub2RlLmFydGljbGVfdGl0bGUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFJlbGF0ZWQgPSAnPHA+PHN0cm9uZz5SZWxhdGVkIENvbnRlbnRzOjwvc3Ryb25nPjwvcD4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxSZWxhdGVkICs9ICc8YSBocmVmPVwiJyArIGl0ZW0ubm9kZS5hcnRpY2xlX3VybCArICdcIiBjbGFzcz1cInJlZmVyZW5jZVwiPicgKyBpdGVtLm5vZGUuYXJ0aWNsZV90aXRsZSArICc8L2E+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCgnLnJlZmVyZW5jZXMnKS5odG1sKGh0bWxSZWxhdGVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWpheCgpIHtcblxuICAgICAgICAgICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBjYXJkTW9kYWxDb250ZW50LFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICBkYXRhOiAge1xuICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlTnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFqYXgxKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGNhcmRNb2RhbFJlbGF0ZWQsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIGRhdGE6ICB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVOdW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuIiwidmFyIGluamVjdCA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBmdW5jdGlvbiB0aGF0IGNhbGwgYWpheCBtb2RhbCBpbmZvXG5cbiAgICAkKCcubW9kYWwtdGVhbSAubW9kYWwtYWN0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB2YXIgaHRtbEhlYWRlckluZm8gPSAnJztcbiAgICAgICAgdmFyIGh0bWxJbWcgPSAnJztcbiAgICAgICAgdmFyIGh0bWxDZXJ0aWZpY2F0aW9ucyA9ICcnO1xuICAgICAgICB2YXIgaHRtbExvY2F0aW9ucyA9ICcnO1xuICAgICAgICB2YXIgaHRtbExpbmtzVGFiID0gJyc7XG4gICAgICAgIHZhciBodG1sTmFtZSA9ICcnO1xuICAgICAgICB2YXIgbm9kZU51bWJlciA9ICQodGhpcykuY2xvc2VzdCgnLm1vZGFsLWNhcmRzJykuZmluZCgnLm1vZGFsLW5vZGUnKTtcbiAgICAgICAgbm9kZU51bWJlciA9IG5vZGVOdW1iZXIuZGF0YSgnbm9kZScpO1xuICAgICAgICB2YXIgY2FyZFhIUiA9IGhvc3QgKyAnL3N0YWZmLXJlc3VsdHMnO1xuXG4gICAgICAgIC8vIGFqYXggcmVxdWVzdFxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGNhcmRYSFIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVOdW1iZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJChcIiNtb2RhbERldGFpbHMgLm1vZGFsLWxvYWRlciwgI21vZGFsVGVhbSAubW9kYWwtbG9hZGVyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKFwiI21vZGFsRGV0YWlscyAubW9kYWwtZGlhbG9nLCAjbW9kYWxUZWFtIC5tb2RhbC1kaWFsb2dcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBkYXRhLm5vZGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldENlcnRpZmljYXRpb24oZGF0YSA9ICcnLCB0aXRsZSA9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxDZXJ0aWZpY2F0aW9ucyArPSAnPGg1PicrdGl0bGUrJzwvaDU+JyArIGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA9PSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ubm9kZS5uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbE5hbWUgKz0gJ0dldCBzb2NpYWwsIHNoYXJlICcgKyBpdGVtLm5vZGUubmFtZSArICcsICcgKyBpdGVtLm5vZGUuZGVncmVlKyAnLCBpbmZvcm1hdGlvbiB0aHJvdWdoOidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5ub2RlLnBob3RvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxJbWcgKz0gJzxpbWcgc3JjPVwiJyArIGl0ZW0ubm9kZS5waG90by5zcmMgKyAnXCIgYWx0PVwiJyArIGl0ZW0ubm9kZS5waG90by5hbHQgKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5ub2RlLnNwZWNpYWxpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEhlYWRlckluZm8gKz0gJzxoND4nICsgaXRlbS5ub2RlLnNwZWNpYWxpdHkgKyAnPC9oND48aDIgY2xhc3M9XCJuYW1lXCI+JyArIGl0ZW0ubm9kZS5uYW1lICsgJzwvaDI+PGgzPicgKyBpdGVtLm5vZGUuZGVncmVlICsgJzwvaDM+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0LmluamVjdFVybChpdGVtLm5vZGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlcnRpZmljYXRpb25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTppdGVtLm5vZGUubWVkaWNhbF9zY2hvb2wsIHRpdGxlOlwiTWVkaWNhbCBTY2hvb2xcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhOml0ZW0ubm9kZS5pbnRlcm5zaGlwLCB0aXRsZTpcIkludGVybnNoaXBcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhOml0ZW0ubm9kZS5yZXNpZGVuY3ksIHRpdGxlOlwiUmVzaWRlbmN5XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTppdGVtLm5vZGUuZmVsbG93c2hpcCwgdGl0bGU6XCJGZWxsb3dzaGlwXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTppdGVtLm5vZGUuYm9hcmRfY2VydGlmaWNhdGlvbiwgdGl0bGU6XCJCb2FyZCBDZXJ0aWZpY2F0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGNlcnRpZmljYXRpb25zLCBmdW5jdGlvbihpbmRleCxlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW0uZGF0YSAmJiBlbGVtLmRhdGEgIT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENlcnRpZmljYXRpb24oZWxlbS5kYXRhLCBlbGVtLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG90aGVySW5mbyA9IGV2YWwoaXRlbS5ub2RlLm90aGVyX2luZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3RoZXJJbmZvICYmIG90aGVySW5mby5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBlID0gMDsgZSA8IG90aGVySW5mby5sZW5ndGg7IGUrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDZXJ0aWZpY2F0aW9uKG90aGVySW5mb1tlXS50ZXh0LCBvdGhlckluZm9bZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ubm9kZS5maWVsZF9saW5rcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5rcyA9IGl0ZW0ubm9kZS5maWVsZF9saW5rcy5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGVMaW5rcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gobGlua3MsIGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGVTdHJpbmcgPSBlbGVtLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhlU3RyaW5nICE9IFwiXCIgJiYgdGhlU3RyaW5nICE9IFwiLFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlJbmRleCA9IHRoZVN0cmluZy5pbmRleE9mKCdUaXRsZTonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbEluZGV4ID0gdGhlU3RyaW5nLmluZGV4T2YoJ0xpbms6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRJbmRleCA9IHRoZVN0cmluZy5pbmRleE9mKCdUYXJnZXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpSW5kZXggIT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpdGxlID0gdGhlU3RyaW5nLnN1YnN0cmluZygodGlJbmRleCArICgnVGl0bGU6Jm5ic3A7Jy5sZW5ndGgpKSwgbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZXMucHVzaChjdXJyZW50VGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodEluZGV4ICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRMaW5rID0gdGhlU3RyaW5nLnN1YnN0cmluZygobEluZGV4ICsgKCdMaW5rOiZuYnNwOycubGVuZ3RoKSksIHRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5rID0gdGhlU3RyaW5nLnN1YnN0cmluZygobEluZGV4ICsgKCdMaW5rOiZuYnNwOycubGVuZ3RoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZUxpbmtzLnB1c2goY3VycmVudExpbmspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2godGl0bGVzLCBmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCAhPSBcIlwiICYmIChlbC5pbmRleE9mKCcmbmJzcDsnKSA9PSAtMSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxMaW5rc1RhYiArPSAnPGEgY2xhc3M9XCJsaW5rXCIgaHJlZj1cIicrdGhlTGlua3NbaW5kZXhdKydcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgZWwgKyc8L2E+JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhlTGlua3NbaW5kZXhdICE9ICcjJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxMaW5rc1RhYiArPSAnPGEgY2xhc3M9XCJsaW5rXCIgaHJlZj1cIicrdGhlTGlua3NbaW5kZXhdKydcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nK3RoZUxpbmtzW2luZGV4XSsnPC9hPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxMaW5rc1RhYiA9ICc8cCBjbGFzcz1cIm5vLWxpbmtzXCI+Tm8gbGlua3MgcHJvdmlkZWQ8L3A+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2gga2V5c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5ub2RlLmxvY2F0aW9uX2NpdHkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxMb2NhdGlvbnMgKz0gJzxkaXYgY2xhc3M9XCJkaXJlY3Rpb25cIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ubm9kZS5sb2NhdGlvbl9jaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbExvY2F0aW9ucyArPSAnPHA+JyArIGl0ZW0ubm9kZS5sb2NhdGlvbl9jaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm5vZGUubG9jYXRpb25fdHlwZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sTG9jYXRpb25zICs9ICcgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxvY2F0aW9uXCI+JyArIGl0ZW0ubm9kZS5sb2NhdGlvbl90eXBlICsgJzwvYT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxMb2NhdGlvbnMgKz0gJzwvcD4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm5vZGUubG9jYXRpb25fc3RyZWV0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbExvY2F0aW9ucyArPSAnPHAgY2xhc3M9XCJhZGRyZXNzXCI+JyArIGl0ZW0ubm9kZS5sb2NhdGlvbl9zdHJlZXQgKyAnPC9wPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ubm9kZS5sb2NhdGlvbl9jaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbExvY2F0aW9ucys9ICc8cCBjbGFzcz1cImFkZHJlc3NcIj4nICsgaXRlbS5ub2RlLmxvY2F0aW9uX2NpdHkgKyAnLCBHQSAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm5vZGUubG9jYXRpb25fcG9zdGFsX2NvZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbExvY2F0aW9ucyArPSBpdGVtLm5vZGUubG9jYXRpb25fcG9zdGFsX2NvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbExvY2F0aW9ucyArPSAnPC9wPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ubm9kZS5sb2NhdGlvbl90eXBlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbExvY2F0aW9ucyArPSAnPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcz9zYWRkcj1NeStMb2NhdGlvbiZkYWRkcj0nICsgaXRlbS5ub2RlLmxvY2F0aW9uX3R5cGUgKyAnLCcgKyBpdGVtLm5vZGUubG9jYXRpb25fc3RyZWV0ICsgJywnICsgaXRlbS5ub2RlLmxvY2F0aW9uX3Bvc3RhbF9jb2RlICsgJywnICsgaXRlbS5ub2RlLmxvY2F0aW9uX3Byb3ZpbmNlICsgJywnICsgaXRlbS5ub2RlLmxvY2F0aW9uX2NvdW50cnkgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJtYXAgdGV4dC1jZW50ZXJcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI3LjJcIiBoZWlnaHQ9XCIyNy4yXCIgdmlld0JveD1cIjExMC40IDEwNi40IDY3LjIgNjcuMlwiPjxwYXRoIGZpbGw9XCIjNTA4RkJCXCIgZD1cIk0xMTAuNCAxNDBjMCAxOC42IDE1IDMzLjYgMzMuNiAzMy42czMzLjYtMTUgMzMuNi0zMy42LTE1LTMzLjYtMzMuNi0zMy42LTMzLjYgMTUtMzMuNiAzMy42em01OS45IDBjMCAxNC41LTExLjggMjYuMy0yNi4zIDI2LjNzLTI2LjMtMTEuOC0yNi4zLTI2LjMgMTEuOC0yNi4zIDI2LjMtMjYuMyAyNi4zIDExLjggMjYuMyAyNi4zem0tNDAuNC02LjZ2MTMuMWgxNC45djguMmwxMy45LTE0LjgtMTMuOS0xNC44djguMmgtMTQuOXpcIi8+PC9zdmc+RGlyZWN0aW9uczwvYT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm5vZGUubG9jYXRpb25fcGhvbmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sTG9jYXRpb25zICs9ICc8cCBjbGFzcz1cInBob25lLW51bWJlclwiPlBob25lOiAnICsgaXRlbS5ub2RlLmxvY2F0aW9uX3Bob25lICsgJzwvcD4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sTG9jYXRpb25zICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgZGF0YSB0byBtb2RhbCB0ZW1wbGF0ZVxuXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1pbWcnKS5odG1sKGh0bWxJbWcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubWFpbi1oZWFkZXItaW5mbycpLmh0bWwoaHRtbEhlYWRlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICAkKCcuY2VydGlmaWNhdGlvbnMtaW5mbycpLmh0bWwoaHRtbENlcnRpZmljYXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmxvY2F0aW9ucy10YWInKS5odG1sKGh0bWxMb2NhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubGlua3MtdGFiJykuaHRtbChodG1sTGlua3NUYWIpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjc2hhcmUgLnNoYXJlLWluZm8nKS50ZXh0KGh0bWxOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcblxuXHRmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kKGVsLCBjb2xvcil7XG5cdCAgICBpZihjb2xvcil7XG5cdCAgICAgICAgZWwuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xuXHQgICAgfVxuXHR9XG5cblx0dmFyICRzaWRlYmFyIFx0XHQ9ICQoJy5wdXJlLW9oLW0tc2lkZWJhcicpO1xuXHR2YXIgc0hlYWRlciBcdFx0PSAkc2lkZWJhci5maW5kKCcuaGVhZGVyJyk7XG5cdHZhciBzUmliYm9uIFx0XHQ9ICRzaWRlYmFyLmZpbmQoJy5yaWJib24nKTtcblx0dmFyIHNSaWJib25BZnRlciBcdD0gJHNpZGViYXIuZmluZCgnLnJpYmJvbicpO1xuXHR2YXIgaENvbG9yICBcdFx0PSBzSGVhZGVyLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuXG5cdGNoYW5nZUJhY2tncm91bmQoc0hlYWRlciwgaENvbG9yKTtcblx0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXHRmdW5jdGlvbiBjbGVhcihtb2RhbCl7XG5cdFx0JChtb2RhbClcbiAgICBcdFx0LmZpbmQoXCJpbnB1dCx0ZXh0YXJlYSxzZWxlY3RcIilcbiAgICAgICBcdFx0XHQucmVtb3ZlQ2xhc3MoJ2Vycm9yLWZpZWxkJylcbiAgICAgICBcdFx0XHQuZW5kKClcblx0ICAgIFx0LmZpbmQoXCJpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb11cIilcblx0ICAgICAgIFx0XHQucHJvcChcImNoZWNrZWRcIiwgXCJcIilcblx0ICAgICAgIFx0XHQuZW5kKClcblx0ICAgICAgIFx0LmZpbmQoJy5lcnJvci1kZXRhaWxzJylcblx0ICAgICAgIFx0XHQuY2hpbGRyZW4oJ3AnKS5yZW1vdmUoKVxuXHQgICAgICAgXHRcdC5lbmQoKTtcblx0fTtcblxuXHQkKCcjbW9kYWxSZXF1ZXN0QXBwb2ludG1lbnQnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgXHRcdGNsZWFyKCQodGhpcykpO1xuXHR9KTtcblx0JCgnI21vZGFsQ29udGFjdCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICBcdFx0Y2xlYXIoJCh0aGlzKSk7XG5cdH0pO1xuXHQkKCcjbW9kYWxUZWFtJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gIFx0XHRjbGVhcigkKHRoaXMpKTtcblx0fSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXHQkLnZhbGlkYXRlKCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuLy8gbWFwIHN0eWxlc1xuXG4gICAgdmFyIHN0eWxlcyA9IFt7XG4gICAgICAgIHN0eWxlcnM6IFt7XG4gICAgICAgICAgICBodWU6IFwiI0YzRjhGQlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNhdHVyYXRpb246IC0xMFxuICAgICAgICB9XVxuICAgIH0sIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgIHN0eWxlcnM6IFt7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzOiAxMDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTc4RUJBXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgICAgICAgfSxcblxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxuICAgICAgICBzdHlsZXJzOiBbe1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzczogMTAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI0QxRTJFRlwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJzaW1wbGlmaWVkXCJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHNcIixcbiAgICAgICAgc3R5bGVyczogW3tcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwib2ZmXCJcbiAgICAgICAgfV1cbiAgICB9XTtcblxuICAgIHZhciBtYXA7XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWRkIG1hcmtlcnMgdG8gdGhlIG1hcCBmcm9tIC5qc29uXG5cbiAgICBmdW5jdGlvbiBsb2FkUmVzdWx0cyhkYXRhKSB7XG4gICAgICAgIHZhciBpdGVtcywgbWFya2Vyc19kYXRhID0gW107XG4gICAgICAgIHZhciBsb2NhdGlvbnNIdG1sID0gJyc7XG4gICAgICAgIGlmIChkYXRhLm5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGl0ZW1zID0gZGF0YS5ub2RlcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5vZGUubGF0aXR1ZGUgIT0gdW5kZWZpbmVkICYmIGl0ZW0ubm9kZS5sb25naXR1ZGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiTTEyLjQ4MzMzMiwwLjk2NTkxN2MtNi40MDcxODYsMCAtMTEuNjgzNjg5LDUuMTgyMjgxIC0xMS42ODM2ODksMTEuNTg5NDY2czkuNjEwNzc3LDE5LjUwNDIzMyAxMS42ODM2ODksMTkuNTA0MjMzczExLjY4MzY5MSwtMTMuMTkxMjcxIDExLjY4MzY5MSwtMTkuNTA0MjMzYzAsLTYuNDA3MTg1IC01LjI3NjUwNSwtMTEuNTg5NDY2IC0xMS42ODM2OTEsLTExLjU4OTQ2NnptMCwxOC4wOTA4NzNjLTMuNzY4OTI5LDAgLTYuNzg0MDc4LC0zLjAxNTEzNyAtNi43ODQwNzgsLTYuNzg0MDdzMy4wMTUxNDksLTYuNzg0MDg1IDYuNzg0MDc4LC02Ljc4NDA4NXM2Ljc4NDA4MSwzLjAxNTE1MSA2Ljc4NDA4MSw2Ljc4NDA4NWMwLjA5NDIyNSwzLjY3NDcxMiAtMy4wMTUxNDQsNi43ODQwNyAtNi43ODQwODEsNi43ODQwN3pcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyMxRTQxNjYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICcjMUU0MTY2J1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNfZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogaXRlbS5ub2RlLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBpdGVtLm5vZGUubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubm9kZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9XaW5kb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGRpdj4nICsgaXRlbS5ub2RlLmxvY2F0aW9uX3R5cGUgKyAnPGRpdiBjbGFzcz1cInZjYXJkXCIgaXRlbXNjb3BlPVwiXCIgaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Qb3N0YWxBZGRyZXNzXCI+PGRpdiBjbGFzcz1cImFkciBzdHJlZXQtYWRkcmVzc1wiPjxzcGFuIGl0ZW1wcm9wPVwic3RyZWV0QWRkcmVzc1wiPicgKyBpdGVtLm5vZGUuc3RyZWV0ICsgJzwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVwibG9jYXRpb25cIj48c3Bhbj4nICsgaXRlbS5ub2RlLnByb3ZpbmNlICsgJzwvc3Bhbj48YnI+PHNwYW4+JyArIGl0ZW0ubm9kZS5jaXR5ICsgJywgJyArIGl0ZW0ubm9kZS5wb3N0YWxfY29kZSArICc8L3NwYW4+PC9icj48c3Bhbj4gJyArIGl0ZW0ubm9kZS5kZXNjcmlwdGlvbiArICc8L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogaWNvbnNcblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVzIHRlbXBsYXRlIGZvciBhY2NvcmRpb25cblxuICAgICAgICAgICAgICAgIGxvY2F0aW9uc0h0bWwgKz0gJzxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+PGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIiBkYXRhLW1hcmtlci1pbmRleD1cIicgKyBpICsgJ1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIiBocmVmPVwiI2NvbGxhcHNlJyArIGkgKyAnXCIgaWQ9XCJoZWFkaW5nJyArIGkgKyAnXCI+PGRpdiBjbGFzcz1cInBhbmVsLXRpdGxlXCI+PGRpdiBjbGFzcz1cImluZm8tYm94XCI+PHAgY2xhc3M9XCJsb2NhdGlvbi10eXBlXCI+JyArIGl0ZW0ubm9kZS5sb2NhdGlvbl90eXBlICsgJzwvcD48YSBjbGFzcz1cImxvY2F0aW9uLXRpdGxlIHBhbi10by1tYXJrZXJcIiBkYXRhLW1hcmtlci1pbmRleD1cIicgKyBpICsgJ1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCIgaHJlZj1cIiNjb2xsYXBzZScgKyBpICsgJ1wiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlJyArIGkgKyAnXCI+JyArIGl0ZW0ubm9kZS50aXRsZSArICc8L2E+PC9kaXY+PGRpdiBjbGFzcz1cImljb24tYm94XCI+PGEgY2xhc3M9XCJwdWxsLXJpZ2h0IHJpZ2h0LWljb24gY29sbGFwc2VkIHBhbi10by1tYXJrZXJcIiBkYXRhLW1hcmtlci1pbmRleD1cIicgKyBpICsgJ1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCIgaHJlZj1cIiNjb2xsYXBzZScgKyBpICsgJ1wiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlJyArIGkgKyAnXCI+PHN2ZyBjbGFzcz1cInJpZ2h0LWljby1hcnJvd1wiPjx1c2UgeGxpbms6aHJlZj1cIiNyaWdodF9pY29cIj48L3VzZT48L3N2Zz48L2E+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBpZD1cImNvbGxhcHNlJyArIGkgKyAnXCIgY2xhc3M9XCJwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmcnICsgaSArICdcIj48ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPjxkaXYgY2xhc3M9XCJyb3dcIj48ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiIGhyZWY9XCIjY29sbGFwc2UnICsgaSArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm5vZGUuaW1hZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zSHRtbCs9ICc8aW1nIHNyYz1cIicgKyBpdGVtLm5vZGUuaW1hZ2Uuc3JjICsgJ1wiIGFsdD1cIlwiPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbnNIdG1sKz0nPGRpdiBjbGFzcz1cImNhcHRpb24gdmNhcmRcIiBpdGVtc2NvcGU9XCJcIiBpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1Bvc3RhbEFkZHJlc3NcIj48ZGl2IGNsYXNzPVwiYWRyIHN0cmVldC1hZGRyZXNzXCI+PHNwYW4gaXRlbXByb3A9XCJzdHJlZXRBZGRyZXNzXCI+JyArIGl0ZW0ubm9kZS5zdHJlZXQgKyAnPC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPjxzcGFuPicgKyBpdGVtLm5vZGUuY2l0eSArICcsICcgKyBpdGVtLm5vZGUucHJvdmluY2UgKyAnICcrIGl0ZW0ubm9kZS5wb3N0YWxfY29kZSArJzwvc3Bhbj48c3Bhbj4gJyArIGl0ZW0ubm9kZS5kZXNjcmlwdGlvbiArICc8L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImluZm8tYnV0dG9uc1wiPjxhIGhyZWY9dGVsOicgKyBpdGVtLm5vZGUucGhvbmUgKyAnIGNsYXNzPVwicGhvbmUtbnVtYmVyXCIgcm9sZT1cImJ1dHRvblwiPjxzcGFuPjxzdmcgY2xhc3M9XCJyaWdodC1kb3duLWljb1wiPjx1c2UgeGxpbms6aHJlZj1cIiNwaG5fc2xhbnRfaWNvXCI+PC91c2U+PC9zdmc+PC9zcGFuPkNhbGw8L2E+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcz9zYWRkcj1NeStMb2NhdGlvbiZkYWRkcj0nICsgaXRlbS5ub2RlLnN0cmVldCArICcsJyArIGl0ZW0ubm9kZS5wb3N0YWxfY29kZSArICcgJyArIGl0ZW0ubm9kZS5wcm92aW5jZSArICcsJyArIGl0ZW0ubm9kZS5jb3VudHJ5ICsnIFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZ2V0LWRpcmVjdGlvblwiIHJvbGU9XCJidXR0b25cIj48c3Bhbj48c3ZnIGNsYXNzPVwicmlnaHQtZG93bi1pY29cIj48dXNlIHhsaW5rOmhyZWY9XCIjbWFwX2ZvbGRfaWNvXCI+PC91c2U+PC9zdmc+PC9zcGFuPkRJUkVDVElPTlM8L2E+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy5wdXJlLW9oLW0tYWNjb3JkaW9uLWxvY2F0aW9ucycpLmFwcGVuZChsb2NhdGlvbnNIdG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcC5hZGRNYXJrZXJzKG1hcmtlcnNfZGF0YSk7XG4gICAgfVxuXG4vLyBQYW4gdG8gdGhlIHNlbGVjdGVkIG1hcmtlciBvbiB0aGUgbWFwXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnBhbi10by1tYXJrZXIsIC5wYW5lbC1oZWFkaW5nJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uLCBsYXQsIGxuZywgJGluZGV4O1xuXG4gICAgICAgICRpbmRleCA9ICQodGhpcykuZGF0YSgnbWFya2VyLWluZGV4Jyk7XG5cbiAgICAgICAgcG9zaXRpb24gPSBtYXAubWFya2Vyc1skaW5kZXhdLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgbGF0ID0gcG9zaXRpb24ubGF0KCk7XG4gICAgICAgIGxuZyA9IHBvc2l0aW9uLmxuZygpO1xuXG4gICAgICAgIG1hcC5zZXRDZW50ZXIobGF0LCBsbmcpO1xuICAgICAgICBtYXAuc2V0Wm9vbSgxOCk7XG4gICAgfSk7XG5cbi8vIEFkZCBtYXBcblxuICAgIG1hcCA9IG5ldyBHTWFwcyh7XG4gICAgICAgIGVsOiAnI21hcCcsXG4gICAgICAgIGxhdDogMzIuNDI1Mzg0LFxuICAgICAgICBsbmc6IC04MS45MzkzNjgsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5URVJSQUlOXG4gICAgfSk7XG5cbiAgICBtYXAub24oJ21hcmtlcl9hZGRlZCcsIGZ1bmN0aW9uKG1hcmtlcikge1xuICAgICAgICB2YXIgaW5kZXggPSBtYXAubWFya2Vycy5pbmRleE9mKG1hcmtlcik7XG4gICAgICAgIGlmIChpbmRleCA9PSBtYXAubWFya2Vycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBtYXAuZml0Wm9vbSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgeGhyID0gJC5nZXRKU09OKCBob3N0ICsgXCIvbG9jYXRpb25zLXJlc3VsdHM/bmFtZT1cIik7XG5cbiAgICB4aHIuZG9uZShsb2FkUmVzdWx0cyk7XG5cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCQoJy5jYXJkcy1sb2FkLW1vcmUnKS5sZW5ndGgpe1xuICAgICAgICB2YXIgc3RhcnQgPSAxO1xuICAgICAgICB2YXIgbWluX2VsZW1lbnRzID0gJCgnLmNhcmRzIC5yb3ctZXEtaGVpZ2h0IC5jYXJkLWl0ZW0nKS5sZW5ndGg7XG4gICAgICAgIHZhciBmaXJzdF92YWxpZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVsZW1lbnRzO1xuICAgICAgICB2YXIgdG9nZ2xlID0gZmFsc2U7XG4gICAgICAgICQoJy5sb2FkLW1vcmUtbWFpbicpLmhpZGUoKTtcbiAgICAgICAgcGFnaW5hdGlvbl90b2dnbGUoc3RhcnQsIHRvZ2dsZSk7XG4gICAgICAgICQoJy5jYXJkcycpLm9uKCdjbGljaycsJy5sb2FkLW1vcmUtbWFpbicsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcubG9hZC1tb3JlLXNwaW5uZXInKTtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gbG9hZF9lbGVtZW50cyhzdGFydCk7XG4gICAgICAgICAgICBlbGVtZW50cyA9ICQoZWxlbWVudHMpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAkKGVsZW1lbnRzKS5hcHBlbmRUbygnLmNhcmRzLWxvYWQtbW9yZSAucm93LWVxLWhlaWdodCAucm93JykuaGlkZSgpLmZhZGVJbigzMDApO1xuICAgICAgICAgICAgJCgnLmNvbC1lcS1oZWlnaHQnKS5tYXRjaEhlaWdodCh7YnlSb3c6IGZhbHNlfSk7XG4gICAgICAgICAgICBpZigkKGVsZW1lbnRzKS5maW5kKCcucHVyZS1vaC1tLWNhcmRzJykubGVuZ3RoID09IG1pbl9lbGVtZW50cyl7XG4gICAgICAgICAgICAgICAgc3RhcnQrKztcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICQoJyNsb2FkLW1vcmUtYnV0dG9uJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLmxvYWQtbW9yZS1zcGlubmVyJykuaGlkZSgpO1xuXG4gICAgICAgICAgICBwYWdpbmF0aW9uX3RvZ2dsZShzdGFydCwgdG9nZ2xlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoZmlyc3RfdmFsaWRhdGlvbil7XG4gICAgICAgICAgICBmaXJzdF92YWxpZGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBlbGVtZW50cyA9IGxvYWRfZWxlbWVudHMoc3RhcnQpO1xuICAgICAgICAgICAgaWYoJChlbGVtZW50cykuZmluZCgnLmNhcmQtaXRlbScpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICQoJyNsb2FkLW1vcmUtYnV0dG9uJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFnaW5hdGlvbl90b2dnbGUoc3RhcnQsIHRvZ2dsZSkge1xuICAgICAgICBpZiAoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBsb2FkX2VsZW1lbnRzKCBzdGFydCApO1xuXG4gICAgICAgICAgICBpZiAoICQoZWxlbWVudHMpLmZpbmQoICcucHVyZS1vaC1tLWNhcmRzJyApLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLmxvYWQtbW9yZS1tYWluJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcubG9hZC1tb3JlLW1haW4nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkX2VsZW1lbnRzKHN0YXJ0KXtcblxuICAgICAgICAkLmV4dGVuZCh7XG4gICAgICAgICAgICB4UmVzcG9uc2U6IGZ1bmN0aW9uKHVybCwgZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsIHZhclxuICAgICAgICAgICAgICAgIHZhciB0aGVSZXNwb25zZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5IGFqYXhcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImh0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlUmVzcG9uc2UgPSByZXNwVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgcmVzcG9uc2UgdGV4dFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGVSZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHhEYXRhID0gJC54UmVzcG9uc2UoZG9jdW1lbnQuVVJMKyc/cGFnZT0nK3N0YXJ0LCB7aXNzZXNzaW9uOiAxLHNlbGVjdG9yOiB0cnVlfSk7XG5cbiAgICAgICAgcmV0dXJuICQoeERhdGEpLmZpbmQoJy5jYXJkcyAucm93LWVxLWhlaWdodCcpLmh0bWwoKTtcblxuICAgIH1cbn0iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG5cdCQoJy5wdXJlLW9oLW0tYWNjb3JkaW9uLWxvY2F0aW9ucycpLnNsaW1TY3JvbGwoe1xuXHQgICAgaGVpZ2h0OiAnNjAwcHgnLFxuXHQgICAgcmFpbFZpc2libGU6IHRydWUsXG5cdCAgICBhbHdheXNWaXNpYmxlOiB0cnVlXG5cdH0pO1xuXG5cdGlmICh1dGlscy5tc2lldmVyc2lvbigpKXtcblx0XHQkKCcuc2lkZWJhcicpLnNsaW1TY3JvbGwoe1xuXHRcdCAgICBoZWlnaHQ6ICdhdXRvJyxcblx0XHQgICAgcmFpbFZpc2libGU6IHRydWUsXG5cdFx0ICAgIGFsd2F5c1Zpc2libGU6IHRydWUsXG5cdFx0ICAgIGRpc3RhbmNlOiAnMnB4J1xuXHRcdH0pO1xuXHR9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAgICQoJyNsb2NhbC1zZWFyY2gnKS5vbigna2V5dXAga2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBjb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG4gICAgICAgIGlmIChjb2RlID09IDEzKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbFRoaXMgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBzaG93SXRlbSA9ICQodGhpcykuZGF0YSgnc2hvdy1lbGVtZW50Jyk7XG4gICAgICAgICAgICBpZiAodmFsVGhpcyA9PT0gXCJcIikge1xuICAgICAgICAgICAgJCgnLicrc2hvd0l0ZW0pLnBhcmVudCgpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy4nK3Nob3dJdGVtKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS5maW5kKCcucGFuZWwtYm9keScpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHRleHQgPSAkLnRyaW0odGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLFwiXCIpKTtcbiAgICAgICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHZhbFRoaXMpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2hvdygyMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuaGlkZSgyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAgICQoJyNzZWFyY2gtbG9jYXRpb25zJykub24oJ2tleXVwIGtleXByZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgY29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xuICAgICAgICBpZiAoY29kZSA9PSAxMykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWxUaGlzID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHZhbFRoaXMgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICQoJ2Rpdi5wYW5lbC1oZWFkaW5nJykuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnZGl2LnBhbmVsLnBhbmVsLWRlZmF1bHQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS5maW5kKCcucGFuZWwtaGVhZGluZywgLmNhcHRpb24nKS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9ICQudHJpbSh0ZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sXCJcIikpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YodmFsVGhpcykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5wYW5lbC1oZWFkaW5nJykuc2hvdygyMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnBhbmVsLWhlYWRpbmcnKS5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnBhbmVsLWNvbGxhcHNlLmNvbGxhcHNlLmluJykucmVtb3ZlQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnBhbmVsLWhlYWRpbmcnKS5oaWRlKDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXHRmdW5jdGlvbiBzZWFyY2hpbmcodmFsSW5wdXQsIHZhbERyb3Bkb3duKXtcblx0XHQkKCcucHVyZS1vaC1tLWNhcmRzJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ZXh0ID0gJCh0aGlzKS5maW5kKCcucGFuZWwtYm9keScpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR0ZXh0ID0gJC50cmltKHRleHQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSxcIlwiKSk7XG5cdFx0XHR2YXIgZGF0YUZpbHRlciA9IFtdO1xuXHRcdFx0XG5cdFx0XHRpZigkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJykpe1xuXHRcdFx0XHRkYXRhRmlsdGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlcicpLnNwbGl0KFwiLFwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNob3cgPSBcIlwiO1xuXHRcdFx0dmFyIGdyb3VwQ29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuZ3JvdXAtY29udGFpbmVyJyk7XG5cdFx0XHRpZih2YWxEcm9wZG93biA9PSBcIkFsbFwiKXtcblx0XHRcdFx0JCgnLmRyb3Bkb3duLW1lbnUgLmFsbCcpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcblx0XHRcdFx0aWYodmFsSW5wdXQgIT0gXCJcIil7XG5cdFx0XHRcdFx0aWYgKHRleHQuaW5kZXhPZih2YWxJbnB1dCkgPj0gMCkge1xuXHQgICAgICAgICAgICAgICAgXHQkKHRoaXMpLnBhcmVudCgpLnNob3coMjAwKTtcblx0ICAgICAgICAgICAgXHR9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgXHQkKHRoaXMpLnBhcmVudCgpLmhpZGUoMjAwKTtcblx0ICAgICAgICAgICAgXHR9XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuc2hvdygyMDApO1xuXHRcdFx0XHRcdGlmKGdyb3VwQ29udGFpbmVyKXtcblx0XHRcdFx0XHRcdGdyb3VwQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduby1vcHRpb25zJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0JCgnLmRyb3Bkb3duLW1lbnUgLmFsbCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhRmlsdGVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Ly8gdmFyIGZpbHRlcmVkID0gZGF0YUZpbHRlcltpXS5yZXBsYWNlKCctJywnLCAnKTtcblx0XHRcdFx0XHR2YXIgX2Ryb3Bkb3duX3ZhbHVlID0gdmFsRHJvcGRvd24ucmVwbGFjZSgvXFwsL2dpLCAnJykucmVwbGFjZSgvXFxzL2dpLCAnLScpO1xuXG5cdFx0XHRcdFx0aWYoX2Ryb3Bkb3duX3ZhbHVlID09IGRhdGFGaWx0ZXJbaV0pe1xuXHRcdFx0XHRcdFx0c2hvdyA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHNob3cgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmKHNob3cpe1xuXHRcdFx0XHRcdGlmICh0ZXh0LmluZGV4T2YodmFsSW5wdXQpID49IDApIHtcblx0XHQgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaG93KDIwMCk7XG5cdFx0ICAgICAgICAgICAgICAgIGlmKGdyb3VwQ29udGFpbmVyKXtcblx0XHQgICAgICAgICAgICAgICAgXHRncm91cENvbnRhaW5lci5yZW1vdmVDbGFzcygnbm8tb3B0aW9ucycpO1xuXHRcdCAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0XHQgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKDIwMCk7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmhpZGUoMjAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihncm91cENvbnRhaW5lcil7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0ICAgICAgICAgICAgXHR2YXIgaXRlbUJveCA9IGdyb3VwQ29udGFpbmVyLmZpbmQoJy5jYXJkLWl0ZW06dmlzaWJsZScpLmxlbmd0aDtcblx0XHRcdCAgICAgICAgaWYoaXRlbUJveCA9PSAwKXtcblx0XHRcdCAgICAgICAgXHRncm91cENvbnRhaW5lci5hZGRDbGFzcygnbm8tb3B0aW9ucycpO1xuXHRcdFx0ICAgICAgICB9XG5cdCAgICAgICAgXHR9LCA1MDApXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTtcblxuXHR9O1xuXG5cdGZ1bmN0aW9uIHNvcnRpbmdfZWxlbWVudHModmFsRHJvcGRvd24pe1xuXHRcdHZhbERyb3Bkb3duID0gdmFsRHJvcGRvd24udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csXCItXCIpO1xuXHRcdHZhciB3cmFwcGVyID0gJCgnLmNhcmRzIC5ibG9jayAuY29udGVudCcpO1xuXHRcdHdyYXBwZXIuY2hpbGRyZW4oKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdGEgPSAkKGEuY2hpbGRyZW5bMF0pLmF0dHIoJ2RhdGEtb2NjdXJyZW5jZS0nK3ZhbERyb3Bkb3duKTtcblx0XHRcdGIgPSAkKGIuY2hpbGRyZW5bMF0pLmF0dHIoJ2RhdGEtb2NjdXJyZW5jZS0nK3ZhbERyb3Bkb3duKTtcblx0XHRcdHJldHVybiBhPmIgPyAtMSA6IGE8YiA/IDEgOiAwO1xuXHRcdH0pLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdHdyYXBwZXIucHJlcGVuZCh0aGlzKTtcblx0XHR9KTtcblx0XHRcblx0fVxuXG5cdCQoJyNpbnB1dFNlYXJjaCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZihldmVudC5rZXlDb2RlID09IDEzKXtcblx0XHRcdHNlYXJjaGluZygkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKCksICQoJ3NwYW5bZGF0YS1iaW5kPVwibGFiZWxcIl0nKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCAnLScpKTtcblx0XHRcdHNvcnRpbmdfZWxlbWVudHMoJCgnc3BhbltkYXRhLWJpbmQ9XCJsYWJlbFwiXScpLnRleHQoKS5yZXBsYWNlKC9cXHMrL2csICctJykpO1xuXHRcdH1cblx0fSk7XG5cblxuXHQkKCcucHVyZS1vaC1tLXNlYXJjaC13aXRoZmlsdGVyIC5pY29uLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zb2xlLmxvZygkKCcjaW5wdXRTZWFyY2gnKS52YWwoKS50b0xvd2VyQ2FzZSgpLCAkKCdzcGFuW2RhdGEtYmluZD1cImxhYmVsXCJdJykudGV4dCgpLnJlcGxhY2UoL1xccysvZywgJy0nKSk7XG5cdFx0c2VhcmNoaW5nKCQoJyNpbnB1dFNlYXJjaCcpLnZhbCgpLnRvTG93ZXJDYXNlKCksICQoJ3NwYW5bZGF0YS1iaW5kPVwibGFiZWxcIl0nKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCAnLScpKTtcblx0XHRzb3J0aW5nX2VsZW1lbnRzKCQoJ3NwYW5bZGF0YS1iaW5kPVwibGFiZWxcIl0nKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCAnLScpKTtcblx0fSk7XG5cblx0JCgnLmRyb3Bkb3duLW1lbnUgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyICR0YXJnZXQgPSAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICk7XG5cblx0XHQkdGFyZ2V0LmNsb3Nlc3QoICcuZmlsdGVyJyApXG4gICAgICAgICAgICAuZmluZCggJ1tkYXRhLWJpbmQ9XCJsYWJlbFwiXScgKS50ZXh0KCAkdGFyZ2V0LnRleHQoKSApXG4gICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgIC5jaGlsZHJlbiggJy5kcm9wZG93bi10b2dnbGUnICkuZHJvcGRvd24oICd0b2dnbGUnICk7XG5cblx0XHRzZWFyY2hpbmcoJCgnI2lucHV0U2VhcmNoJykudmFsKCkudG9Mb3dlckNhc2UoKSwgJCgnc3BhbltkYXRhLWJpbmQ9XCJsYWJlbFwiXScpLnRleHQoKSk7XG5cdFx0c29ydGluZ19lbGVtZW50cygkKCdzcGFuW2RhdGEtYmluZD1cImxhYmVsXCJdJykudGV4dCgpLnJlcGxhY2UoL1xccysvZywgJy0nKSk7XG5cdH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCl7XG5cdHZhciAkaW5wdXQgPSAkKFwiI3NlYXJjaC10ZXh0LWZpZWxkXCIpLFxuXHRcdCR0aGVGb3JtID0gJGlucHV0LmNsb3Nlc3QoJ2Zvcm0nKSxcblx0XHRzZWFyY2hVcmwgPSBob3N0ICsgXCIvY29udGVudC1yZXN1bHRzXCIsIC8vJHRoZUZvcm1bMF0uYWN0aW9uO1xuXHRcdHJlc3VsdFBhZ2UgPSBob3N0ICsgXCIvc2VhcmNoL25vZGUvXCIsXG5cdFx0c2VsZWN0ZWRJdGVtID0gJycsXG5cdFx0Y2FsbFJlc3VsdCA9IGZhbHNlLFxuXHRcdHJlc3VsdEl0ZW1zID0gW10sXG5cdFx0ZW50ZXJBdmFpbGFibGUgPSBmYWxzZTtcblxuXHQkKCcjc2VhcmNoLW1vZGFsJykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoXCIjc2VhcmNoLXRleHQtZmllbGRcIikuZm9jdXMoKTtcblx0fSk7XG5cblx0JGlucHV0LmF1dG9jb21wbGV0ZSh7XG5cblx0XHRjcmVhdGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0XHRldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuXHRcdH0sXG5cdFx0YXBwZW5kVG86ICR0aGVGb3JtLFxuXHRcdHNvdXJjZTogZnVuY3Rpb24gKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG5cdCAgICAgICAgJC5hamF4KHtcblx0ICAgICAgICAgICAgdXJsOiBzZWFyY2hVcmwsXG5cdCAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG5cdCAgICAgICAgICAgIGRhdGE6IHsndGl0bGUnOnJlcXVlc3QudGVybX0sXG5cdCAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG5cblx0ICAgICAgICAgICAgXHR2YXIgdmlld3MgICAgID0gW107XG5cdCAgICAgICAgICAgIFx0dmFyIG5vZGVzID0gZGF0YS5ub2RlcztcblxuXHQgICAgICAgICAgICBcdGlmKG5vZGVzLmxlbmd0aCA9PT0gMCl7XG5cdCAgICAgICAgICAgIFx0XHR2aWV3cy5wdXNoKCdubyByZXN1bHQgZm91bmQnKTtcblx0ICAgICAgICAgICAgXHR9ZWxzZXtcblx0ICAgICAgICAgICAgXHRcdGNhbGxSZXN1bHQgPSB0cnVlO1xuXHQgICAgICAgICAgICBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKXtcblx0ICAgICAgICAgICAgXHRcdFx0dmFyIG5vZGUgPSBub2Rlc1tpXS5ub2RlO1xuXHQgICAgICAgICAgICBcdFx0XHR2aWV3cy5wdXNoKG5vZGUudGl0bGUpO1xuXHQgICAgICAgICAgICBcdFx0fVxuXHQgICAgICAgICAgICBcdH1cblxuXHQgICAgICAgICAgICBcdHJlc3BvbnNlKHZpZXdzKTtcblxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdFx0fSxcblxuXHRcdHNlbGVjdDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblxuXHRcdFx0c2VsZWN0ZWRJdGVtID0gdWkuaXRlbS52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICclMjAnKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZihjYWxsUmVzdWx0KXtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXN1bHRQYWdlK3NlbGVjdGVkSXRlbS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRyZXNwb25zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblx0XHRcdHJlc3VsdEl0ZW1zID0gW107XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdWkuY29udGVudC5sZW5ndGg7IGkrKyl7XG5cdCAgICAgICAgICAgIHZhciBub2RlID0gdWkuY29udGVudFtpXS52YWx1ZTtcblx0ICAgICAgICAgICAgcmVzdWx0SXRlbXMucHVzaChub2RlKTtcblx0ICAgICAgICB9XG5cdFx0fSxcblxuXHRcdG1pbkxlbmd0aDogM1xuXG5cdH0pLmtleWRvd24oZnVuY3Rpb24oZSl7XG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMTMpe1xuXHRcdFx0ZW50ZXJBdmFpbGFibGUgPSBmYWxzZTtcblx0XHRcdHNlbGVjdGVkSXRlbSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccysvZywgJyUyMCcpO1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHJlc3VsdEl0ZW1zLmxlbmd0aDsgaSsrKXtcblx0ICAgICAgICAgICAgdmFyIG5vZGUgPSByZXN1bHRJdGVtc1tpXS50b0xvd2VyQ2FzZSgpO1xuXHQgICAgICAgICAgICBpZihub2RlLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSAhPT0gLTEpe1xuXHQgICAgICAgICAgICBcdGVudGVyQXZhaWxhYmxlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XHRcdGlmKGNhbGxSZXN1bHQgJiYgZW50ZXJBdmFpbGFibGUpe1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3VsdFBhZ2Urc2VsZWN0ZWRJdGVtLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHR9XG5cdH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcblxuXHRcdHZhciB0aGVJdGVtID0gaXRlbS5sYWJlbC5yZXBsYWNlKC9cXHMrL2csICclMjAnKSxcblx0XHRcdGxpc3RJdGVtID0gJChcIjxsaT5cIikuZGF0YShcIml0ZW0uYXV0b2NvbXBsZXRlXCIsIGl0ZW0pO1xuXG5cdFx0aWYoY2FsbFJlc3VsdCl7XG5cdFx0XHRyZXR1cm4gbGlzdEl0ZW0uYXBwZW5kKCc8YSBocmVmPVwiJyArIHJlc3VsdFBhZ2UgKyB0aGVJdGVtLnRvTG93ZXJDYXNlKCkgKyAnXCI+JyArIGl0ZW0ubGFiZWwgKyAnPC9hPicpLmFwcGVuZFRvKHVsKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBsaXN0SXRlbS5hcHBlbmQoaXRlbS5sYWJlbCkuYXBwZW5kVG8odWwpO1xuXHRcdH1cblxuXHR9O1xufVxuXG4iLCJ2YXIgaW5qZWN0ID0gcmVxdWlyZSgnLi91dGlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXHRmdW5jdGlvbiBzaGFyZShlbCwgdGl0bGUpe1xuXG5cdFx0dmFyICR0aGVNb2RhbCA9IGVsLmRhdGEoJ3RhcmdldCcpLFxuXHRcdFx0TW9kYWxUaXRsZSA9IHRpdGxlIHx8ICdTaGFyZSc7XG5cblx0XHRpZigkdGhlTW9kYWwpe1xuXHRcdFx0JHRoZU1vZGFsID0gJCgkdGhlTW9kYWwpO1xuXHRcdFx0dmFyIHNoYXJlVGl0bGUgPSBNb2RhbFRpdGxlLnJlcGxhY2UoLyAvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aW5qZWN0LmluamVjdFVybChzaGFyZVRpdGxlKTtcblx0XHR9ZWxzZXtcblx0XHRcdCR0aGVNb2RhbCBcdD0gJCgnI21vZGFsVGVhbScpO1xuXHRcdFx0TW9kYWxUaXRsZSBcdD0gJHRoZU1vZGFsLmZpbmQoJy5uYW1lJykudGV4dCgpO1xuXHRcdH1cblxuXHRcdHZhclx0dXJsID0gZXNjYXBlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblx0ICAgIHZhciBmYWNlYm9va1NoYXJlIFx0PSAkdGhlTW9kYWwuZmluZCgnLmZhY2Vib29rLXNoYXJlJyksXG5cdFx0XHR0d2l0dGVyU2hhcmUgXHQ9ICR0aGVNb2RhbC5maW5kKCcudHdpdHRlci1zaGFyZScpLFxuXHRcdFx0bWFpbFNoYXJlIFx0XHQ9ICR0aGVNb2RhbC5maW5kKCcubWFpbC1zaGFyZScpLFxuXHRcdFx0XG5cdFx0XHRmYWNlYm9va1VybCA9ICdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScrIHVybCArJyZ0PScsXG5cdFx0XHR0d2l0dGVyVXJsID0gJ2h0dHA6Ly93d3cudHdpdHRlci5jb20vaG9tZT9zdGF0dXM9JysgdXJsICsnJnNvdXJjZT13ZWJjbGllbnQnLFxuXHRcdFx0bWFpbEluZm8gPSAnbWFpbHRvOj9zdWJqZWN0PScrIE1vZGFsVGl0bGUrJyUyMCcucmVwbGFjZSgvXFxzL2csIFwiJTIwXCIpKyR0aGVNb2RhbC5maW5kKCcubWFpbC1zaGFyZScpLmRhdGEoJ3N1YmplY3QnKSsnLiZib2R5PScrIHVybCArJyc7XG5cdFx0XHRtYWlsSW5mbyA9IG1haWxJbmZvLnJlcGxhY2UoL1xcbi9nLCBcIiUwRCUwXCIpO1xuXHRcdFx0Y29uc29sZS5sb2cobWFpbEluZm8pO1xuXHRcdFx0ZmFjZWJvb2tTaGFyZS5hdHRyKFwiaHJlZlwiLCBmYWNlYm9va1VybCk7XG5cdFx0XHR0d2l0dGVyU2hhcmUuYXR0cihcImhyZWZcIiwgdHdpdHRlclVybCk7XG5cdFx0XHRtYWlsU2hhcmUuYXR0cihcImhyZWZcIiwgbWFpbEluZm8pO1xuXHR9XG5cblxuXHQkKCcuY2FyZC1zaGFyZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcblx0XHR2YXIgY2FyZFRpdGxlID0gJHRoaXMuY2xvc2VzdCgnLnB1cmUtb2gtbS1jYXJkcycpLmZpbmQoJ2gyJykudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYoJHRoaXMuaGFzQ2xhc3MoJ2xpbmstc2hhcmUnKSl7XG5cdFx0XHRjYXJkVGl0bGUgPSAkdGhpcy5jbG9zZXN0KCcucHVyZS1vaC1oLW1vZGFscycpLmZpbmQoJy5kZXRhaWwtbW9kYWwtaGVhZGVyJykudGV4dCgpLnRvTG93ZXJDYXNlKCk7IC8vanVzdCBmb3IgbW9kYWwgZGV0YWlsXG5cdFx0fVxuXHRcdGlmKGNhcmRUaXRsZSl7XG5cdFx0XHQkKCcucHVyZS1vaC1tLW1vZGFsLXNoYXJlIGgyJykudGV4dChjYXJkVGl0bGUpO1xuXHRcdH1lbHNle1xuXHRcdFx0ICB2YXIgc2hhcmVIdG1sID0gJzxzcGFuIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgY2xhc3M9XCJwdWxsLXJpZ2h0IGNsb3NlXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L3NwYW4+Jytcblx0XHRcdFx0XHRcdFx0ICAnPGgyPjxpIGNsYXNzPVwiZmEgZmEtc2hhcmUtc3F1YXJlLW9cIj48L2k+IFNoYXJlPC9oMj4nO1xuXHRcdFx0ICAkKCcucHVyZS1vaC1tLW1vZGFsLXNoYXJlIC5tb2RhbC1oZWFkZXInKS5odG1sKHNoYXJlSHRtbCk7XG5cdFx0fVxuXHRcdHNoYXJlKCQodGhpcyksIGNhcmRUaXRsZSk7XG5cdH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcblx0JCgnLnNob3ctc2lkZWJhcicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xuXHRcdGlmICgkKCcucHVyZS1vaC1tLXNpZGViYXInKS5maW5kKCdzaWRlYmFyLW1vZGFsJykpe1xuXHRcdFx0JCgnLnB1cmUtb2gtbS1zaWRlYmFyJykuZmluZCgnLnNpZGViYXIuaGlkZGVuLXhzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbi14cycpO1xuXHRcdFx0JCgnLnB1cmUtb2gtbS1zaWRlYmFyJykuZmluZCgnLm1vYmlsZS1mb290ZXInKS5hZGRDbGFzcygnaGlkZGVuLXhzJyk7XG5cdFx0XHQkKCcucHVyZS1vaC1oLW1vZGFscycpLmZpbmQoJy5sZWZ0Y29sJykuYWRkQ2xhc3MoJ2hpZGRlbi14cycpO1xuXHRcdH1lbHNle1xuXHRcdFx0JCgnLnB1cmUtb2gtbS1zaWRlYmFyJykuZmluZCgnLnNpZGViYXIuaGlkZGVuLXhzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbi14cycpO1xuXHRcdFx0JCgnLnB1cmUtb2gtbS1zaWRlYmFyJykuZmluZCgnLm1vYmlsZS1mb290ZXInKS5hZGRDbGFzcygnaGlkZGVuLXhzJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKCcucHVyZS1vaC1tLXNpZGViYXIgLmNsb3NlJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHQvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cdFx0aWYoJCgnLnB1cmUtb2gtbS1zaWRlYmFyJykuZmluZCgnc2lkZWJhci1tb2RhbCcpKXtcblx0XHRcdCQoJy5zaWRlYmFyJykuYWRkQ2xhc3MoJ2hpZGRlbi14cycpO1xuXHRcdFx0JCgnLm1vYmlsZS1mb290ZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuLXhzJyk7XG5cdFx0XHQkKCcucHVyZS1vaC1oLW1vZGFscycpLmZpbmQoJy5sZWZ0Y29sJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbi14cycpO1xuXHRcdH1lbHNle1xuXHRcdFx0JCgnLnNpZGViYXInKS5hZGRDbGFzcygnaGlkZGVuLXhzJyk7XG5cdFx0XHQkKCcubW9iaWxlLWZvb3RlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4teHMnKTtcblx0XHR9XG5cdH0pO1xuXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXG5cdCQoJyNtb2RhbERldGFpbHMnKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xuXHRcdCQoJy5zaWRlYmFyJykuc2xpbVNjcm9sbCh7XG5cdFx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHQgICAgcmFpbFZpc2libGU6IHRydWUsXG5cdFx0ICAgIGFsd2F5c1Zpc2libGU6IHRydWUsXG5cdFx0ICAgIGRpc3RhbmNlOiAnMHB4J1xuXHRcdH0pO1xuXHR9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHQvLyB2YXIgaW1hZ2VCZyA9ICQoJy5wdXJlLW9oLW0tdGVzdGltb25pYWxzIC5iYW5uZXIgaW1nJykuYXR0cignZGF0YS1iZy1jb2xvcicpO1xuXHQvLyAkKCcucHVyZS1vaC1tLXRlc3RpbW9uaWFscyAuYmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgaW1hZ2VCZyk7XG5cblx0ZnVuY3Rpb24gZ2V0TWFyZ2luKCl7XG5cdFx0dmFyXHRpbWFnZUJnID0gJCgnLnB1cmUtb2gtbS10ZXN0aW1vbmlhbHMgLmJhbm5lciAuYmFubmVySW1hZ2UnKSxcblx0XHRcdCRoZWFkZXIgPSAkKCcucHVyZS1vaC1tLXRlc3RpbW9uaWFscyAucHVyZS1vaC1tLWhlYWRlci1kYXJrJykub3V0ZXJIZWlnaHQoKSxcblx0XHRcdG1hcmdpblRvcCA9IC0gJGhlYWRlcjtcblx0XHRpbWFnZUJnLmNzcygnbWFyZ2luLXRvcCcsIG1hcmdpblRvcCk7XG5cdH1cblxuXHRnZXRNYXJnaW4oKTtcblxuXHQkKHdpbmRvdykucmVzaXplKGdldE1hcmdpbik7XG59IiwidmFyIGluamVjdFVybCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICB2YXIgdXJsVGl0bGUgPSAkLnRyaW0odGl0bGUucmVwbGFjZSgvIC9nLCAnLScpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cbiAgICAgICAgaWYoaGFzaC5pbmRleE9mKCdib2R5X3BhcnQnKSAhPT0gLTEpe1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRVcmwgPSBoYXNoO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaGFzaC5pbmRleE9mKCdtPScpO1xuICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKXtcbiAgICAgICAgICAgICAgICBpbmRleCAtPSAxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRVcmwgPSBoYXNoLnN1YnN0cmluZyhpbmRleCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGN1cnJlbnRVcmwrJyZtPScrIHVybFRpdGxlKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsICc/bT0nKyB1cmxUaXRsZSk7XG4gICAgICAgIH1cbn1cblxudmFyIG1zaWV2ZXJzaW9uID0gKCkgPT4ge1xuICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHZhciBtc2llID0gdWEuaW5kZXhPZihcIk1TSUUgXCIpO1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmIChtc2llID4gMCB8fCAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSlcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgZWxzZVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbmplY3RVcmw6IGluamVjdFVybCxcbiAgbXNpZXZlcnNpb246IG1zaWV2ZXJzaW9uXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuXG5cdCQuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLmVuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uICgpIHsgfTtcblxuXHRjb25zb2xlLmxvZygkKCcuZm9ybS1hY3Rpb25zJykucGFyZW50KCkpO1xuXG5cdHZhciBpc0VtcHR5O1xuXHR2YXIgbW9kYWw7XG5cblx0U3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBcdHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzVmFsaWRFbWFpbEFkZHJlc3MoZW1haWxBZGRyZXNzKSB7XG4gICAgXHR2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoL14oKFwiW1xcdy1cXHNdK1wiKXwoW1xcdy1dKyg/OlxcLltcXHctXSspKil8KFwiW1xcdy1cXHNdK1wiKShbXFx3LV0rKD86XFwuW1xcdy1dKykqKSkoQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQpfChAXFxbPygoMjVbMC01XVxcLnwyWzAtNF1bMC05XVxcLnwxWzAtOV17Mn1cXC58WzAtOV17MSwyfVxcLikpKCgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcLil7Mn0oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXF0/JCkvaSk7XG4gICAgXHRyZXR1cm4gcGF0dGVybi50ZXN0KGVtYWlsQWRkcmVzcyk7XG5cdH07XG5cblx0ZnVuY3Rpb24gZmllbGRSZXF1aXJlZChmaWVsZE5hbWUpe1xuXHRcdGlzRW1wdHkgPSBcIlwiO1xuXHRcdGlmKGZpZWxkTmFtZS52YWwoKS5sZW5ndGggPT0gMCl7XG5cdFx0XHRmaWVsZE5hbWUuYWRkQ2xhc3MoJ2Vycm9yLWZpZWxkJyk7XG5cdFx0XHRpc0VtcHR5ID0gdHJ1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdGZpZWxkTmFtZS5yZW1vdmVDbGFzcygnZXJyb3ItZmllbGQnKTtcblx0XHRcdGlzRW1wdHkgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGlzRW1wdHk7XG5cdH07XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVGaWVsZChlbCl7XG5cdFx0ZmllbGRSZXF1aXJlZChlbCk7XG5cdFx0dmFyIGZpZWxkTmFtZSA9ICcnLFxuXHRcdFx0Y2xhc3NMaXN0ID0gZWwuYXR0cignY2xhc3MnKS5zcGxpdCgvXFxzKy8pO1xuXG5cdFx0JC5lYWNoKGNsYXNzTGlzdCwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHQgICAgaWYgKGl0ZW0uaW5kZXhPZignZmllbGQtJykgIT0gLTEpIHtcblx0XHQgICAgICAgIGZpZWxkTmFtZSA9IGl0ZW0ucmVwbGFjZSgnZmllbGQtJywnJyk7XG5cdFx0ICAgIH1cblx0XHR9KTtcblxuXHRcdHZhciBlcnJvck5hbWUgPSBcIiNcIisgZmllbGROYW1lICtcIi1lcnJvclwiLFxuXHRcdFx0bW9kYWwgPSBlbC5jbG9zZXN0KCcuaW4nKSxcblx0XHRcdGVycm9ySXRlbSA9ICQoZXJyb3JOYW1lKTtcblx0XHRpZihpc0VtcHR5ICYmIChlcnJvckl0ZW0ubGVuZ3RoID09IDApKXtcblx0XHRcdG1vZGFsLmZpbmQoJy5lcnJvci1kZXRhaWxzJykuYXBwZW5kKCc8cCBpZD1cIicrIGZpZWxkTmFtZSArJy1lcnJvclwiPicrIGZpZWxkTmFtZS5jYXBpdGFsRmlyc3RMZXR0ZXIoKSArJyBpcyByZXF1aXJlZDwvcD4nKTtcblx0XHR9ZWxzZSBpZihpc0VtcHR5ICYmIGVycm9ySXRlbS5sZW5ndGggPj0gMSAmJiAoZmllbGROYW1lID09IFwiZW1haWxcIikpe1xuXHRcdFx0JChlcnJvck5hbWUpLnRleHQoJ0VtYWlsIGlzIHJlcXVpcmVkJyk7XG5cdFx0fWVsc2UgaWYoIWlzRW1wdHkpe1xuXHRcdFx0aWYoZmllbGROYW1lID09IFwiZW1haWxcIil7XG5cdFx0XHRcdGlmKCFpc1ZhbGlkRW1haWxBZGRyZXNzKGVsLnZhbCgpKSl7XG5cdFx0XHRcdFx0aWYoJCgnLmVycm9yLWRldGFpbHMgJyArIGVycm9yTmFtZSkubGVuZ3RoID4gMCl7XG5cdFx0XHRcdFx0XHRlbC5hZGRDbGFzcygnZXJyb3ItZmllbGQnKTtcblx0XHRcdFx0XHRcdCQoZXJyb3JOYW1lKS50ZXh0KCdFbWFpbCBpcyBub3QgdmFsaWQnKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdG1vZGFsLmZpbmQoJy5lcnJvci1kZXRhaWxzJykuYXBwZW5kKCc8cCBpZD1cIicrIGZpZWxkTmFtZSArJy1lcnJvclwiPicrIGZpZWxkTmFtZS5jYXBpdGFsRmlyc3RMZXR0ZXIoKSArJyBpcyBub3QgdmFsaWQ8L3A+Jyk7XG5cdFx0XHRcdFx0XHRlbC5hZGRDbGFzcygnZXJyb3ItZmllbGQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGVsLnJlbW92ZUNsYXNzKCdlcnJvci1maWVsZCcpO1xuXHRcdFx0XHRcdCQoJ3AnKS5yZW1vdmUoZXJyb3JOYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdCQoJ3AnKS5yZW1vdmUoZXJyb3JOYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB2YWxpZGF0ZUNhcHRjaGFGaWVsZChlbCl7XG5cdFx0ZmllbGRSZXF1aXJlZChlbCk7XG5cdFx0dmFyIGZpZWxkTmFtZSA9ICcnLFxuXHRcdFx0Y2xhc3NMaXN0ID0gZWwuYXR0cignY2xhc3MnKS5zcGxpdCgvXFxzKy8pLFxuXHRcdFx0cmVjYXB0Y2hhUmVzcG9uc2UgPSBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKCk7XG5cblx0XHQkLmVhY2goY2xhc3NMaXN0LCBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdCAgICBpZiAoaXRlbS5pbmRleE9mKCdmaWVsZC0nKSAhPSAtMSkge1xuXHRcdCAgICAgICAgZmllbGROYW1lID0gaXRlbS5yZXBsYWNlKCdmaWVsZC0nLCcnKTtcblx0XHQgICAgfVxuXHRcdH0pO1xuXG5cdFx0dmFyIGVycm9yTmFtZSA9IFwiI1wiKyBmaWVsZE5hbWUgK1wiLWVycm9yXCIsXG5cdFx0XHRtb2RhbCA9IGVsLmNsb3Nlc3QoJy5pbicpLFxuXHRcdFx0ZXJyb3JJdGVtID0gJChlcnJvck5hbWUpO1xuXHRcdGlmKGlzRW1wdHkgJiYgKGVycm9ySXRlbS5sZW5ndGggPT0gMCkgJiYgKHJlY2FwdGNoYVJlc3BvbnNlLmxlbmd0aCA9PSAwKSl7XG5cdFx0XHRtb2RhbC5maW5kKCcuZXJyb3ItZGV0YWlscycpLmFwcGVuZCgnPHAgaWQ9XCInKyBmaWVsZE5hbWUgKyctZXJyb3JcIj4nKyBmaWVsZE5hbWUuY2FwaXRhbEZpcnN0TGV0dGVyKCkgKycgaXMgcmVxdWlyZWQ8L3A+Jyk7XG5cdFx0fWVsc2UgaWYoaXNFbXB0eSAmJiBlcnJvckl0ZW0ubGVuZ3RoID49IDEgJiYgKGZpZWxkTmFtZSA9PSBcImVtYWlsXCIpKXtcblx0XHRcdCQoZXJyb3JOYW1lKS50ZXh0KCdFbWFpbCBpcyByZXF1aXJlZCcpO1xuXHRcdH1lbHNlIGlmKCFpc0VtcHR5KXtcblx0XHRcdGlmKGZpZWxkTmFtZSA9PSBcImVtYWlsXCIpe1xuXHRcdFx0XHRpZighaXNWYWxpZEVtYWlsQWRkcmVzcyhlbC52YWwoKSkpe1xuXHRcdFx0XHRcdGlmKCQoJy5lcnJvci1kZXRhaWxzICcgKyBlcnJvck5hbWUpLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0ZWwuYWRkQ2xhc3MoJ2Vycm9yLWZpZWxkJyk7XG5cdFx0XHRcdFx0XHQkKGVycm9yTmFtZSkudGV4dCgnRW1haWwgaXMgbm90IHZhbGlkJyk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRtb2RhbC5maW5kKCcuZXJyb3ItZGV0YWlscycpLmFwcGVuZCgnPHAgaWQ9XCInKyBmaWVsZE5hbWUgKyctZXJyb3JcIj4nKyBmaWVsZE5hbWUuY2FwaXRhbEZpcnN0TGV0dGVyKCkgKycgaXMgbm90IHZhbGlkPC9wPicpO1xuXHRcdFx0XHRcdFx0ZWwuYWRkQ2xhc3MoJ2Vycm9yLWZpZWxkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRlbC5yZW1vdmVDbGFzcygnZXJyb3ItZmllbGQnKTtcblx0XHRcdFx0XHQkKCdwJykucmVtb3ZlKGVycm9yTmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNle1xuXHRcdFx0XHQkKCdwJykucmVtb3ZlKGVycm9yTmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGVsKXtcblxuXHRcdHZhciBmaWVsZHMgPSBlbC5maW5kKFwiLmZvcm0tdGV4dFwiKTtcblxuXHRcdGZpZWxkcy5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHR2YWxpZGF0ZUZpZWxkKCQodGhpcykpO1xuXHRcdH0pO1xuXG5cdFx0aWYoaXNFbXB0eSAhPSB1bmRlZmluZWQpe1xuXHRcdFx0aWYoJCgnLmVycm9yLWRldGFpbHMnKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAwKXtcblx0XHRcdFx0ZWwuc3VibWl0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVGb3JtQ2FwdGNoYShlbCl7XG5cblx0XHR2YXIgZmllbGRzID0gZWwuZmluZChcIi5mb3JtLXRleHRcIik7XG5cblx0XHRmaWVsZHMuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFsaWRhdGVDYXB0Y2hhRmllbGQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdCQoJy5tb2RhbC5mYWRlJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpe1xuXHRcdCQoJ2Zvcm0gLmZvcm0tdGV4dCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdCQodGhpcykudmFsKCcnKTtcblx0XHR9KTtcblx0XHRpc0VtcHR5ID0gdW5kZWZpbmVkO1xuXHR9KTtcblxuXHQkKCdmb3JtIC5mb3JtLXRleHQnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0JCh0aGlzKS5ibHVyKGZ1bmN0aW9uKCl7XG5cdFx0XHR2YWxpZGF0ZUZpZWxkKCQodGhpcykpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyAkKCcuZm9ybS1zdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXG5cdC8vIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHQvLyBcdGlmKCQodGhpcykuYXR0cigndmFsdWUnKSA9PSAnTG9nIGluJyl7XG5cdC8vIFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcblx0Ly8gXHRcdHJldHVybjtcblx0Ly8gXHR9ZWxzZXtcblx0Ly8gXHRcdHZhbGlkYXRlRm9ybSgkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKSk7XG5cdC8vIFx0fVxuXG5cdC8vIH0pO1xuXG5cdCQoJy5mb3JtLXN1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICgkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCcuY2FwdGNoYScpLmxlbmd0aCkge1xuXHRcdFx0dmFyIHJlY2FwdGNoYVJlc3BvbnNlID0gZ3JlY2FwdGNoYS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0aWYoICQodGhpcykuYXR0cigndmFsdWUnKSAhPSAwICAmJiByZWNhcHRjaGFSZXNwb25zZS5sZW5ndGggIT0gMCApIHtcblx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3ZhbHVlJykgIT0gMCAmJiByZWNhcHRjaGFSZXNwb25zZS5sZW5ndGggPT0gMCApIHtcblx0XHRcdFx0dmFsaWRhdGVGb3JtQ2FwdGNoYSgkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKSk7IFxuXHRcdFx0XHRpZiAoJCgnLmNhcHRjaGEtZXJyb3InKS5sZW5ndGggPT0gMCkgeyBcblx0XHRcdFx0XHQkKCcjbW9kYWxDb250YWN0JykuZmluZCgnLmctcmVjYXB0Y2hhJykuYXBwZW5kKCc8cCBjbGFzcz1cIicrICdjYXB0Y2hhJyArJy1lcnJvclwiPicrICdyZWNhcHRjaGEnICsnIGlzIHJlcXVpcmVkPC9wPicpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsaWRhdGVGb3JtKCQodGhpcykuY2xvc2VzdCgnZm9ybScpKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoKCQodGhpcykuYXR0cigndmFsdWUnKSA9PSAnTG9nIGluJykpIHtcblx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsaWRhdGVGb3JtKCQodGhpcykuY2xvc2VzdCgnZm9ybScpKTtcblx0XHR9XG5cblx0fSk7XG5cblxufSIsInZhciBpbmplY3QgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgJCgnLm1vZGFsLXZpZGVvcyAubW9kYWwtYWN0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkcGFyZW50ICAgICAgICAgICAgID0gJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwtY2FyZHMnKSxcbiAgICAgICAgICAgIG5vZGUgICAgICAgICAgICAgICAgPSAkcGFyZW50LmZpbmQoJy5tb2RhbC1ub2RlJyksXG4gICAgICAgICAgICB0aXRsZSAgICAgICAgICAgICAgID0gbm9kZS5kYXRhKCd0aXRsZScpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gICAgICAgICA9IG5vZGUuZGF0YSgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgIHZpZGVvaWQgICAgICAgICAgICAgPSBub2RlLmRhdGEoJ3ZpZGVvJyksXG4gICAgICAgICAgICB0aGVNb2RhbCAgICAgICAgICAgID0gJChcIiNtb2RhbFZpZGVvXCIpLFxuICAgICAgICAgICAgdGhlSWZyYW1lICAgICAgICAgICA9IHRoZU1vZGFsLmZpbmQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgdGhlTW9kYWwuZmluZCgnaDInKS50ZXh0KHRpdGxlKTtcbiAgICAgICAgICAgIHRoZU1vZGFsLmZpbmQoJ3AnKS50ZXh0KGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHZpZGVvID0gdGhlSWZyYW1lLmF0dHIoXCJzcmNcIik7XG4gICAgICAgICAgICB0aGVJZnJhbWUuYXR0cihcInNyY1wiLFwiXCIpO1xuICAgICAgICAgICAgdGhlSWZyYW1lLmF0dHIoXCJzcmNcIixcImh0dHA6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIgKyB2aWRlb2lkKTtcblxuICAgICAgICBpbmplY3QuaW5qZWN0VXJsKHRpdGxlKTtcblxuICAgIH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcblx0dmFyICRzdGVwQ29udGFpbmVyIFx0PSAkKFwiLnN0ZXAtaW5mb1wiKSxcblx0XHQkc3RlcEJveCBcdFx0PSAkc3RlcENvbnRhaW5lci5maW5kKCcuc3RlcC1ib3gnKSxcblx0XHQkcXVlc3Rpb25Cb3ggXHQ9ICRzdGVwQ29udGFpbmVyLmZpbmQoJy5xdWVzdGlvbi1ib3gnKSxcblx0XHQkaXRlbXMgXHQgIFx0XHQ9ICQoJy5sdW1iYXItcGFpbicpLFxuXHRcdCRjb3VudGVyICBcdFx0PSAkKCcuc3RlcC1jb3VudGVyJyksXG5cdFx0JHN0ZXBCYWNrIFx0XHQ9ICQoJy5zdGVwLWJhY2snKSxcblx0XHRxdWVzdGlvbnMgXHRcdD0gJHN0ZXBCb3guZmluZCgnLnNlbGVjdGlvbi1ib3ggYScpLFxuXHRcdGNvdW50ZXJJbmRleFx0PSAkY291bnRlci5maW5kKCdidXR0b24nKSxcblx0XHRzdGVwVXJsICBcdFx0PSBob3N0ICsgXCIvZGlhZ25vc3RpY3MtcmVzdWx0c1wiLFxuXHRcdHJlc3VsdFVybCAgXHRcdD0gaG9zdCArIFwiL2NvbmRpdGlvbnMtcmVzdWx0c1wiLFxuXHRcdGNvbmRpdGlvblVybCAgIFx0PSBob3N0ICsgXCIvd2hhdC1odXJ0cy1yZXN1bHRzXCIsXG5cdFx0d2hhdEh1cnRJbWFnZSBcdD0gJChcIiNpbWFnZS1ib3hcIiksXG5cdFx0c3RlcHNEYXRhIFx0XHQ9IHt9O1xuXHRcdFxuXG5cdHZhciBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgaWYoY3VycmVudFVybC5pbmRleE9mKCd3aGF0cy1odXJ0aW5nJykgIT09IC0xKXtcblxuICAgICAgICAkLmFkZHJlc3MucGF0aCgnc3RlcC0xJyk7XG5cbiAgICAgICAgdmFyIHZpc2l0ZWRQYWdlcyA9IFskLmFkZHJlc3MucGF0aCgpXTtcblxuICAgICAgICAkLmFkZHJlc3MuaW50ZXJuYWxDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgIHZpc2l0ZWRQYWdlcy5wdXNoKCQuYWRkcmVzcy5wYXRoKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkLmFkZHJlc3MuZXh0ZXJuYWxDaGFuZ2UoZnVuY3Rpb24oZXYpIHsgXG5cbiAgICAgICAgXHR2YXIgbmV3UGFnZSA9ICQuYWRkcmVzcy5wYXRoKCk7XG4gICAgICAgIFx0dmlzaXRlZFBhZ2VzLnB1c2gobmV3UGFnZSk7XG4gICAgICAgIFx0dmFyIGxhc3RQYWdlID0gdmlzaXRlZFBhZ2VzW3Zpc2l0ZWRQYWdlcy5sZW5ndGggLSAyXSxcbiAgICAgICAgXHRcdG5ld1BhZ2VJbmRleCA9IE51bWJlcihuZXdQYWdlLnJlcGxhY2UoXCIvc3RlcC1cIixcIlwiKSksXG4gICAgICAgIFx0XHRsYXN0UGFnZUluZGV4ID0gTnVtYmVyKGxhc3RQYWdlLnJlcGxhY2UoXCIvc3RlcC1cIixcIlwiKSk7XG5cbiAgICAgICAgICAgXHRpZihuZXdQYWdlSW5kZXggPT0gMSl7XG4gICAgICAgICAgIFx0XHRtb3ZlU3RlcCgwKTtcbiAgICAgICAgICAgXHRcdGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICBcdFx0aGlzdG9yeS5nbygxKTtcbiAgICAgICAgICAgXHR9ZWxzZXtcbiAgICAgICAgICAgXHRcdGNvbnNvbGUuZGlyKCQoY291bnRlckluZGV4W25ld1BhZ2VJbmRleCAtIDFdKSk7XG4gICAgICAgICAgIFx0XHQkKGNvdW50ZXJJbmRleFtuZXdQYWdlSW5kZXggLSAxXSkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgXHR9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cdGZ1bmN0aW9uIHNldEltYWdlQ2xhc3MoaW1nKXtcblx0XHRpZihpbWcpe1xuXHRcdFx0d2hhdEh1cnRJbWFnZS5yZW1vdmVDbGFzcyAoZnVuY3Rpb24gKGluZGV4LCBjc3MpIHtcblx0XHRcdCAgICByZXR1cm4gKGNzcy5tYXRjaCAoL1xcYm92YWwtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuXHRcdFx0fSkuYWRkQ2xhc3MoaW1nKTtcblx0XHR9ZWxzZXtcblx0XHRcdHdoYXRIdXJ0SW1hZ2UucmVtb3ZlQ2xhc3MgKGZ1bmN0aW9uIChpbmRleCwgY3NzKSB7XG5cdFx0XHQgICAgcmV0dXJuIChjc3MubWF0Y2ggKC9cXGJvdmFsLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGFuaW1hdGlvbi13aGF0LWh1cnRzLmpzIGludGVncmF0aW9uXG5cdGZ1bmN0aW9uIHN0b3BBbmltYXRpb24oZWxlbWVudClcblx0e1xuXHQgICAgJChlbGVtZW50KS5jc3MoXCItd2Via2l0LWFuaW1hdGlvblwiLCBcIm5vbmVcIik7XG5cdCAgICAkKGVsZW1lbnQpLmNzcyhcIi1tb3otYW5pbWF0aW9uXCIsIFwibm9uZVwiKTtcblx0ICAgICQoZWxlbWVudCkuY3NzKFwiLW1zLWFuaW1hdGlvblwiLCBcIm5vbmVcIik7XG5cdCAgICAkKGVsZW1lbnQpLmNzcyhcImFuaW1hdGlvblwiLCBcIm5vbmVcIik7XG5cdH1cblxuXHQkc3RlcEJhY2sub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGN1cnJlbnRTdGVwID0gJCh0aGlzKS5jbG9zZXN0KCcuc3RlcC1pbmZvJykuZmluZCgnLnF1ZXN0aW9uLWJveC5hY3RpdmUnKS5pbmRleCgpLFxuXHRcdFx0bW92ZVRvIFx0XHQ9IGN1cnJlbnRTdGVwIC0gMTtcblx0XHRtb3ZlU3RlcChtb3ZlVG8pO1xuXG5cdH0pO1xuXG5cdGNvdW50ZXJJbmRleC5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XG5cblx0XHRpZigkdGhpcy5oYXNDbGFzcygnZGlzYWJsZWQnKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fWVsc2V7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRtb3ZlU3RlcCgkdGhpcy5pbmRleCgpKTtcblx0XHRcdCQuYWRkcmVzcy5wYXRoKCdzdGVwLScrKCR0aGlzLmluZGV4KCkrMSkpO1xuXHRcdH1cblxuXHR9KTtcblxuXHQkaXRlbXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cblx0XHQkaXRlbXMucmVtb3ZlQ2xhc3MoJ3NjYWxlLWltYWdlJyk7Ly8gYW5pbWF0aW9uLXdoYXQtaHVydHMuanMgaW50ZWdyYXRpb25cblx0XHRzdG9wQW5pbWF0aW9uKCRpdGVtcy5maW5kKCcuY2lyY2xlJykpOy8vIGFuaW1hdGlvbi13aGF0LWh1cnRzLmpzIGludGVncmF0aW9uXG5cblx0XHR2YXIgJHRoaXMgXHRcdD0gJCh0aGlzKSxcblx0XHRcdGJvZHlQYXJ0IFx0PSAkdGhpcy5kYXRhKCdib2R5LXBhcnQnKSxcblx0XHRcdGJvZHlJZCBcdFx0PSAkdGhpcy5hdHRyKCdpZCcpO1xuXG5cdFx0c2V0SW1hZ2VDbGFzcyhib2R5SWQpO1xuXHRcdHdoYXRIdXJ0SW1hZ2UuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cblx0XHRzdGVwc0RhdGFbJ2JvZHlfcGFydCddID0gYm9keVBhcnQ7XG5cdFx0XG5cblx0XHQkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0JHRoaXMuc2libGluZ3MoKS5oaWRlKCk7XG5cblx0XHRnZXREYXRhKHN0ZXBzRGF0YSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0YWRkRWxlbWVudHMoJHRoaXMsIGRhdGEpO1xuXHRcdH0pO1xuXG5cdH0pO1xuXG5cdCRpdGVtcy5ob3Zlcihcblx0XHRmdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzIFx0PSAkKHRoaXMpLFxuXHRcdFx0XHRib2R5SWQgXHQ9ICR0aGlzLmF0dHIoJ2lkJyk7XG5cdFx0XHRpZighJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcblx0XHRcdFx0c2V0SW1hZ2VDbGFzcyhib2R5SWQpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRmdW5jdGlvbigpe1xuXG5cdFx0XHRpZighJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuXHRcdFx0XHRzZXRJbWFnZUNsYXNzKCk7XG5cdFx0XHR9XG5cdH0pO1xuXG5cdCQocXVlc3Rpb25zKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIHRoZVBhcmVudCBcdD0gJCh0aGlzKS5jbG9zZXN0KCcuc3RlcC1ib3gnKSxcblx0XHRcdHRoZUFuc3dlciBcdD0gJCh0aGlzKS5hdHRyKCdkYXRhLXF1ZXN0aW9uJyk7XG5cblx0XHRpZih0aGVQYXJlbnQuaW5kZXgoKSA9PSAxKXtcblx0XHRcdHN0ZXBzRGF0YVsnbm9kZSddID0gdGhlQW5zd2VyO1xuXHRcdFx0c3RlcHNEYXRhWydkaWFnbm9zdGljMSddID0gJCh0aGlzKS5hdHRyKCdkYXRhLWRpYWdub3N0aWMnKTtcblx0XHRcdGlmKHN0ZXBzRGF0YVsnZGlhZ25vc3RpYzInXSl7XG5cdFx0XHRcdHN0ZXBzRGF0YVsnZGlhZ25vc3RpYzInXSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXREYXRhKHN0ZXBzRGF0YSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRsYXN0UXVlc3Rpb24odGhlUGFyZW50Lm5leHQoKSwgZGF0YSk7XG5cdFx0XHR9KTtcblxuXHRcdH1lbHNle1xuXHRcdFx0c3RlcHNEYXRhWydkaWFnbm9zdGljMiddID0gJCh0aGlzKS5hdHRyKCdkYXRhLWRpYWdub3N0aWMnKTtcblx0XHRcdGdldFJlc3VsdChzdGVwc0RhdGEpO1xuXHRcdH1cblxuXHR9KTtcdFxuXG5cdGZ1bmN0aW9uIGFkZEVsZW1lbnRzKGVsLCBkYXRhKXtcblxuXHRcdHZhciBub2RlcyBcdFx0XHRcdD0gZGF0YS5ub2Rlcyxcblx0XHRcdHF1ZXN0aW9uMSBcdFx0XHQ9IFwicXVlc3Rpb24gMVwiLFxuXHRcdFx0Zmlyc3RRdWVzdGlvbkJveFx0PSAkKCRxdWVzdGlvbkJveFswXSksXG5cdFx0XHRpdGVtVGl0bGUgICAgICBcdFx0PSBlbC5maW5kKCcudGl0bGUnKSxcblx0XHRcdHRpdGxlRmlsdGVyXHRcdFx0PSBpdGVtVGl0bGUudGV4dCgpLnJlcGxhY2UoL1xccysvZywgJyUyMCcpLFxuXHRcdFx0aXRlbURlc2NyaXB0aW9uIFx0PSBlbC5maW5kKCcuZGVzY3JpcHRpb24nKSxcblx0XHRcdGZpcnN0Tm9kZXNcdFx0XHQ9IFtdO1xuXG5cdFx0Zm9yKHZhciBlID0gMDsgZSA8IG5vZGVzLmxlbmd0aDsgZSsrKXtcblx0XHRcdGlmKG5vZGVzW2VdLm5vZGUuaXNfZmlyc3RfcXVlc3Rpb24gPT0gMSl7XG5cdFx0XHRcdGZpcnN0Tm9kZXMucHVzaChub2Rlc1tlXS5ub2RlKTtcblx0XHRcdFx0cXVlc3Rpb24xID0gbm9kZXNbZV0ubm9kZS5xdWVzdGlvbl90ZXh0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQkLmVhY2goJHF1ZXN0aW9uQm94LCBmdW5jdGlvbihpbmRleCwgZWwpe1xuXG5cdFx0XHR2YXIgY3VycmVudFRpdGxlID0gJCh0aGlzKS5maW5kKCcudGl0bGUnKTtcblx0XHRcdGlmKCFjdXJyZW50VGl0bGUubGVuZ3RoKXtcblx0XHRcdFx0aXRlbURlc2NyaXB0aW9uLmNsb25lKCkucHJlcGVuZFRvKCQodGhpcykpO1xuXHRcdFx0XHRpdGVtVGl0bGUuY2xvbmUoKS5wcmVwZW5kVG8oJCh0aGlzKSk7XG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHRcdHNldEFuc3dlcnMoZmlyc3RRdWVzdGlvbkJveCwgZmlyc3ROb2Rlcyk7XG5cdFx0XHRcblx0XHRmaXJzdFF1ZXN0aW9uQm94LmZpbmQoJy5zdGVwLXF1ZXN0aW9uIGgyJykudGV4dChxdWVzdGlvbjEpO1xuXHRcdFxuXHRcdG1vdmVTdGVwKDEpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBzZXRBbnN3ZXJzKGVsLCBub2Rlcyl7XG5cdFx0dmFyIGN1cnJlbnRRdWVzdGlvbnMgPSBlbC5maW5kKCcuc2VsZWN0aW9uLWJveCBhJyk7XG5cblx0XHQkLmVhY2goY3VycmVudFF1ZXN0aW9ucywgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pe1xuXHRcdFx0dmFyIGJveEluZGV4ID0gZWwuaW5kZXgoKTtcblx0XHRcdGlmKGJveEluZGV4ID09IDEpe1xuXHRcdFx0XHQkKGl0ZW0pLnRleHQobm9kZXNbaW5kZXhdLmFuc3dlcl90ZXh0ICsgJyA+ICcpLmF0dHIoJ2RhdGEtcXVlc3Rpb24nLCBub2Rlc1tpbmRleF0ubmV4dF9xdWVzdGlvbikuYXR0cignZGF0YS1kaWFnbm9zdGljJyxub2Rlc1tpbmRleF0uZGlhZ25vc3RpY3NfY2F0ZWdvcnkpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdCQoaXRlbSkudGV4dChub2Rlc1tpbmRleF0uYW5zd2VyX3RleHQgKyAnID4gJykuYXR0cignZGF0YS1xdWVzdGlvbicsIG5vZGVzW2luZGV4XS5kaWFnbm9zdGljc19jYXRlZ29yeSkuYXR0cignZGF0YS1kaWFnbm9zdGljJyxub2Rlc1tpbmRleF0uZGlhZ25vc3RpY3NfY2F0ZWdvcnkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gbGFzdFF1ZXN0aW9uKGVsLCBkYXRhKXtcblx0XHR2YXIgbm9kZXMgXHRcdD0gZGF0YS5ub2Rlcztcblx0XHR2YXIgcXVlc3Rpb24yXHQ9IFwicXVlc3Rpb24gMlwiO1xuXHRcdHZhciBsYXN0Tm9kZXNcdD0gW107XG5cblx0XHRmb3IodmFyIGUgPSAwOyBlIDwgbm9kZXMubGVuZ3RoOyBlKyspe1xuXHRcdFx0bGFzdE5vZGVzLnB1c2gobm9kZXNbZV0ubm9kZSk7XG5cdFx0XHRxdWVzdGlvbjIgPSBub2Rlc1tlXS5ub2RlLnF1ZXN0aW9uX3RleHQ7XG5cdFx0fVxuXG5cdFx0c2V0QW5zd2VycyhlbCwgbGFzdE5vZGVzKTtcblxuXHRcdGVsLmZpbmQoJy5zdGVwLXF1ZXN0aW9uIGgyJykudGV4dChxdWVzdGlvbjIpO1xuXG5cdFx0bW92ZVN0ZXAoMik7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2V0U3RlcDEoKXtcblx0XHQkLmVhY2goJHF1ZXN0aW9uQm94LCBmdW5jdGlvbihpbmRleCwgZWwpe1xuXHRcdFx0dmFyIGN1cnJlbnRUaXRsZSBcdFx0PSAkKHRoaXMpLmZpbmQoJy50aXRsZScpLFxuXHRcdFx0XHRjdXJyZW50RGVzY3JpcHRpb24gXHQ9ICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJyk7XG5cdFx0XHRpZihjdXJyZW50VGl0bGUubGVuZ3RoKXtcblx0XHRcdFx0Y3VycmVudFRpdGxlLnJlbW92ZSgpO1xuXHRcdFx0XHRjdXJyZW50RGVzY3JpcHRpb24ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRzZXRJbWFnZUNsYXNzKCk7XG5cdFx0d2hhdEh1cnRJbWFnZS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHQkaXRlbXMuc2hvdygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRjb3VudGVySW5kZXgubm90KCBjb3VudGVySW5kZXhbIDAgXSApLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdCRzdGVwQmFjay5oaWRlKCk7XG5cdFx0c3RlcHNEYXRhLm5vZGUgPSAnJztcblx0XHRzdGVwc0RhdGEuZGlhZ25vc3RpYzEgPSAnJztcblx0XHRzdGVwc0RhdGEuZGlhZ25vc3RpYzIgPSAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdmVTdGVwKGluZGV4KXtcblx0XHQkc3RlcEJveC5yZW1vdmVDbGFzcygnYWN0aXZlJykuaGlkZSgpO1xuXHRcdCQoJHN0ZXBCb3hbaW5kZXhdKS5zaG93KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdGNvdW50ZXJJbmRleC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChjb3VudGVySW5kZXhbaW5kZXhdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRpZihpbmRleCA9PSAwKXtcblx0XHRcdHJlc2V0U3RlcDEoKTtcblx0XHRcdCQoJy5oaWRlLWJ0bicpLmhpZGUoKTtcblx0XHR9ZWxzZXtcblx0XHRcdCQoY291bnRlckluZGV4W2luZGV4XSkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHQkc3RlcEJhY2suY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcblx0XHRcdCQoJy5oaWRlLWJ0bicpLnNob3coKTtcblx0XHR9XG5cdFx0JC5hZGRyZXNzLnBhdGgoJ3N0ZXAtJysoaW5kZXgrMSkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RGF0YShzdHBEYXRhKXtcblx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHQgICAgdXJsOiBzdGVwVXJsLFxuXHRcdCAgICBkYXRhVHlwZTogJ2pzb24nLFxuXHRcdCAgICBkYXRhOiBzdHBEYXRhICBcblx0XHR9KTtcblx0fVxuXG5cblx0ZnVuY3Rpb24gZ2V0UmVzdWx0KHN0cERhdGEpe1xuXHRcdHZhciBmaW5hbHJlc3VsdCA9ICc/Ym9keV9wYXJ0PScgKyBzdHBEYXRhLmJvZHlfcGFydCArJyZub2RlPScgKyBzdHBEYXRhLm5vZGUgKyAnJmRpYWdub3N0aWMxPScgKyBzdHBEYXRhLmRpYWdub3N0aWMxICsgJyZkaWFnbm9zdGljMj0nICsgc3RwRGF0YS5kaWFnbm9zdGljMjtcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmRpdGlvblVybCArIGZpbmFscmVzdWx0O1xuXHR9XG5cdFxufSJdfQ==
