/*
// JavaScript Fundamentals – Part 1

// LECTURE: Values and Variables
// 1
const country = "United States of America";
const continent = 'North America';
let population = 339996563;
// 2
console.log("Name of the country: " + country);
console.log("Continent of " + country + ": " + continent);
console.log("Population: " + population);

// LECTURE: Data Types
// 1
const isIsland = false;
let language;

// 2
console.log("Type of isIsland: " + typeof isIsland);
console.log("Type of population: " + typeof population);
console.log("Type of country: " + typeof country);
console.log("Type of language: " + typeof language);

// LECTURE: let, const and var
// 1
language = "English";

// 2
// Here I am asked to change variable declarations to const from let if they are not meant to change
// I am listing down changes in comments below so that I can see which variable declarations I changed
// let country -> const country
// let continent -> const continent
// let isIsland -> const isIsland
// (NOT DOING THIS) let language -> const language

//  Along with country, continent, isIsland, I am also trying to the langauge's declaration to const but unlike other three, I am defining language variable without assigning anything at first and the as part of the third lecture, filling it up with a value. const does not allow us to create a variable without setting its value. So, for now, I am keeping it as it is (declaring it with let).

// 3
// So, now we have three constacts: country, continent, and isIsland. Trying to change one of them.
//isIsland = true; // TypeError: Assignment to constant variable.

// LECTURE: Basic Operators
// 1
let halfPopulation = population / 2;
console.log("If your country split in half, and each half would contain half the population, then " + halfPopulation + " people would live in each half");

// 2
population = population + 1
console.log("Population after incrementing it by 1: " + population);

// 3
let finlandPopulation = 6000000; // Assuming finland's population will change
console.log("Does the " + country + " have more population than Finland?:", population > finlandPopulation);

// 4
let avgPopulation = 33000000; // Assuming average population of a country will change over time
console.log("Does the " + country + " have more population than the average population a country have?:", population > avgPopulation);

// 5
let description = country + " is in " + continent + ", and its " + Math.floor(population / 1000000) + " million people speak " + language;
console.log("Description:", description);
*/