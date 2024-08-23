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
