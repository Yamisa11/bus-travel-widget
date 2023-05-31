//refferencing DOM elements
var points = document.querySelector(".points");

// alert("...");


var returnCheck = document.querySelector(".checkReturn");
var calculateBtn = document.querySelector(".calc");
var singleNumDisplay = document.querySelector(".singleNum");
var singlePriceDisplay = document.querySelector(".singlePrice");
var returnNumDisplay = document.querySelector(".returnNum");
var returnPriceDisplay = document.querySelector(".returnPrice");

var locate = document.querySelector(".location");



//Factory function instance

var busTravel = BusTravel()

// //DOM events
var peaked = 0;

calculateBtn.addEventListener('click', function(){
    var selected = document.querySelector(
        'input[class="peak"]:checked'
     );

    busTravel.travelPoints(points.value)
    busTravel.startLocation(locate.value)

    if (selected.value == 'peak'){
           if (returnCheck.checked == true) {
            busTravel.PeakHour()
            returnNumDisplay.innerHTML = busTravel.getReturnTrips()
            returnPriceDisplay.innerHTML = busTravel.pricesReturn()
           }else{
            busTravel.PeakHour()
            singleNumDisplay.innerHTML = busTravel.getSingleTrips()
            singlePriceDisplay.innerHTML = busTravel.pricesSingle()
           }

    }
    if (selected.value == 'off-peak') {
        if (returnCheck.checked == true) {
            busTravel.numReturnTrips()
            returnNumDisplay.innerHTML = busTravel.getReturnTrips()
            returnPriceDisplay.innerHTML = busTravel.pricesReturn()
        }else {
            busTravel.numSingleTrips()
            singleNumDisplay.innerHTML = busTravel.getSingleTrips()
            singlePriceDisplay.innerHTML = busTravel.pricesSingle()
        }
    }

   
  
  

})
