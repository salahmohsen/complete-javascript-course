'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['sat', 'sun', 'mon', 'tue', 'wednes', 'thurs'];

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  weekDays,
  openingHours: {
    [weekDays[5]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ time, address, starterMenu, mainMenu }) {
    console.log(
      this.starterMenu[starterMenu],
      'and',
      this.mainMenu[mainMenu],
      `will take ${time} to arrive to ${address}`
    );
  },

  order: function (x) {
    return x;
  },
};

// function xx(x) {
//   console.log(x);
// }

// for (const day of weekDays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day} we open at ${open}`);
// }

// for (const day of weekDays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`in ${day} we open at ${open}`);
// }
// const [optionOne, optionTwo, optionThree] = restaurant.categories;

// const { open, close } = restaurant.openingHours.thu;

// restaurant.orderDelivery({
//   time: '2h',
//   address: 'Maadi',
//   starterMenu: 2,
//   mainMenu: 0,
// });

// const [pizza, , risotto, ...other] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, other);

// const { fri, ...rest } = restaurant.openingHours;

// console.log(rest);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const [i, el] of menu.entries()) {
//   console.log(i + 1, el);
// }

// console.log(restaurant.order?.('Hiii') ?? 'not exist');

// const entries = Object.entries(restaurant.openingHours);

// for (const [openday, { open, close }] of entries) {
//   console.log(`We open on ${openday} at ${open} and colsed at ${close}`);
// }

// const stuff = ['manager', 'senior team leader', 'edittor', 'manager'];

// const stuffUnique = new Set(stuff);

// const rest = new Map();

// rest
//   .set('name', 'Salah Mohsen')
//   .set('age', 27)
//   .set('Mobile phone', 1025295958)
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// const timee = 13;

// console.log(rest.get(timee > rest.get('open') && timee < rest.get('close')));
// console.log(rest.delete('open'));
// console.log(rest.has('open'));

// const quiz = new Map([
//   ['what is the best programming language', '?'],
//   [1, 'c'],
//   [2, 'javascript'],
//   ['correct', 2],
//   [true, 'congrats'],
//   [false, 'good luck next time'],
// ]);

// console.log(quiz);

// const newOH = new Map(Object.entries(restaurant.openingHours));

// console.log(newOH);

// for (const [key, value] of quiz) {
//   typeof key === 'number' ? console.log(`answer ${key} is ${value}`) : null;
// }

// const answer = Number(prompt('your answer'));

// console.log(quiz.get(quiz.get('correct') === answer));

// const capitalizeName = function (name) {
//   let capitalizedName = '';
//   for (const letter of name.split(' ')) {
//     capitalizedName += letter[0].toUpperCase() + letter.slice(1) + ' ';
//   }
//   console.log(capitalizedName);
// };

// capitalizeName('salah mohsen mohamed');

// -----------

// const creditNumber = '10508964065106489603';
// const maskedNumber = creditNumber.slice(-3);
// console.log(maskedNumber.padStart(creditNumber.length, '*'))
