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
      alert("You win, Scissors beats paper.");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      alert("You win, Paper beats Rock.");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      alert("You lose, Paper beats Rock.");
      computerScore++;
    } else {
      alert("It's a draw.");
    }
    console.log(
      `Human choice: ${humanChoice}, Computer choice: ${computerChoice}`
    );
    console.log(
      `Human score -> ${humanScore}, Computer score -> ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    alert("You won this round. Reload the page to play again.");
  } else if (humanScore < computerScore) {
    alert("Computer won this round. Reload the page to play again.");
  }

  function getHumanChoice() {
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
  getHumanChoice();
}
playGame();
