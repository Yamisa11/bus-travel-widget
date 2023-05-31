describe("Bus Travel Widget", function(){
    it('should be able to set and get amount of 40 points', function(){
        var busTravel = BusTravel()

        busTravel.travelPoints(40)
        assert.equal(40, busTravel.getTravelPoints());
    })
    it('should be able to set and get location Khayelitsha', function(){
        var busTravel = BusTravel()

        
        assert.equal("Khayelitsha", busTravel.startLocation("Khayelitsha"));
    })
    it('should be able to set and get 50 points and also location Dunoon', function(){
        var busTravel = BusTravel()

        busTravel.travelPoints(50)
        assert.equal(50, busTravel.getTravelPoints());
        assert.equal("Dunoon", busTravel.startLocation("Dunoon"));
    })
    it('should be able to set and get 100 points, location Mitchells Plain and return number of single trips 3', function(){
        var busTravel = BusTravel()

        busTravel.travelPoints(100)
        busTravel.startLocation("Plain")
        busTravel.numSingleTrips()
        assert.equal(3, busTravel.getSingleTrips());
    })
    it('should be able to set and get 400 points, location Khayelitsha and return number of return trips', function(){
        var busTravel = BusTravel()

        busTravel.travelPoints(400)
        busTravel.startLocation("Khayelitsha")
        busTravel.numReturnTrips()
        assert.equal(5, busTravel.getReturnTrips());
    })
    it('should be able return number of single trips from Khayelitsha and Dunoon peak hour', function(){
        var busTravel = BusTravel()

        busTravel.travelPoints(400)
        busTravel.startLocation("Khayelitsha")
        busTravel.PeakHour()
        assert.equal(8, busTravel.getSingleTrips());


        busTravel.travelPoints(250)
        busTravel.startLocation("Dunoon")
        busTravel.PeakHour()
        assert.equal(8, busTravel.getSingleTrips());
    })
    it('should be able return number of return trips from Mitchells Plain and Dunoon peak hour', function(){
        var busTravel = BusTravel()

        busTravel.travelPoints(930)
        busTravel.startLocation("Plain")
        busTravel.PeakHour()
        assert.equal(12, busTravel.getReturnTrips());

        busTravel.travelPoints(550)
        busTravel.startLocation("Dunoon")
        busTravel.PeakHour()
        assert.equal(8, busTravel.getReturnTrips());
    })
})