var markersArray = [];
var marker;

function placePinByRepo(mapInstance, value){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function(){
        if(xmlHttp.status == 200 && xmlHttp.readyState == 4){
                        
            var response = xmlHttp.responseText;
            response = JSON.parse(response);
            
            var locationArray = JSON.parse(this.responseText);
			locationArray.forEach(function(contributor) {
                var latitude = contributor.cntrb_lat;
                var longitude = contributor.cntrb_long;
                
                var myLatLng = {lat: latitude, lng: longitude};
//                console.log(mapInstance);
                
                marker = new google.maps.Marker({
                    position: myLatLng,
                    map: mapInstance,
                    title: "title",
                    animation: google.maps.Animation.DROP
                });
                markersArray.push(marker);
			});
            console.log(markersArray);
        }
    }
    
    var reqURL = "http://129.114.104.67:5000/api/unstable/repo-groups/" + value + "/committers-locations";
    xmlHttp.open("GET", reqURL, true);
    xmlHttp.send();
}

function placePinDropDown(mapInstance, value){
    var xmlHttp = new XMLHttpRequest();
    for (i = 0; i<markersArray.length; i++){
        var oldMarker = markersArray.pop();
        oldMarker.setMap(null);
    }
    xmlHttp.onload = function(){
        if(xmlHttp.status == 200 && xmlHttp.readyState == 4){
                        
            var response = xmlHttp.responseText;
            response = JSON.parse(response);
            
            var locationArray = JSON.parse(this.responseText);
			locationArray.forEach(function(contributor) {
                var latitude = contributor.cntrb_lat;
                var longitude = contributor.cntrb_long;
                
                var myLatLng = {lat: latitude, lng: longitude};
//                console.log(mapInstance);
                
                marker = new google.maps.Marker({
                    position: myLatLng,
                    map: mapInstance,
                    title: "title",
                    animation: google.maps.Animation.DROP
                });	
                markersArray.push(marker);
			});
        }
        console.log(markersArray);

    }
    
    var reqURL = "http://129.114.104.67:5000/api/unstable/repo-groups/" + value + "/committers-locations";
    xmlHttp.open("GET", reqURL, true);
    xmlHttp.send();
}