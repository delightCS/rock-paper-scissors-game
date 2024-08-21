let hands = ["Rock", "Paper", "Scissors"];
function getComputerChoice(hands) {
  let randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}
console.log(getComputerChoice(hands));

function getHumanChoice() {
  let myChoice = prompt("Choose between rock, paper, or scissors");

  if (myChoice === "rock") {
    return "Rock";
  } else if (myChoice === "paper") {
    return "Paper";
  } else if (myChoice === "scissors") {
    return "Scissors";
  } else {
    alert("Reload and choose from the option given");
  }
}
console.log(getHumanChoice());
