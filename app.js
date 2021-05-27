const coin = document.getElementById("coin");
const message = document.querySelector(".messages");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const coinT = document.querySelector(".coin-t");
const coinD = document.querySelector(".coin-d");
let userScore = 0;
let compScore = 0;

function compChoice() {
  const randomChoice = Math.floor(Math.random() * 2);
  return randomChoice;
}

function userChoice(choice) {
  const compChoices = compChoice();

  if (choice === compChoices) {
    coin.classList.remove("heads");
    coin.classList.add("tails");
    userScore++;
    setTimeout(function () {
      message.textContent = "USER WINS!";
    }, 3000);
  } else {
    coin.classList.remove("tails");
    coin.classList.add("heads");
    compScore++;
    setTimeout(function () {
      message.textContent = "COMPUTER WINS!";
    }, 3000);
  }
  user.textContent = userScore;
  computer.textContent = compScore;
}
coinT.addEventListener("click", function () {
  setTimeout(function () {
    userChoice(1);
  }, 100);
});
coinD.addEventListener("click", function () {
  setTimeout(function () {
    userChoice(0);
  }, 100);
});
