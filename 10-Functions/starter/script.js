// 'use strict';

// // ///////////////////////////////////////
// // // The call and apply Methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// // lufthansa.book(239, 'Jonas Schmedtmann');
// // lufthansa.book(635, 'John Smith');

// // const eurowings = {
// //   airline: 'Eurowings',
// //   iataCode: 'EW',
// //   bookings: [],
// // };

// // const book = lufthansa.book;

// // // Does NOT work
// // // book(23, 'Sarah Williams');

// // // Call method
// // book.call(eurowings, 23, 'Sarah Williams');
// // console.log(eurowings);

// // book.call(lufthansa, 239, 'Mary Cooper');
// // console.log(lufthansa);

// // const swiss = {
// //   airline: 'Swiss Air Lines',
// //   iataCode: 'LX',
// //   bookings: [],
// // };

// // book.call(swiss, 583, 'Mary Cooper');

// // // Apply method
// // const flightData = [583, 'George Cooper'];
// // book.apply(swiss, flightData);
// // console.log(swiss);

// // book.call(swiss, ...flightData);

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     // let answer = prompt(`What is your favourite programming language?
//     //  0: JavaScript
//     //  1: Python
//     //  2: Rust
//     //  3: C++
//     //  (Write option number)`);
//     //Number(answer) <4? this.options
//     console.log();
//   },
// };
// poll.registerNewAnswer();

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let x = 1; x < nums.length; x++) {
//       if (nums[i] + nums[x] == target) {
//         return [nums.indexOf(nums[i]), nums.indexOf(nums[x])];
//       }
//     }
//   }
// };

const twoSum = function (nums, target) {
  nums.reduce((a, b) => (a + b == target ? a + b : -1));
};

console.log(
  twoSum([3, 2, 4], 6) // Output: [1,2]
);
