
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

// 39 - Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

const years = new Array(1991, 198, 2008, 2020);

console.log(years);

console.log(`First name from the friends array: ${friends[0]}`);
console.log(`Third name from the friends array: ${friends[2]}`);
console.log(`Number of friends: ${friends.length}`);

console.log(`Last element from the years array: ${years[years.length - 1]}`);

// replacing element
friends[2] = 'Jay';
console.log(friends);
// Even though array 'friends' was delared with 'const', we just changed it's content
// We still cannot change the address that we are storing in that 'friends' varaible but can change

// We can have array that can have values of different types
const jonas = ['Jonas', 'Anderson', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Age calculator
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];

// Here we are trying to subtract an array of numbers in that calcAge function instead of a number that we should have passed; hence, we are getting NaN.
console.log(calcAge(years2));

const age1 = calcAge(years2[0]);
console.log(age1);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);

// 40 - Basic Array Operations Methods
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
let newLength = friends.push('Jay'); // insert at the end
console.log(friends);
console.log(newLength);

newLength = friends.unshift('John'); // insert at the front
console.log(friends);
console.log(newLength);

// Remove elements
friends.pop();
let removedElem = friends.pop() // remmoves the last element
console.log(friends);
console.log(removedElem);

console.log(`Removing from the front!`)
console.log(friends.shift());
console.log(friends);

console.log(friends.indexOf('Sam'));
console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven')); // Works similar to indexOf but does not return the index. Insted returns a boolean based on the provided attribute exists in the array or not.

friends.push(23); // Inserting a number to see if includes does type cooersion.

console.log(friends.indexOf('23')); // indexOf does not do type cooersion
console.log(friends.indexOf(23)); // indexOf does not do type cooersion

console.log(friends.includes('23')); // includes does not do type cooersion
console.log(friends.includes(23)); // includes does not do type cooersion

// 42 - Introduction to Objects
const jonasArray = ['Jonas', 'Anderson', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];
console.log(jonasArray);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Anderson',
    birthYear: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

// 43 - Dot vs Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Anderson',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
// dot(.) operator to call an property of an object
console.log(jonas.lastName);
console.log(jonas.friends);

// brackets notation: here we are entering property name as a string.
// here we can actually put any expression
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(`First name: ${jonas['first' + nameKey]}`);
console.log(`Last name: ${jonas['last' + nameKey]}`);

const interestedIn = prompt(`What do you want to know about Jonash? Choose between firstName, lastName, age, job, and friends`);

// jonas[interestedIn] gives us 'undefined' which is a falsy value
if (jonas[interestedIn]) console.log(`${jonas[interestedIn]}`);
else console.log(`We do not have that information!`);

jonas.location = 'Portugal';
jonas['twitter'] = '@iamjonas';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

// 44 - Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Anderson',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        //console.log(this);
        return this.age;
    },

    getSummary: function () {
        return `${this['firstName']} ${this.lastName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : 'does not have'} a driver's license.`;
    }
};

console.log(`Age of ${jonas.firstName} ${jonas.lastName}: ${jonas.calcAge()} year(s).`);
console.log(jonas.getSummary());
