const arr = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)]
}

let playerScore = 0;
let computerScore = 0;
let roundNum = 0;



function playGame() {
  for (let i = 1; i <= 5; i++) {
    function playRound(playerSelection, computerSelection) {
      if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return `Are you sure you entered rock, paper, or scissors?  Input: ${playerSelection}`
      }
      roundNum++;

      if (playerSelection === computerSelection) {
        return `Round ${roundNum}: Tie! ${playerSelection} equals ${computerSelection}.`;
      }
      if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
          computerScore++;
          return `Round ${roundNum}: You lose! ${playerSelection} loses to ${computerSelection}.`
        }
        else {
          playerScore++;
          return `Round ${roundNum}: You win! ${playerSelection} beats ${computerSelection}.`
        }
      }
      if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
          computerScore++;
          return `Round ${roundNum}: You lose! ${playerSelection} loses to ${computerSelection}.`
        }
        else {
          playerScore++;
          return `Round ${roundNum}: You win! ${playerSelection} beats ${computerSelection}.`
        }
      }
      if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
          computerScore++;
          return `Round ${roundNum}: You lose! ${playerSelection} loses to ${computerSelection}.`
        }
        else {
          playerScore++;
          return `Round ${roundNum}: You win! ${playerSelection} beats ${computerSelection}.`
        }
      }

    }

    const playerSelection = prompt('Choose One: rock, paper or scissors?').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Score - Player: ${playerScore}  Computer: ${computerScore}`);

  }
  if (playerScore > computerScore) {
    return `You win! You beat the computer ${playerScore} to ${computerScore}.`
  } else if (playerScore < computerScore) {
    return `You lose! The computer beat you ${computerScore} to ${playerScore}.`
  } else {
    return `Tie game! ${playerScore} to ${computerScore}.`
  }
}

console.log(playGame());
