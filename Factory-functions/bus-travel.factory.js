function BusTravel() {
  var thePoints = 0;
  var theLocation = 0;
  var amountSingle = 0;
  var amountReturn = 0;

  function travelPoints(points) {
    //takes input poits as parameter
    thePoints = points;
  }
  function getTravelPoints() {
    //return the number of
    return thePoints;
  }

  function startLocation(location) {
    theLocation = location;
    return theLocation;
  }
  function numSingleTrips() {
    if (theLocation == "Khayelitsha") {
      amountSingle = thePoints / 40;
    }
    if (theLocation == "Dunoon") {
      amountSingle = thePoints / 25;
    }
    if (theLocation == "Plain") {
      amountSingle = thePoints / 30;
    }
  }
  function numReturnTrips() {
    if (theLocation == "Khayelitsha") {
      amountReturn = thePoints / 80;
    }
    if (theLocation == "Dunoon") {
      amountReturn = thePoints / 50;
    }
    if (theLocation == "Plain") {
      amountReturn = thePoints / 60;
    }
  }
  function PeakHour() {
    if (theLocation == "Khayelitsha") {
      amountSingle = thePoints / 50;
      amountReturn = thePoints / 100;
    }
    if (theLocation == "Dunoon") {
      amountSingle = thePoints / 31.25;
      amountReturn = thePoints / 62.5;
    }
    if (theLocation == "Plain") {
      amountSingle = thePoints / 37.5;
      amountReturn = thePoints / 75;
    }
  }

  function getReturnTrips() {
    return Math.floor(amountReturn);
  }
  function getSingleTrips() {
    return Math.floor(amountSingle);
  }

  return {
    travelPoints,
    getTravelPoints,
    startLocation,
    PeakHour,
    numReturnTrips,
    getReturnTrips,
    numSingleTrips,
    getSingleTrips,
  };
}
