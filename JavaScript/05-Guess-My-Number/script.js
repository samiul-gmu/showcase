'use strict';

// 70 - PROJECT 1 Guess My Number
console.log(document.querySelector('.message').textContent);

// 71 - Whats the DOM and DOM Manipulation
// DOM: Document Object Model

// 72 - Selecting and Manipulating Elements
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = 17;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
