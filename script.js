let humanScore = 0;
let computerScore = 0;
let drawScore = 0;


function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random(arr[arr.length - 1]) * arr.length)
    console.log(arr[randomValue])
    return arr[randomValue]
}

function getHumanChoice() {
    let userChoice = prompt('Enter a value')
    console.log(userChoice)
    return userChoice
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    let humanChoiceToLowerCase = humanChoice.toLowerCase()
    let lose = 'You lose! Paper beats Rock';
    let win = 'You Win!';
    let draw = 'Draw!'
    if (humanChoiceToLowerCase == computerChoice) {
        drawScore++
        console.log(draw)
    }
    if (humanChoiceToLowerCase == 'rock' && computerChoice == 'scissors') {
        console.log(`You Win: ${humanChoiceToLowerCase} crushes ${computerChoice}`)
        humanScore++
    } else if (humanChoiceToLowerCase == 'rock' && computerChoice == 'paper') {
        console.log(`You lose: ${computerChoice} covers ${humanChoiceToLowerCase}`)
        computerScore++
    } else if (humanChoiceToLowerCase == 'paper' && computerChoice == 'rock') {
        console.log(`You Win: ${humanChoiceToLowerCase} covers ${computerChoice}`)
        humanScore++
    } else if (humanChoiceToLowerCase == 'paper' && computerChoice == 'scissors') {
        console.log(`You lose: ${computerChoice} cuts ${humanChoiceToLowerCase}`)
        computerScore++
    } else if (humanChoiceToLowerCase == 'scissors' && computerChoice == 'paper') {
        console.log(`You Win: ${humanChoiceToLowerCase} cuts ${computerChoice}`)
        humanScore++
    } else if (humanChoiceToLowerCase == 'scissors' && computerChoice == 'rock') {
        console.log(`You lose: ${computerChoice} crushes ${humanChoiceToLowerCase}`)
        computerScore++
    }
}


function playGame() {

    for (let i = 1; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`HumanScore: ${humanScore}`)
        console.log(`ComputerScore: ${computerScore}`)
        console.log(`DrawScore: ${drawScore}`)
    }
}

playGame()
// console.log(`My Pick: ${getHumanChoice()}`)
// console.log(`Computer's Pick: ${getComputerChoice()}`)
