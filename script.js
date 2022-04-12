"use strict";
let score = 5;
let secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "Please select a number between 0-20.";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "🏆 Congratulations, you won!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    const highScore = score;
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".check").addEventListener("click", again);
  } else if (guess > secretNumber) {
    score--;
    document.querySelector(".message").textContent = "Lower...";
    if (score >= 0) document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    score--;
    document.querySelector(".message").textContent = "Higher...";
    if (score >= 0) document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", again);

function again() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".guess").value = "";
  score = 5;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
}
