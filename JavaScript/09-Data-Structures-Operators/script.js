'use strict';

// 103 - Destructuring Arrays
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Weekdays
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  //thu: {
  [weekdays[3]]: {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // ES6 enhanced object literals
  openingHours, // In older version, we had to do this openingHours = openingHours,

  // order: function (startIndex, mainIndex) {
  //   return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 enhanced function
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // Real-world example: Using spread to send values of an array separately
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an array
const [x, y, z] = arr;

console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

const [, , third, forth] = restaurant.categories;
console.log(third, forth);

// Switching variables without temp
[first, second] = [second, first];
console.log(first, second);

// Receiving two return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested array
const nested = [2, 4, [5, 6]];
console.log(nested);

// const [i, , j] = nested;
// console.log(i, j);

// Nested destructuring of an array
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = -1, r = -1] = [8, 9]; // Setting default values; if the corresponding value is unavailable during destructuring, the default value will be used instead.

console.log(p, q, r);

// 104 - Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// We can set new names as well
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// We can also set default values
const {
  menu = [],
  starterMenu: starters = [],
  mainMenu: main = [],
} = restaurant;
console.log(`Menu: ${menu}\nStarters: ${starters}\nMains: ${main}`);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
// [b, a] = [a, b];
// console.log(a, b);

// Nested object destructuring
const {
  fri: { open: o, close: c, lunchBreak: lb = null },
} = openingHours;
console.log(o, c, lb);

// Detructuring of the object at the functions argument location
restaurant.orderDelivery({
  time: '22:30',
  address: 'Home',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  mainIndex: 1,
  address: 'Office',
});

// 105 - The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // Using spread element, we are taking all the elements of arr, and putting them as if they are side by side separated by commas
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Samiul';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//
const ingredients = [
  prompt(`Let's make pasta! Ingredients 1?`),
  prompt(`Let's make pasta! Ingredients 2?`),
  prompt(`Let's make pasta! Ingredients 3?`),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy);

// 106 - Rest Pattern and Parameters

// Destructuring

// SPREAD, beacuse on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [...menu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

console.log(add(1, 2, 3));
console.log(add(11, 2, 5, 8, 9, 7, 8));

const numberArray = [23, 5, 7, 9];
console.log(add(...numberArray));

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinash', 'cheese');
restaurant.orderPizza('cheese');

// 107 - Short Circuiting and

console.log('---- OR ----');
// OR can use ANY data type, return ANY data type, short-circuiting
// If the first value is a truthy value, it will immediately return that value regardless of what the other vlaue is. It will not look at the rest of the values (short circuiting).
console.log(3 || 'Sami');
console.log('' || 'Sami');
console.log(true || 'Sami');
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Sami');
console.log(7 && 'Sami');
console.log('Sami' && 'Tithi');
console.log('Hello' && 23 && null && 'Sami');

if (restaurant.orderPizza) restaurant.orderPizza('Mushroom', 'Spinach');

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');

// 108 - The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


// 109 - Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1);
console.log(rest2);

// 111 - Looping Arrays The forof Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, elem] of menu.entries()) {
  console.log(`${i + 1}: ${elem}`);
}

console.log(...menu.entries());
*/

// 112 - Enhanced Object Literals
// Changed delaration of openingHours
// changed definition of order function
// added weekdays array and using it to name a variable inside the openingHours array
