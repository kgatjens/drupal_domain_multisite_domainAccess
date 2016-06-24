module.exports = function() {

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
            },

        ]
    }, {
        featureType: "water",
        stylers: [{
                lightness: 100
            }, {
                color: "#D1E2EF"
            }, {
                visibility: "simplified"
            },

        ]
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
        var items, markers_data = [];
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
                    if(item.node.image){
                        locationsHtml+= '<img src="' + item.node.image.src + '" alt="">';
                    }
                locationsHtml+='<div class="caption vcard" itemscope="" itemtype="http://schema.org/PostalAddress"><div class="adr street-address"><span itemprop="streetAddress">' + item.node.street + '</span></div><div class="location"><span>' + item.node.city + ', ' + item.node.province + ' '+ item.node.postal_code +'</span><span> ' + item.node.description + '</span></div></div></div><div class="info-buttons"><a href=tel:' + item.node.phone + ' class="phone-number" role="button"><span><svg class="right-down-ico"><use xlink:href="#phn_slant_ico"></use></svg></span>Call</a><a href="https://www.google.com/maps?saddr=My+Location&daddr=' + item.node.street + ',' + item.node.postal_code + ' ' + item.node.province + ',' + item.node.country +' " target="_blank" class="get-direction" role="button"><span><svg class="right-down-ico"><use xlink:href="#map_fold_ico"></use></svg></span>DIRECTIONS</a></div></div></div></div></div>';
            }
            $('.pure-oh-m-accordion-locations').append(locationsHtml);
        }

        map.addMarkers(markers_data);
    }

// Pan to the selected marker on the map

    $(document).on('click', '.pan-to-marker, .panel-heading', function(e) {
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

    map.on('marker_added', function(marker) {
        var index = map.markers.indexOf(marker);
        if (index == map.markers.length - 1) {
            map.fitZoom();
        }
    });

    var xhr = $.getJSON( host + "/locations-results?name=");

    xhr.done(loadResults);

}