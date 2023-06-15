
// 32 - Activating Strict Mode
// Helps us to write secure javascript code
// This mode forbids us to do certain things
// It will create visible errors; without it, javascript will fail silently

'use strict'; // with this string (as the very first statement), we activate strict mode for this entire script
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // If I make a mistake with the variable name 'hasDriversLicense', without strict mode, it will not get caught in the browser console. Enabling strict mode helps us getting this caught.
if (hasDriversLicense) console.log(`I can Drive :D`)

// const interface = 'Audio'; // this word is a reserve word. Strict mode helps us get that.

// const private = 72; same reserved keyword

// 33 - Functions
function logger() {
    console.log(`My very first function!`);
}

// calling, running, or invoking the function
logger();


function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}

const appleJuice = fruitProcessor(10, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 3);
console.log(orangeJuice);

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);

// Example of a built in function
const num = Number('107');
console.log(num);

// 34 - Function Declarations vs Expressions

const age1 = calcAge1(1991);
console.log(age1);

// function declaration
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    //return age;
    return 2037 - birthYear;
}

// function expression
// Example of an annonymous function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

// we can call a function declaration even before declaring it but cannot do that for function expression


// 35 - Arrow Functions
// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} year(s)!`;
}

console.log(yearsUntilRetirement(1991, 'Max'));

// Arrow functions do not get 'this' keyword

// 36 - Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges!`;
    return juice;
}

console.log(fruitProcessor(7, 3));

// 37 - Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// function expression
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) return `${firstName} retires in ${retirement} year(s)!`;
    else return `Retirement is due!`;
}

console.log(yearsUntilRetirement(1992, 'Samiul'));
console.log(yearsUntilRetirement(1970, 'Jamil'));
*/

// 39 - Introduction to Arrays
const friend1 = 'Michael';
