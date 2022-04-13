"use strict";
let score = 5;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector(".check").addEventListener("click", check);

function check() {
  const guess = Number(document.querySelector(".guess").value);
  
  if (!guess) {
    document.querySelector(".message").textContent =
      "Please select a number between 0-20.";
  } 
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "🏆 You Won!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    
 if (highScore < score){
  highScore = score;
  document.querySelector(".highscore").textContent = highScore;
 }
  
  } 
  else if (guess > secretNumber) {
    score--;
    document.querySelector(".message").textContent = "Lower...";
    if (score >= 1) document.querySelector(".score").textContent = score;
    else {
        document.querySelector(".message").textContent = "😝 You Lose!";
        
        secretNumber = 203;
        score = 0;
        document.querySelector(".score").textContent = score;
      }
    
  } 
  else if (guess < secretNumber) {
    score--;
    document.querySelector(".message").textContent = "Higher...";
    
    if (score >= 1) document.querySelector(".score").textContent = score;
    
    else {
      document.querySelector(".message").textContent = "😝 You Lose!";
      
      secretNumber = 203;
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
}

document.querySelector(".again").addEventListener("click", again);

function again() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").textContent = secretNumber;
  score = 5;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  console.log(secretNumber);
}

console.log(secretNumber);

// make reset of won number to be original rem