/*
// 10 - Values and Variables
let js = 'amazing';

// This does an alert based on the specified condition
//if (js == 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = 'Jonas';
console.log("First Name: " + firstName);

let PI = 3.1416;

// 12 - Data Types
let bool = true;
console.log("Trying out a boolean variable: " + bool);

console.log("Type of the variable PI: " + typeof PI);
console.log("Type of the variable firstName: " + typeof firstName);

console.log("Type of the variable bool: " + typeof bool);

// dynamic typing allows to store a value of a different to type in a variable which has been
// declared with a a different type value before. For example, the bool variable was definded with a boolean.
// Now we are storing a number in it and then logging its type. Its type gets changed to number accordingly.

bool = 75;
console.log("Type of the variable has been changed to bool: " + typeof bool);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// This is an example of a JavaScript bug. It shows type of null is object which does not makes sense.
// Even though its a bug, it was never corrected for legacy reasons.
console.log(typeof null);

// 13 - let const and var
// let allows us to declare variables and change their contents later
let age = 30;
age = 31;

// const makes the variable immutable; once it gets delcared, it cannot be changed
const birthYear = 1991;
//birthYear = 1990; // this line will produce an TypeError "Assignment to constant variable."

// We cannot delare empty variables with const as we cannot change them after we declare them.
// const birthYear; // This is not allowed. SyntaxError: Missing initializer in const declaration

// There are ways of declaring variable using var. But, now with modern JS, we should avoid this.
var job = "Programmer";
job = "Developer";
console.log(job);
// var may seem similar to let but there are differences.
// let is block-scoped and var is function-scoped. More on this later.

// We can use a variable like below. Terrible though. It does not create a variable in the current scope
// they gets created on global.

varaibaleWithoutDef = "Will it work?";
console.log(varaibaleWithoutDef);

// 14 - Basic Operators
const now = 2037;
// Math operators
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log("Age of Jonas", ageJonas, "and Sarah", ageSarah);

// 2**3 means 2 to the power of 3 = 2*2*2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// typeof is also an operator that tells us the type of a variable. We have used it above already.

// Belows are assignment operators
let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);

x++;
console.log(x);

x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
console.log(ageJonas == ageSarah);


// 15 - Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// Above link has a table showing operator precedence (need to scroll down); Have a look.

// Declaring two empty values in one line.
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// 17 - Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

// Example of template literals; doing the same thing as above.
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`With template literals
multiline strings
have become extremely
easy to print!`);

// 18 - Taking Decisions if else Statements
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license! 🚘`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. She needs to wait another ${yearsLeft} year(s)!`);
}
let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`${century}`);

// 20 - Type Conversion and Coercion
// Type conversion is when we explicitely convert type of a variable
const inputYear = '1991'; // setting it as string
console.log(inputYear + 18); // trying to add 18 with the year but it will just concatenate it

// We need to convert it to number before adding 18
console.log(Number(inputYear) + 18); // Now, it is working as intended
// Thing to note: We are just converting or casting it during printing. The actual variable is still in string

console.log(Number(inputYear), inputYear) // Here, we are printing both the number and string version

console.log(Number('Sample Text')); // This will print NaN as a text cannot be converted to number

console.log(String(23), 23) // Here we convert 23 to its string version

// Type coercion is when an operator is dealing with variables of two different types. JS convert of them automatically
console.log("I'm " + 23 + " years old"); // Here, type coercion is taking place. 23 is getting converted to String

console.log('23' - '10' - 3); // Here, minus sign is triggering type coercion where all the strings are getting converted to numbers.

console.log('23' + '10' + 3); // Here, plus sign does not do similar job as minus sign did above; rather, it concatenate them all assuming they all should be string

console.log('23' * '10' * 3);

console.log('23' / '10' * 3);

let n = '1' + 1;
n = n - 1;
console.log(n);

// 21 - Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
// everything else is truthy values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean(1));
console.log(Boolean('Samiul'));
console.log(Boolean(' ')); // String with even a space in it will become true
console.log(Boolean({})); // Empty object will become true

const money = 0;
if (money) {
    console.log(`Don't spend all!`);
} else {
    console.log(`You should get a job!`);
}

let height = 0; // Since 0 is a falsy value, we cannot actually check like this if we want to see if the height is undefined.
if (height) {
    console.log(`YAY! Height is defined!`);
} else {
    console.log(`Height is UNDEFINED!`);
}
*/
