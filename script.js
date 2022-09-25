// define the constant first
const CHOICES = ['Rock', 'Paper', 'Scissors']
let playerScore, computerScore

function getComputerChoice() {
  // will randomly return 'Rock', 'Paper' or 'Scissors'
  let randomChoice = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[randomChoice].toLowerCase()
}

function playRound(playerSelection, computerSelection) {
  // returns a string that declares the winner like 'You lose! Paper beats Rock'
  // make playerSelection case insensitive so users can input rock, Rock, Rock
  if (playerSelection == computerSelection) {
    return `It's a tie! you both selected ${playerSelection}.`
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' ** computerSelection) == 'paper'
  ) {
    playerScore++
    return `You win! ${playerSelection} wins against ${computerSelection}.`
  } else {
    computerScore++
    return `You lose! ${playerSelection} lose against ${computerSelection}.`
  }
}

function game() {
  // call the playRound() to play 5 round game that keeps score and reports a winner or loser
  // at the end.
  // use prompt to get input from the user
  playerScore = computerScore = 0
  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt(
      'Please type your choice of weapons: Rock, Paper or Scissors? '
    ).toLowerCase()
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`Congrats! You won against the computer. Final score is ${playerScore} - ${computerScore}`);
    }
    else {
        console.log(`Sorry! You lost against the computer. Final score is ${playerScore} - ${computerScore}`);
    }
}

game();
