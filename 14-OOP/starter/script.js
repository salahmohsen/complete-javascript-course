'use strict';

// 212. Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.make, 'Speed After Acceleration', this.speed, 'Km/h');
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.make, 'Speed After Brake', this.speed, 'Km/h');
};

const bmw = new Car('BMW', 120);

bmw.accelerate();
bmw.brake();
