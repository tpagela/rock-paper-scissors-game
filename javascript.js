alert("Welcome to Rock Paper Scissors!")
let playerScore = 0;
let computerScore = 0; 
let playerWon;
let computerWon;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randomElement = choices[Math.floor(Math.random() * choices.length)];

    return randomElement
}



 
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        computerWon = false;
        playerWon = false;
        return  'You Tie!';
        
    }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerWon = true;
            playerWon = false;
            return `You Lose! ${computerSelection} beats ${playerSelection}. ` 
        }
        else if (playerSelection === 'paper' && computerSelection === "scissors") {
            computerWon = true;
            playerWon = false;
            return`You Lose! ${computerSelection} beats ${playerSelection}. ` 

        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerWon = true;
            playerWon = false;
            return`You Lose! ${computerSelection} beats ${playerSelection}. `
        }

        else { 
            playerWon = true;
            computerWon = false;
            return`You win! ${playerSelection} beats ${computerSelection}.`
        }
    }

console.log(playRound())

function game () {
    for (round = 1; round <= 100; ++round) {
        console.log(playRound(prompt("PICK YOUR WEAPON").toLowerCase(), computerPlay()));
        if (playerWon) {
            playerScore ++;

        }
        else if (computerWon) {
            computerScore ++;
        }
        if (playerScore === 5 || computerScore === 5) {
            break
        }
    }
    console.log(`You won ${playerScore} points and the computer got ${computerScore}.`)
    if (playerScore > computerScore && playerScore === 5) {
        console.log('You win!!!!');
    } else {
        console.log('You lose loser.');
    }
}

game();

