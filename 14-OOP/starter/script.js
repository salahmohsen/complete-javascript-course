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

////////////////////////////////////////
// Inheritance with Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   const date = new Date();
//   console.log(date.getFullYear() - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear); //.call() instead of repeating ourselves!
//   this.course = course;
// };
// // Linking Proto Types!
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };
// const salah = new Student('Salah', 1995, 'Computer Science');
// salah.introduce();
// salah.calcAge();
// console.dir(salah.__proto__);
// console.dir(salah.__proto__.__proto__);

// console.log(salah instanceof Student);
// console.log(salah instanceof Person);
// console.log(salah instanceof Object);

/// Coding Challenge #3
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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// // Link with Car object
// EV.prototype = Object.create(Car.prototype);
// ///
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge = (parseFloat(this.charge) / 100 - 0.01) * 100 + '%';
//   console.log(
//     `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, '23%');
// tesla.accelerate();
// tesla.brake();

///////////////////////////////////////////////////////
// 220. Inheritance Between "Classes": ES6 Classes ////
///////////////////////////////////////////////////////

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     const date = new Date();
//     return date.getFullYear() - this.birthYear;
//   }
//   introduce() {
//     console.log(
//       `My name is ${this.firstName}, i'm ${this.calcAge()} and i'm studying ${
//         this.course
//       }`
//     );
//   }
// }

// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }
// }

// const salah = new Student('salah', 1995, 'computer science');
// salah.introduce();

///////////////////////////////////////////////////////
// 221. Inheritance Between "Classes": Object.create //
///////////////////////////////////////////////////////

// const Person = {
//   calcAge() {
//     const date = new Date().getFullYear();
//     console.log(date - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const Student = Object.create(Person);

// const salah = Object.create(Student);

// salah.init(salah, 1995);

///////////////////////////////////////////////////////
// 222. Another Class Example //
///////////////////////////////////////////////////////

// Public interface
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;
//   }
//   deposit(value) {
//     this.movements.push(value);
//   }
//   withdraw(value) {
//     this.deposit(-value);
//   }

// }

// const acc1 = new Account('salah', 'EGP', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1);

///////////////////////////////////////////////////////
// 223. Encapsulation: Protected Properties and Methods //
///////////////////////////////////////////////////////

// Public interface
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected Property
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//   }
//   getMovements() {
//     return this._movements;
//   }
//   deposit(value) {
//     this._movements.push(value);
//   }
//   withdraw(value) {
//     this.deposit(-value);
//   }
// }

// const acc1 = new Account('salah', 'EGP', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1.getMovements());

///////////////////////////////////////////////////////
// 224. Encapsulation: Private Class Fields and Methods //
///////////////////////////////////////////////////////

// Public interface
// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;
//   // 2) Private fields
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin; //Protected Proberty
//   }
//   // 3) Public methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(value) {
//     this.#movements.push(value);
//   }
//   withdraw(value) {
//     this.deposit(-value);
//   }
//   // 4) Private Methods
//   #approveLoad(val) {
//     return true;
//   }
// }

// const acc1 = new Account('salah', 'EGP', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1);
//console.log(acc1.#approveLoad());

///////////////////////////////////////////////////////
// 225. Chaining Methods //
///////////////////////////////////////////////////////

// Public interface
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;
  // 2) Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; //Protected Proberty
  }
  // 3) Public methods
  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
    return this;
  }
  withdraw(value) {
    this.deposit(-value);
    return this;
  }
  // 4) Private Methods
  #approveLoad(val) {
    return true;
  }
}

const acc1 = new Account('salah', 'EGP', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.deposit(250).withdraw(100).deposit(3000);
console.log(acc1.getMovements());
