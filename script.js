"use strict";
const playerUser = document.querySelector(".player--0");
const playerComputer = document.querySelector(".player--1");
const currentUser = document.getElementById("current--0");
const currentComputer = document.getElementById("current--1");

const btnHeads = document.querySelector(".btn--heads");
const btnTail = document.querySelector(".btn--tail");
const btnRestart = document.querySelector(".re--start");
const cover = document.querySelector("#cover");

const coin = ["heads", "tail"];
let userScore = 0;
let computerScore = 0;

// init function
const init = function () {
  userScore = 0;
  computerScore = 0;

  playerUser.classList.remove("hidden");
  playerComputer.classList.remove("hidden");
  playerComputer.classList.remove("player--winner");
  playerUser.classList.remove("player--winner");

  btnTail.classList.remove("hidden");
  btnHeads.classList.remove("hidden");
  cover.classList.remove("hidden");

  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  document.querySelector(`.main-name`).textContent = "Coin Toss Game";
  btnRestart.classList.add("hidden");
};

// Buttons
btnHeads.addEventListener("click", function () {
  let coinFace = Math.trunc(Math.random() * 2);
  let coverImg = coin[coinFace];
  cover.src = `images/${coverImg}.jpg`;
  if (coinFace == 0) {
    userScore += 1;
    document.getElementById(`current--0`).textContent = userScore;
  } else {
    computerScore += 1;
    document.getElementById(`current--1`).textContent = computerScore;
  }
  checkScore();
});

btnTail.addEventListener("click", function () {
  let coinFace = Math.trunc(Math.random() * 2);
  let coverImg = coin[coinFace];
  cover.src = `images/${coverImg}.jpg`;
  if (coinFace == 1) {
    userScore += 1;
    document.getElementById(`current--0`).textContent = userScore;
  } else {
    computerScore += 1;
    document.getElementById(`current--1`).textContent = computerScore;
  }
  checkScore();
});

btnRestart.addEventListener("click", init);

// Checking functions
const checkScore = function () {
  if (computerScore === 5) {
    playerUser.classList.add("hidden");
    playerComputer.classList.add("player--winner");

    winnerCheck();
  } else if (userScore === 5) {
    playerComputer.classList.add("hidden");
    playerUser.classList.add("player--winner");

    winnerCheck();
  }
};

const winnerCheck = function () {
  btnTail.classList.add("hidden");
  btnHeads.classList.add("hidden");
  cover.classList.add("hidden");
  document.querySelector(`.main-name`).textContent = "and the WINNER is...";
  btnRestart.classList.remove("hidden");
};
