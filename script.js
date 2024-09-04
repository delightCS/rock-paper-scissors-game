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
      newPara.textContent = `You win, Your choice: ${humanChoice}, Computer choice: ${computerChoice}.`;
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      newPara.textContent = `You lose, Your choice: ${humanChoice}, Computer choice: ${computerChoice}.`;
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      newPara.textContent = `You lose, Your choice: ${humanChoice}, Computer choice: ${computerChoice}.`;
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      newPara.textContent = `You win, Your choice: ${humanChoice}, Computer choice: ${computerChoice}.`;
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      newPara.textContent = `You win, Your choice: ${humanChoice}, Computer choice: ${computerChoice}.`;
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      newPara.textContent = `You lose, Your choice: ${humanChoice}, Computer choice: ${computerChoice}.`;
      computerScore++;
    } else {
      newPara.textContent = `It's a tie. Your choice: ${humanChoice}, Computer choice: ${computerChoice}`;
    }

    let para = document.querySelector("#scores");
    para.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;

    let winPara = document.querySelector("#winner");
    if (humanScore === 5) {
      winPara.textContent = "You won this round. Reload to play again.";
    } else if (computerScore === 5) {
      winPara.textContent = "Computer won this round. Reload to play again.";
    }
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
