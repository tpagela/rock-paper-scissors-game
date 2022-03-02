
// randomly selects the option for the computer
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomElement = choices[Math.floor(Math.random() * choices.length)];

    return randomElement
}

console.log(computerPlay())