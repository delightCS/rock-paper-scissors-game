let hands = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playround(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let newPara = document.querySelector("#choices");

    if (humanChoice === "rock" && computerChoice === "scissors") {
      newPara.textContent = "You win, Rock beats Scissors.";
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      newPara.textContent = "You lose, Rock beats Scissors.";
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      newPara.textContent = "You lose, Scissors beats Paper.";
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      newPara.textContent = "You win, Scissors beats paper.";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      newPara.textContent = "You win, Paper beats Rock.";
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      newPara.textContent = "You lose, Paper beats Rock.";
      computerScore++;
    } else {
      newPara.textContent = "It's a tie.";
    }

    let para = document.querySelector("#scores");
    para.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
  }

  if (humanScore === 5) {
    alert("You won this round. Reload the page to play again.");
  } else if (computerScore === 5) {
    alert("Computer won this round. Reload the page to play again.");
  }

  function humanSelection() {
    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
      playround("Rock", getComputerChoice());
    });

    paper.addEventListener("click", () => {
      playround("Paper", getComputerChoice());
    });

    scissors.addEventListener("click", () => {
      playround("Scissors", getComputerChoice());
    });
  }
  humanSelection();
}
playGame();
