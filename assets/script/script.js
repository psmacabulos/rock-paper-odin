// define the constant first
const CHOICES = ['Rock', 'Paper', 'Scissors'];
let gameover = false;
let playerScore = 0;
let computerScore = 0;

let player = document.querySelector('.player_score');
let computer = document.querySelector('.computer_score');

const reset = () => {
  gameover = false;
  playAgainBtn.style = 'opacity: 0';
  playerScore = 0;
  player.innerText = playerScore;
  computerScore = 0;
  computer.innerText = computerScore;
  info.innerHTML = 'Choose Your Weapon!';
};

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice].toLowerCase();
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return `It's a tie! you both selected ${playerSelection}.`;
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    playerScore++;
    player.innerText = playerScore;

    return `You win! ${playerSelection}  wins against ${computerSelection}.`;
  } else {
    computerScore++;
    computer.innerText = computerScore;

    return `You lose! ${playerSelection} lose against ${computerSelection}.`;
  }
};

const buttons = document.querySelectorAll('.choices');
const info = document.querySelector('.info');

const checkGame = (player, computer) => {
  let result = false;
  if (player == 5 || computer == 5) {
    gameover = true;
    result = true;
    playAgainBtn.style = 'opacity:1';
  }
  if (player == 5) {
    let p = document.createElement('p');
    p.innerText = `Gameover. You won the game!`;
    p.style.cssText = 'color:red;';
    info.appendChild(p);
  } else if (computer == 5) {
    let p = document.createElement('p');
    p.innerText = `Gameover. Computer won the game!`;
    p.style.cssText = 'color:red;';
    info.appendChild(p);
  }

  return result;
};

let playAgainBtn = document.querySelector('#play_again');

playAgainBtn.addEventListener('click', () => {
  reset();
});

buttons.forEach((btn) => {
  let playerSel = btn.getAttribute('id');
  btn.addEventListener('click', () => {
    if (!gameover) {
      let result = playRound(playerSel, getComputerChoice());
      let para1 = document.createElement('p');
      para1.innerText = result;
      info.innerHTML = result;
      checkGame(playerScore, computerScore);
    }
  });
});
