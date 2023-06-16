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
//console.log(result);

document.querySelector('.check').addEventListener('click', function () {
  const guessString = document.querySelector('.guess').value;
  const guess = Number(guessString);
  //console.log(guess, typeof guess);

  if (guessString === '') {
    document.querySelector('.message').textContent = '💡 ENTER A NUMBER!';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = '⛔ OUT OF RANGE!';
  } else if (guess === result) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent =
      document.querySelector('.guess').value;
    if (Number(document.querySelector('.score').textContent) > highscore) {
      highscore = score; //document.querySelector('.score').textContent
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#15ad48';
    document.querySelector('.number').style.width = '30rem';
  } else if (score === 0) {
    document.querySelector('.message').textContent = '💥 GAME OVER!';
  } else if (guess > result) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score--;
    document.querySelector('.score').textContent = score; //Number(document.querySelector('.score').textContent) - 1
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
    }
  } else if (guess < result) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score; //Number(document.querySelector('.score').textContent) - 1
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  result = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
