function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
            lat: -34.397,
            lng: 150.644
        }
    });
    var geocoder = new google.maps.Geocoder();

    var address = "3 Watt Street, Bentleigh East Victoria 3165, Australia";
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            marker.setAnimation(google.maps.Animation.BOUNCE);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
