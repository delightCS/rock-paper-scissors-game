let hands = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

function getHumanChoice() {
  let myChoice = prompt("Choose between rock, paper, or scissors");

  if (myChoice) {
    myChoice = myChoice.toLowerCase();

    if (myChoice === "rock") {
      return "Rock";
    } else if (myChoice === "paper") {
      return "Paper";
    } else if (myChoice === "scissors") {
      return "Scissors";
    } else {
      alert("Invalid choice. Please choose between rock, paper, or scissors.");
      return getHumanChoice();
    }
  } else {
    alert("You didn't make a choice.");
    return null;
  }
}

let humanScore = 0;
let computerScore = 0;

function playround(humanChoice, computerChoice) {
  if (humanChoice === null) {
    alert("Game canceled.");
    return;
  }

  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("You win, Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("You lose, Rock beats Scissors.");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("You lose, Scissors beats Paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("You win, Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("You win, Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    alert("You lose, Paper beats Rock.");
    computerScore++;
  } else if (humanChoice === computerChoice) {
    alert("It's a draw.");
  }

  console.log(
    `Human choice: ${humanChoice}, Computer choice: ${computerChoice}`
  );
  console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}
playround(getHumanChoice(), getComputerChoice());
