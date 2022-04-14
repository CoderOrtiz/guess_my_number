"use strict";
// --- Set Values ---
let score = 5;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

// --- Set Functions ---

// Calling the "Check" Button
document.querySelector(".check").addEventListener("click", check);

// Calling the "Try Again" Button
document.querySelector(".again").addEventListener("click", tryAgain);

// The Display Message Function
const displayMessage = (message) => (document.querySelector(".message").textContent = message);

// The Secret Number Display Function Function
const displaySecretNumber = (secretNumber) => (document.querySelector(".number").textContent = secretNumber);

// Altering the Appearance of the "Number" Class Function
const numberREM = (rem) => (document.querySelector(".number").style.width = rem + "rem");

// Changing the Background Color Function
const backgroundColor = (color) => (document.querySelector("body").style.backgroundColor = color);

// The Displaying the High Score Function
const displayHighScore = (highScore) => (document.querySelector(".highscore").textContent = highScore);

// Displaying the Score Function
const displayScore = (score) => (document.querySelector(".score").textContent = score);

// --- Logic ---

// The "Check" Button Function. Determines if the User Guessed the Right Number.
function check() {
  // Saves the Value Thats Inputted into the Number Box
  const guess = Number(document.querySelector(".guess").value);

  // For Invaid Input
  if (!guess) {
    displayMessage("Please select a number between 1-20.");
  }

  // If the User's Guess Matches the Generated Secret Number
  else if (guess === secretNumber) {
    displayMessage("🏆 You Won!");
    displaySecretNumber(secretNumber);
    backgroundColor("#60b347");
    numberREM(35);

    // Determines if There Should Be a New High Score
    if (highScore < score) {
      highScore = score;
      displayHighScore(highScore);
    }

    // If a Valid Input but the User's Guess does not Match the Secret Number
  } else if (guess !== secretNumber) {
    score--;
    displayMessage(guess > secretNumber ? "📉 Lower..." : "📈 Higher");

    // Only If Score is Less Than One, Display the "You Lose" Message, Set Score to 0, and set the Secret Numeber to 203
    if (score >= 1);
    else {
      displayMessage("😝 You Lose!");
      // 203 is an Easter Egg for Friends
      secretNumber = 203;
      score = 0;
    }
    displayScore(score);
  }
}

// The Try Again Function to Reset Game
function tryAgain() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  backgroundColor("#222");
  score = 5;
  displayHighScore(highScore);
  displayScore(score);
  displayMessage("Start guessing...");
  displaySecretNumber("?");
  numberREM(15);
}
