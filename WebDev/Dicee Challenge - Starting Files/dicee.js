window.onload = function () {
  //   console.log("Inside onload");
  //   console.log(sessionStorage);
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    refreshed();
  } else {
    sessionStorage.setItem("reloading", "true");
  }
};

const refreshed = function () {
  //   console.log("Inside changeTitle");
  //   console.log(sessionStorage);
  //   document.querySelector("h1").innerHTML = "TEST";
  const player1Score = Math.floor(Math.random() * 6) + 1;
  const player2Score = Math.floor(Math.random() * 6) + 1;
  console.log(player1Score, player2Score);

  if (player1Score > player2Score) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!<BR/>🏆";
  } else if (player2Score > player1Score) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!<BR/>🏆";
  } else {
    document.querySelector("h1").innerHTML = "This is a draw!<BR/>🤝";
  }

  document
    .querySelector("img.img1")
    .setAttribute("src", "./images/dice" + player1Score + ".png");
  document
    .querySelector("img.img2")
    .setAttribute("src", "./images/dice" + player2Score + ".png");
};
