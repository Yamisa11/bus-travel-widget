//refferencing DOM elements
var points = document.querySelector(".points");
var location = document.getElementById("location");
var returnCheck = document.querySelector(".checkReturn");
var calculateBtn = document.querySelector(".calc");
var singleNumDisplay = document.querySelector(".singleNum");
var singlePriceDisplay = document.querySelector(".singlePrice");
var returnNumDisplay = document.querySelector(".returnNum");
var returnPriceDisplay = document.querySelector(".returnPrice");

//Factory function instance

// var busTravel = BusTravel()

// //DOM events
// var peaked = 0;

// calculateBtn.addEventListener('click', function(){
//     var selected = document.querySelector(
//         'input[class="peak"]:checked'
//      );

//     busTravel.travelPoints(points.value)
//     busTravel.startLocation(location.value)

//     if (selected.value == 'peak'){
//             busTravel.PeakHour()

//     }
//     if (selected.value == 'off-peak') {
//         if (returnCheck.checked) {
//             busTravel.numReturnTrips()
//         } else {
//             busTravel.numSingleTrips()
//         }
//     }

//     returnNumDisplay.innerHTML = busTravel.getReturnTrips()
//     singleNumDisplay.innerHTML = busTravel.getSingleTrips()

// })
