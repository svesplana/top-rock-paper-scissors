// variables
let humanScore = 0;
let computerScore = 0;

// functions
function getComputerChoice() {
  const randValue = Math.random();
  if (randValue > 0 && randValue < 0.33) {
    return 'rock';
  } else if (randValue > 0.33 && randValue < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
function getHumanChoice() {
  const userInput = prompt(
    'Enter your choice: rock, paper, or scissors'
  ).toLowerCase();

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    // On every round, a fresh selection is made through this
    let humanPick = getHumanChoice().toLowerCase();
    let computerPick = getComputerChoice();

    if (
      (humanPick == 'paper' && computerPick == 'rock') ||
      (humanPick == 'rock' && computerPick == 'scissors') ||
      (humanPick == 'scissors' && computerPick == 'paper')
    ) {
      humanScore++;
      console.log(`Human wins! Score: ${humanScore}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerPick} beats ${humanPick}.`);
      console.log(`Computer wins! Score: ${computerScore}`);
    }
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore > computerScore) {
    console.log('Human is the winner!');
  } else {
    console.log('Computer is the winner!');
  }
}

playGame();

// if (humanPick === 'rock' && computerChoice === 'scissors') {
//   humanScore++;
//   console.log(`Human wins! Score: ${humanScore}`);
// } else {
//   computerScore++;
//   console.log(`Computer wins! Score: ${computerScore}`);
// }

// if (humanPick === 'scissors' && computerChoice === 'paper') {
//   humanScore++;
//   console.log(`Human wins! Score: ${humanScore}`);
// } else {
//   computerScore++;
//   console.log(`Computer wins! Score: ${computerScore}`);
// }
