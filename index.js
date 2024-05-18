document.addEventListener("DOMContentLoaded", () => {
  // Function declarations
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a draw!";
    }
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      updateScores();
      return "You win!";
    } else {
      computerScore++;
      updateScores();
      return "You lose!";
    }
  }

  function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
  }

  function updateScores() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    resultText.textContent = "";
  }

  function displayResult(playerChoice, computerChoice, result) {
    resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
  }

  // Variables
  let playerScore = 0;
  let computerScore = 0;

  const playerScoreSpan = document.getElementById("player-score");
  const computerScoreSpan = document.getElementById("computer-score");
  const resultText = document.getElementById("result-text");

  // Event listeners
  document
    .getElementById("rock-button")
    .addEventListener("click", () => playGame("rock"));
  document
    .getElementById("paper-button")
    .addEventListener("click", () => playGame("paper"));
  document
    .getElementById("scissors")
    .addEventListener("click", () => playGame("scissors"));
  document.getElementById("reset-button").addEventListener("click", resetGame);
});
