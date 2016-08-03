describe("Plane", function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("isAirbourne", function() {
    it("Starts as not airbourne", function() {
      expect(plane.isAirbourne()).toBe(true);
    });
  });

  describe("land", function() {
    it("Change plane to landed", function() {
      plane.land();
      expect(plane.isAirbourne()).toBe(false);
    });
  });

  describe("takeOff", function() {
    it("Changes plane to airbourne", function() {
      plane.land();
      plane.takeOff();
      expect(plane.isAirbourne()).toBe(true);
    });
  });

});
