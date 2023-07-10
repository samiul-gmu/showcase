let activeGame = false;
let gameSequence = [];
let userSequence = [];
let turn = 0; // 0 means computer will play; 1 means user/player will play
let level = 0;
const buttonColor = ["red", "green", "blue", "yellow"];

$(document).on("keypress", newGame);

function newGame() {
  if (!activeGame) {
    $("body").removeClass("game-over");
    gameSequence = [];
    userSequence = [];
    turn = 0;
    level = 0;
    activeGame = true;
    playGame();
  }
}

function playGame() {
  userSequence = [];
  const id = Math.floor(Math.random() * 4);
  const nextBlock = buttonColor[id];
  gameSequence.push(nextBlock);
  const button = $("." + nextBlock);
  button.addClass("pressed");
  setTimeout(function () {
    button.removeClass("pressed");
  }, 100);
  new Audio("./sounds/" + nextBlock + ".mp3").play();
  level++;
  $("#level-title").text("Level " + level);
}

// Button Pressed
$(".btn").on("click", buttonPressed);

function buttonPressed() {
  if (!activeGame) {
    gameOver();
  }
  const button = $(this);
  button.addClass("pressed");
  setTimeout(function () {
    button.removeClass("pressed");
  }, 100);
  if (gameSequence.length === 0) {
    gameOver();
  } else if (userSequence.length === gameSequence.length) {
    console.log("INVALID SATE! SHOULD NOT COME HERE! FIX THE GAME ASAP");
    gameOver();
  } else {
    for (let i = 0; i < buttonColor.length; i++) {
      if (button.hasClass(buttonColor[i])) {
        new Audio("./sounds/" + buttonColor[i] + ".mp3").play();
        userSequence.push(buttonColor[i]);
        if (userSequence.length === gameSequence.length) {
          if (JSON.stringify(userSequence) === JSON.stringify(gameSequence)) {
            setTimeout(playGame, 700);
          } else {
            gameOver();
          }
        } else {
          if (
            JSON.stringify(userSequence) !==
            JSON.stringify(gameSequence.slice(0, userSequence.length))
          ) {
            gameOver();
          }
        }
      }
    }
  }

  function gameOver() {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    new Audio("./sounds/wrong.mp3").play();
    activeGame = false;
  }
}
