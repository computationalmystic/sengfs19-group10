//FUNCTIONS FOR MAIN PAGE (PLACE PINS & DISPLAY STATISTICS INFO)

//PARSES THROUGH INPUT AND PROVIDES COUNT FOR "STATISTICS" REFERENCES ON MAIN PAGE
//calls endpoints
var request = new XMLHttpRequest();
request.open('GET', 'http://129.114.104.67:5000/api/unstable/repo-groups/20/committers-locations', true);
var count = 0;

//function to parse data
request.onload = function() {
    
    //parse
    var data = JSON.parse(this.response);

    //if you have a valid request
    if(request.status >= 200 && request.status < 400) {
        //for every repo
        data.forEach(repo => {
            //count the number of repos
            count++;
        });
    }
    //this is logging the number of repos not contributors
    console.log(count);
    document.getElementById("contributorText").textContent = "Repo Group 10: " + count + " contributors";
}
console.log(count);

var count2 = 0;
var request2 = new XMLHttpRequest();
request2.open('GET', 'http://129.114.104.67:5000/api/unstable/repo-groups/10/committers-locations', true);

//function to parse data
request2.onload = function() {

    //parse
    var data = JSON.parse(this.response);

    //if you have a valid request
    if(request2.status >= 200 && request2.status < 400) {
        //for every repo
        data.forEach(repo => {
            //count the number of repos
            count2++;
        });
    }
    //this is logging the number of repos not contributors
    console.log(count2);
    document.getElementById("contributorText2").textContent = "Repo Group 20: " + count2 + " contributors";
}

//document.getElementById("contributorText").textContent = count + count2;

request.send()
request2.send()






//PLACES THE PINS ON THE MAP FOR ENDPOINTS FOR REPO GROUP 10 AND GROUP 20
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




// TRY TO LOAD GOOGLE CHARTS BUT THIS & THE STATE.HTML PAGE W GOOGLE ARE DIFFERENT NOW
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Region', 'Contributors'],
  ['West', west],
  ['Midwest', midwest],
  ['South', south],
  ['Northeast', northeast]
])

  // Optional; add a title and set the width and height of the chart
  var options = {
      title:'Contributor Statistics By Region', 
      width:1000, 
      height:500,
      colors: ['lightblue', 'darkblue', 'green', 'lightgreen', 'darkblue', 'yellow'],
      is3D: true
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}