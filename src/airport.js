function Airport(capacity = 10) { this.capacity = capacity; }

Airport.prototype.requestLand = function(plane) {
  plane.land();
};

Airport.prototype.requestTakeOff = function(plane) {
  plane.takeOff();
};
