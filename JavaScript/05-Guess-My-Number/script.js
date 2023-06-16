'use strict';
/*
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
*/

// 73 - Handling Click Events
let result = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const publishResult = function (result) {
  document.querySelector('.number').textContent = result;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessString = document.querySelector('.guess').value;
  const guess = Number(guessString);

  // Blank input
  if (guessString === '') {
    displayMessage('💡 ENTER A NUMBER!');
  }
  // Out of Range
  else if (guess < 1 || guess > 20) {
    displayMessage('⛔ OUT OF RANGE!');
  }
  // Correct Number
  else if (guess === result) {
    displayMessage('🎉 Correct Number!');
    publishResult(document.querySelector('.guess').value);
    if (Number(document.querySelector('.score').textContent) > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#15ad48';
    document.querySelector('.number').style.width = '30rem';
  }
  // Incorrect Guess
  else if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
    if (guess > result) displayMessage('📈 Too High!');
    if (guess < result) displayMessage('📉 Too Low!');
  }
  // Game Over
  if (score === 0) {
    displayMessage('💥 GAME OVER!');
    publishResult(result);
    document.querySelector('body').style.backgroundColor = '#c96d10';
    document.querySelector('.number').style.width = '30rem';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  publishResult('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  result = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
