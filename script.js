let humanScore = 0;
let computerScore = 0;
let drawScore = 0;


function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random(arr[arr.length - 1]) * arr.length)
    return arr[randomValue]
}

function getHumanChoice(){
    let userChoice = prompt('Rock, Paper, or Scissors')
    return userChoice
}

function playRound (humanChoice, computerChoice){
    let humanChoiceToLowerCase = humanChoice.toLowerCase()
    let lose = 'You lose! Paper beats Rock';
    let win = 'You Win!';
    let draw = 'Draw!'
    if(humanChoiceToLowerCase == computerChoice){
        console.log(draw)
    }
    if(humanChoiceToLowerCase == 'rock' && computerChoice == 'scissors'){
        console.log(`You Win: ${humanChoiceToLowerCase} crushes ${computerChoice}`)
        humanScore++
    } else if(humanChoiceToLowerCase == 'rock' && computerChoice == 'paper'){
        console.log(`You lose: ${computerChoice} covers ${humanChoiceToLowerCase}`)
        computerScore++
    } else if(humanChoiceToLowerCase == 'paper' && computerChoice == 'rock'){
        console.log(`You Win: ${humanChoiceToLowerCase} covers ${computerChoice}`)
        humanScore++
    } else if(humanChoiceToLowerCase == 'paper' && computerChoice == 'scissors'){
        console.log(`You lose: ${computerChoice} cuts ${humanChoiceToLowerCase}`)
        computerScore++
    } else if(humanChoiceToLowerCase == 'scissors' && computerChoice == 'paper'){
        console.log(`You Win: ${humanChoiceToLowerCase} cuts ${computerChoice}`)
        humanScore++
    } else if(humanChoiceToLowerCase == 'scissors' && computerChoice == 'rock'){
        console.log(`You lose: ${computerChoice} crushes ${humanChoiceToLowerCase}`)
        computerScore++
    } else {
        drawScore++
    }
}