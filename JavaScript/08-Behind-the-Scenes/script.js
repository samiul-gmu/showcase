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

// 97 - The this Keyword in Practice
// this keyword will point to the window of the global scope
console.log(this);

// this keyword here will be undefined as regular function does not get the global object in strict mode
const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(1992);

// this keyword here will get the global window as the arrow function gets its lexical parent
const calcArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcArrow(1992);

// this keyword used inside a function that is part of an object will return that object
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

jonas.calcAge();

// An example, where we are borrowing a method from another class to another. this keyword is actually point to the object on which it gets invoked.
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
console.log(matilda);
matilda.calcAge();

// copying the function to a variable
const f = jonas.calcAge;

//f(); // this will produce an error as the this keyword here is undefined as we are not calling the function on an object

// 98 - Regular Functions vs Arrow Functions

// var firstName = 'Matilda'; // This is a very risky business going on here. We are using var to define firstName. Unlike let and const, var will create this and include it in the window function. So, later when we call greet (an arrow function) on Jonas, and use this inside it, as per the property of an arrow function, this keyword will not point to jonas but to the global. Meaning, this.firstName will print Matilda

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // solution 1
    // const self = this;
    // console.log(this);
    // console.log(2023 - this.year);

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); // this keyword will not point here to jonas's firstName. Arrow function does not have its own this keyword. It will get from its global scope which points to window object. Even though firstName does not exist in the window object and instead of showing this with an error, JS shows that returning undefined.

jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addExpr(2, 3, 5, 3, 8)); // in javascript, even though a function takes in a fixed number of arguments, we can send more.

const addArrow = (a, b) => {
  //console.log(arguments); // arrow function does not have argument keyword
  return a + b;
};

console.log(addArrow(2, 3, 5, 4));

// 99 - Primitives vs Objects Primitive vs Reference Types
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me; // Here, we are not doing a deep copy; it is just copying references
friend.age = 27;

console.log(friend.age);
console.log(me.age);

// 100 - Primitives vs Objects in Practice
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
};

const marriedJessica = jessica; // Both of them will point to the same object; we are just copying reference
marriedJessica.lastName = 'Davis';

console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const copyOfJessica2 = Object.assign({}, jessica2);

copyOfJessica2.lastName = 'Davis';

console.log('Before Marriage:', jessica2);
console.log('After Marriage:', copyOfJessica2);

copyOfJessica2.family.push('Mary');
copyOfJessica2.family.push('John');

console.log('Before Marriage:', jessica2);
console.log('After Marriage:', copyOfJessica2);
*/
