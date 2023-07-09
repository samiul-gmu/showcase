document.querySelector("footer").textContent = "USA-Bangladesh Joint Venture!";

const sounds = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass",
};

for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function (e) {
  if (sounds.hasOwnProperty(e.key.toLowerCase())) {
    makeSound(e.key.toLowerCase());
    buttonAnimation(e.key.toLowerCase());
  }
});

function makeSound(key) {
  if (sounds.hasOwnProperty(key)) {
    new Audio("./sounds/" + sounds[key] + ".mp3").play();
  } else {
    console.log("Failsafe mechanism failed! Check the codebase!");
  }
}

function buttonAnimation(key) {
  const activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
