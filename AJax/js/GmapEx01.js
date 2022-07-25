var map = null;

var lat = 37.51528;
var lng = 126.9075611;

$(function () {
    map = new GMaps({
        "el" : "#map", // 표시될 것
        "lat" : lat, // 위도
        "lng" : lng, // 경도
        "zoomControl" : true // 확대
    });

    map.addMarker({
        "lat" : lat,
        "lng" : lng,
        "title" : '글로벌인',
        "click" : function(e){
            console.log(e);
        },
        "mouseover" : function(e) {
            console.log(e);
        },
        "infoWindow" : {
            "content" : '<p>글로벌인</p>'
        }
    });

});