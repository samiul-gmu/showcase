'use strict';

// creating placeholders for all the classes I will need
const newGameButton = document.querySelector('.btn--new');
const score1Container = document.querySelector('#score--0');
const score2Container = document.querySelector('#score--1');
const currentScore1Container = document.querySelector('#current--0');
const currentScore2Container = document.querySelector('#current--1');
const window1 = document.querySelector('.player--0');
const window2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

// defining variables that I will need
let player1 = {
  score: 0,
  currentScore: 0,
  scoreContainer: score1Container,
  currentScoreContainer: currentScore1Container,
  window: window1,
};
let player2 = {
  score: 0,
  currentScore: 0,
  scoreContainer: score2Container,
  currentScoreContainer: currentScore2Container,
  window: window2,
};

let currentPlayer = player1; // At the begining, player 1 will always start the game as per business requirement
let winner = 0;

// Helper function. Resets player before the new game starts.
const playerReset = function (player) {
  player.score = 0;
  player.currentScore = 0;
  player.scoreContainer.textContent = 0;
  player.currentScoreContainer.textContent = 0;
  player.window.classList.remove('player--active');
};

const gameReset = function () {
  playerReset(player1);
  playerReset(player2);
  if (winner != 0) {
    currentPlayer.window.classList.remove('player--winner');
  }
  currentPlayer = player1;
  winner = 0;
  currentPlayer.window.classList.add('player--active');
  dice.style.display = 'None';
};

gameReset();

// This function helps to switch user
const switchPlayer = function () {
  currentPlayer.currentScore = 0;
  currentPlayer.window.classList.remove('player--active');
  currentPlayer.currentScoreContainer.textContent = 0;
  if (currentPlayer === player1) currentPlayer = player2;
  else currentPlayer = player1;
  currentPlayer.window.classList.add('player--active');
};

rollDiceButton.addEventListener('click', function () {
  if (winner != 0) return;
  const displayDice = function (diceVal) {
    dice.src = `dice-${diceVal}.png`;
    dice.style.display = 'block';
  };
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  displayDice(diceValue);
  if (diceValue !== 1) {
    //add to current score
    currentPlayer.currentScore += diceValue;
    currentPlayer.currentScoreContainer.textContent =
      currentPlayer.currentScore;
  } else {
    switchPlayer();
  }
});

holdButton.addEventListener('click', function () {
  if (winner != 0) return;
  currentPlayer.score += currentPlayer.currentScore;
  currentPlayer.scoreContainer.textContent = currentPlayer.score;
  if (currentPlayer.score >= 100) {
    currentPlayer.window.classList.remove('player--active');
    currentPlayer.window.classList.add('player--winner');
    winner = currentPlayer;
  } else {
    switchPlayer();
  }
});

// Doing a reset to create a new game
newGameButton.addEventListener('click', gameReset);
