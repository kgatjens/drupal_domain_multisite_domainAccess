var inject = require('./utils');
module.exports = function() {

    // function that call ajax modal info

    $('.modal-team .modal-action').on('click', function(e) {
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
            success: function(data) {
                $("#modalDetails .modal-loader, #modalTeam .modal-loader").hide();
                $("#modalDetails .modal-dialog, #modalTeam .modal-dialog").show();
                if (data.nodes.length > 0) {
                    items = data.nodes;

                    function setCertification(data = '', title = ''){
                        htmlCertifications += '<h5>'+title+'</h5>' + data;
                    }

                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if(i == 0){

                            if(item.node.name){
                                htmlName += 'Get social, share ' + item.node.name + ', ' + item.node.degree+ ', information through:'
                            }

                            if (item.node.photo) {
                                htmlImg += '<img src="' + item.node.photo.src + '" alt="' + item.node.photo.alt + '">';
                            }

                            if (item.node.speciality) {
                                htmlHeaderInfo += '<h4>' + item.node.speciality + '</h4><h2 class="name">' + item.node.name + '</h2><h3>' + item.node.degree + '</h3>';
                                inject.injectUrl(item.node.name);
                            }

                            var certifications = [
                                {data:item.node.medical_school, title:"Medical School"},
                                {data:item.node.internship, title:"Internship"},
                                {data:item.node.residency, title:"Residency"},
                                {data:item.node.fellowship, title:"Fellowship"},
                                {data:item.node.board_certification, title:"Board Certification"}
                            ]

                            $.each(certifications, function(index,elem) {
                                if(elem.data && elem.data !=""){
                                    setCertification(elem.data, elem.title);
                                }
                            });

                            var otherInfo = eval(item.node.other_info);

                            if(otherInfo && otherInfo.length > 0){
                                for(var e = 0; e < otherInfo.length; e++){
                                    setCertification(otherInfo[e].text, otherInfo[e].title);
                                }
                            }
                            if(item.node.field_links){
                                var links = item.node.field_links.split("\n");
                                var target = '';
                                var titles = [];
                                var theLinks = [];
                                $.each(links, function(index, elem) {

                                    var theString = elem.trim();

                                    if(theString != "" && theString != ","){
                                        var tiIndex = theString.indexOf('Title:');
                                        var lIndex = theString.indexOf('Link:');
                                        var tIndex = theString.indexOf('Target');

                                        if(tiIndex != -1){
                                            var currentTitle = theString.substring((tiIndex + ('Title:&nbsp;'.length)), lIndex);
                                        }

                                        titles.push(currentTitle);

                                        if(tIndex != -1){
                                            var currentLink = theString.substring((lIndex + ('Link:&nbsp;'.length)), tIndex);
                                        }else{
                                            currentLink = theString.substring((lIndex + ('Link:&nbsp;'.length)));
                                        }

                                        theLinks.push(currentLink);

                                    }
                                });
                                $.each(titles, function(index, el) {
                                    if (el != "" && (el.indexOf('&nbsp;') == -1)){
                                        htmlLinksTab += '<a class="link" href="'+theLinks[index]+'" target="_blank">' + el +'</a>';

                                    }else{
                                        if(theLinks[index] != '#'){
                                            htmlLinksTab += '<a class="link" href="'+theLinks[index]+'" target="_blank">'+theLinks[index]+'</a>';
                                        }
                                    }
                                });
                            }else {
                                htmlLinksTab = '<p class="no-links">No links provided</p>';
                            }
                        }
                        // loop through keys
                        if(item.node.location_city){
                            htmlLocations += '<div class="direction">';
                            if(item.node.location_city){
                                htmlLocations += '<p>' + item.node.location_city;
                                if(item.node.location_type){
                                    htmlLocations += ' <a href="#" class="location">' + item.node.location_type + '</a>';
                                }
                                htmlLocations += '</p>';
                            }
                            if(item.node.location_street){
                                htmlLocations += '<p class="address">' + item.node.location_street + '</p>';
                            }
                            if(item.node.location_city){
                                htmlLocations+= '<p class="address">' + item.node.location_city + ', GA ';
                                if(item.node.location_postal_code){
                                    htmlLocations += item.node.location_postal_code;
                                }
                                htmlLocations += '</p>';
                            }
                            if(item.node.location_type){
                                htmlLocations += '<a href="https://www.google.com/maps?saddr=My+Location&daddr=' + item.node.location_type + ',' + item.node.location_street + ',' + item.node.location_postal_code + ',' + item.node.location_province + ',' + item.node.location_country + '" target="_blank" class="map text-center"><svg xmlns="http://www.w3.org/2000/svg" width="27.2" height="27.2" viewBox="110.4 106.4 67.2 67.2"><path fill="#508FBB" d="M110.4 140c0 18.6 15 33.6 33.6 33.6s33.6-15 33.6-33.6-15-33.6-33.6-33.6-33.6 15-33.6 33.6zm59.9 0c0 14.5-11.8 26.3-26.3 26.3s-26.3-11.8-26.3-26.3 11.8-26.3 26.3-26.3 26.3 11.8 26.3 26.3zm-40.4-6.6v13.1h14.9v8.2l13.9-14.8-13.9-14.8v8.2h-14.9z"/></svg>Directions</a>';
                            }
                            if(item.node.location_phone){
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
                }


            }
        });
    });

}