describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    heathrow = new Airport();
    gatwick = new Airport(5);
    plane = jasmine.createSpyObj("plane", ["land", "takeOff"]);
  });

  describe("capacity", function() {
    it("has a default capacity", function() {
      expect(heathrow.capacity).toBe(10);
    });

    it("allow user to change capacity", function() {
      expect(gatwick.capacity).toBe(5);
    });
  });

  describe("land", function() {
    it("tells the plane to land", function() {
      heathrow.requestLand(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });

  describe("takeOff", function() {
    it("tells the plane to take off", function() {
      heathrow.requestTakeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });
  });

});
