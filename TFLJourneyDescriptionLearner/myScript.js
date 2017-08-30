/*This is my JS script for the TFL API exercise*/

//alert("hello");

var theButton = document.getElementById("mySubmit");

theButton.addEventListener("click", getPost, false);

var opt1Button = document.getElementById("option1");

opt1Button.addEventListener("click", opt1, false);

var opt2Button = document.getElementById("option2");

opt2Button.addEventListener("click", opt2, false);

var opt3Button = document.getElementById("option3");

opt3Button.addEventListener("click", opt3, false);

var choiceIndex = 0;

function getPost() {
    
    var userDepPC = document.getElementById("depPC").value;
    var userArrPC = document.getElementById("arrPC").value;
    
    var theAPICall = "https://api.tfl.gov.uk/journey/journeyresults/" + userDepPC + "/to/" + userArrPC;
    
//https:api.tfl.gov.uk/journey/journeyresults/51.501,-0.123/to/n225nb
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", theAPICall, true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
            
            document.getElementById("journeyD").innerHTML = myData.journeys[choiceIndex].duration;

            document.getElementById("startDT").innerHTML = myData.journeys[choiceIndex].startDateTime;

            document.getElementById("arrivalDT").innerHTML = myData.journeys[choiceIndex].arrivalDateTime;
            
            document.getElementById("stepsD").innerHTML = "";
            
            for(var i = 0; i<myData.journeys[choiceIndex].legs.length; i++){
                document.getElementById("stepsD").innerHTML += myData.journeys[choiceIndex].legs[i].instruction.summary + " <br> ";
	       }
        }
    } 
    myRequest.send();
}

/* ==================== OPTION FUNCTIONS =================== */

function opt1 () {

        choiceIndex = 0;

        getPost();
    }

function opt2 () {

        choiceIndex = 1;

        getPost();
    }

function opt3 () {

        choiceIndex = 2;

        getPost();
    }

/* ============================== SWITCH FUNCTION ============================= */

function swapValues(){
    var tmp = document.getElementById("depPC").value;
    document.getElementById("depPC").value = document.getElementById("arrPC").value;
    document.getElementById("arrPC").value = tmp;
}

/*---------------------------------------------------------------------
                        GOOGLE MAP SCRIPT
---------------------------------------------------------------------*/
        
function initMap() {
        var uluru = {lat: 0.0760, lng: 51.5131};
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


