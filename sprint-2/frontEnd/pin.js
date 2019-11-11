function placePin(latitude, longitude, mapInstance){
    var myLatLng = {lat: latitude, lng: longitude};
    console.log(mapInstance);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: mapInstance,
        title: "first"
    });
}