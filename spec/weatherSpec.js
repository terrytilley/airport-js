describe("Weather", function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe("stormy", function() {
    it("weather is stormy", function() {
      spyOn(Math, "random").and.returnValue(0.9);
      expect(weather.stormy()).toBe(true);
    });
  });

});
