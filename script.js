let hands = ["Rock", "Paper", "Scissors"];
function getComputerChoice(hands) {
  let randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}
console.log(getComputerChoice(hands));
