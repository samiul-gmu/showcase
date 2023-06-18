'use strict';

/*
// 93 - Scoping in Practice
function calc(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and I'm a millenial!`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Sami';
console.log(calc(1992));
*/

// 95 - Hoisting and TDZ in Practice
// Variables
console.log(me);
//console.log(job);
//console.log(birthYear);

var me = 'Sami';
let job = 'Developer';
const birthYear = 1992;

//
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
// var is a risky declaration. It let's you use variable before you declare it!
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!!!');
}

var x = 1;
let y = 2;
const z = 3;

// Variable declared with x with have it in the window object
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
