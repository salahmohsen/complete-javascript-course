'use strict';

// 212. Coding Challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.make, 'Speed After Acceleration', this.speed, 'Km/h');
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.make, 'Speed After Brake', this.speed, 'Km/h');
// };

// const bmw = new Car('BMW', 120);

// bmw.accelerate();
// bmw.brake();

///////////////////////////////////////////////////////////
// 217. Coding Challenge #2
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.make, 'Speed After Acceleration', this.speed, 'Km/h');
  }
  brake() {
    this.speed -= 5;
    console.log(this.make, 'Speed After Brake', this.speed, 'Km/h');
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(Speed) {
    this.speed = Speed * 1.6;
  }
}

const bmw = new Car('BMW', 120);

const Ford = new Car('Ford', 120);
Ford.speedUS = 40;
console.log(Ford);
