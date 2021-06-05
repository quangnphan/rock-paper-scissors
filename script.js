//modal state
const rules = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".modal-flex img");
rules.addEventListener("click", () => {
  document.querySelector(".rules-modal").classList.toggle("show");
  if (document.querySelector(".rules-modal").classList.contains("show")) {
    document.querySelector(".container").style.filter = "brightness(0.1)";
  } else {
    document.querySelector(".container").style.filter = "none";
  }
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".rules-modal").classList.remove("show");
  document.querySelector(".container").style.filter = "none";
});
//
const buttonSelect = document.querySelectorAll(".btn");
const selection = document.querySelector(".selection");
const main = document.getElementById("main");
const result = document.querySelector(".result h1 span");
const user_select = document.getElementById("user-select");
const computer_select = document.getElementById("computer-select");
const choices = ["rock", "paper", "scissors"];
const score = document.querySelector(".score span");
let userChoice = undefined;
let myScore = 12;

buttonSelect.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    main.style.display = "none";
    selection.style.display = "flex";
    checkWinner();
  });
});

function checkWinner() {
  const computerChoice = randomChoice();
  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);
  if (userChoice === computerChoice) {
    result.innerText = "Draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result.innerText = "Win";
    updateScore(1);
  } else {
    result.innerText = "Lose";
    updateScore(-1);
  }
}

//random choice for computer select
function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//update score
function updateScore(value) {
  myScore += value;
  score.innerText = myScore;
}
//update selection image
function updateSelection(selection, choice) {
  selection.classList.remove("paper");
  selection.classList.remove("scissors");
  selection.classList.remove("rock");

  const img = selection.querySelector("img");
  selection.classList.add(choice);
  img.src = `images/icon-${choice}.svg`;
  img.alt = choice;
}

//playagain
const playAgain = document.querySelector(".reset-btn");
playAgain.addEventListener("click", () => {
  main.style.display = "flex";
  selection.style.display = "none";
});
