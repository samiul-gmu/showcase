'use strict';
/*
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
};

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
*/
