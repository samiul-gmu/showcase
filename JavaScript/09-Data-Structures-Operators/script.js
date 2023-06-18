'use strict';

// 103 - Destructuring Arrays
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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

  order: function (startIndex, mainIndex) {
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
*/

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
