var map = null;
// 위도
var lat = 37.51528;
// 경도
var lng = 126.9075611;

$(function () {
    map = new GMaps({
        "el": "#map",
        "lat": lat,
        "lng": lng
    })

    $("#geocoding_form").submit(function (e) {
        e.preventDefault();
        var address = $("address").val().trim();

        if (!address) {
            alert("주소를 입력해 주세요.");
            return false;
        }
        
        GMaps.geocode({
            "address": address,
            "callback": function (results, status) {
                // 구글 Open Api 연동 성공시
                if (status == 'OK') {
                    var latlng = results[0].geometry.location;

                    map.setCenter(latlng.lat(), latlng.lng());

                    map.addMarker({
                        "lat": latlng.lat(),
                        "lng": latlng.lng(),
                        "infoWindow": {
                            "content": address
                        }
                    });
                }
            }
        });

    });
});