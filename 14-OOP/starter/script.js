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
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.make, 'Speed After Acceleration', this.speed, 'Km/h');
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.make, 'Speed After Brake', this.speed, 'Km/h');
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(Speed) {
//     this.speed = Speed * 1.6;
//   }
// }

// const bmw = new Car('BMW', 120);

// const Ford = new Car('Ford', 120);
// Ford.speedUS = 40;
// console.log(Ford);

// Inheritance with Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  const date = new Date();
  console.log(date.getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //.call() instead of repeating ourselves!
  this.course = course;
};
// Linking Proto Types!
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};
const salah = new Student('Salah', 1995, 'Computer Science');
salah.introduce();
salah.calcAge();
console.dir(salah.__proto__);
console.dir(salah.__proto__.__proto__);

console.log(salah instanceof Student);
console.log(salah instanceof Person);
console.log(salah instanceof Object);
