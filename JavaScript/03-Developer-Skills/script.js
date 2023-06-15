// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// 55 - Setting up Prettier and VS Code
// 56 - Installing Nodejs and Setting Up a Dev Environment
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1995));

// 57 - Learning How to Code
// Think of a big project where you can showcase all of your skills
*/

// 58 - How to Think Like a Developer Become a Problem Solver
// 1. Understand the problem (ask the right questions to understand it fully)
// 2. Divide and conquer (break it into sub-problems)
// 3. Don't be afraid to research to find an optimal solution
// 4. Start with the pseudo code before jumping in to code it

// 59 - Using Google StackOverflow and MDN
const temperatures = [-3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1. Understand the problem
// What is tempp amplitude? Ans: Diff between the highest and lowest temp.
// How to compute the max and min temp from an array of values?
// What is a sensor error? And what to do with them?

// 2. Divide and conquer
// Ignore errors
// Find the max value?
// Find the min value?
// Subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max;
  let min;
  let defined = false;
  for (let i = 0; i < temps.length; i++) {
    if (defined === true) {
      if (max < temps[i]) max = temps[i];
      if (min > temps[i]) min = temps[i];
    } else {
      if (typeof temps[i] === 'number') {
        max = min = temps[i];
        defined = true;
      }
    }
  }
  if (defined) return max - min;
  else return 'undefined';
};

console.log(calcTempAmplitude(temperatures));

// now update the method so that it can take two arrays and concat them before finding the temp amplitude
const calcTempAmplitude2 = function (temps1, temps2) {
  const mergedArray = temps1.concat(temps2);
  return calcTempAmplitude(mergedArray);
};

const temperatures2 = [10, 20, 30, 40, 50];
console.log(calcTempAmplitude2(temperatures, temperatures2));
