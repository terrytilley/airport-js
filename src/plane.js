function Plane() { this.Airbourne = true; }

Plane.prototype.isAirbourne = function() {
  return this.Airbourne;
};

Plane.prototype.land = function() {
  this.Airbourne = false;
};

Plane.prototype.takeOff = function() {
  this.Airbourne = true;
};
