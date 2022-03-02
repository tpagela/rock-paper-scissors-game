alert("Welcome to Rock Paper Scissors!")
let playerScore = 0
let computerScore = 0 
 

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomElement = choices[Math.floor(Math.random() * choices.length)];

    return randomElement
}



 
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result =  'You Tie!';
    }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
            computerWon = true;
            result =  `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}. ` + "The score is " + playerScore + " to " + computerScore + "." 
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === "scissors") {
            computerWon = true;
            result = `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}. `+ "The score is " + playerScore + " to " + computerScore + "." 

        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
            computerWon = true;
            result = `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}. `+ "The score is " + playerScore + " to " + computerScore + "." 
        }
        else { 
            playerWon = true;
            result = `You win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}. ` + "The score is " + playerScore + " to " + computerScore + "." 
        }
        return result
    }

console.log(playRound())


function game () {
    for (round = 1; round <= 5; round ++) {
        console.log(playRound(prompt("PICK YOUR WEAPON").toLowerCase(), computerPlay()));
        if (playerWon) {
            playerScore += 1;
        }
        else if (computerWon) {
            computerScore += 1;
        }
    }
    console.log(`You won ${playerScore} points and the computer got ${computerScore}.`)
    if (playerScore > computerScore) {
        console.log('You win!!!!');
    } else {
        console.log('You lose loser.');
    }
}

game();

