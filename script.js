let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors')
rockBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id
    playRound(humanChoice, getComputerChoice());
})

paperBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id;
    playRound(humanChoice, getComputerChoice());
})

scissorsBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id;
    playRound(humanChoice, getComputerChoice());
})

function playRound(humanChoice, computerChoice) {
    console.log(`My choice : ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    let lose = 'You lose! Paper beats Rock';
    let win = 'You Win!';
    let draw = 'Draw!'
    if (humanChoice == computerChoice) {
        drawScore++
        console.log(draw)
    }
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`You Win: ${humanChoice} crushes ${computerChoice}`)
        humanScore++
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log(`You lose: ${computerChoice} covers ${humanChoice}`)
        computerScore++
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log(`You Win: ${humanChoice} covers ${computerChoice}`)
        humanScore++
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`You lose: ${computerChoice} cuts ${humanChoice}`)
        computerScore++
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`You Win: ${humanChoice} cuts ${computerChoice}`)
        humanScore++
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`You lose: ${computerChoice} crushes ${humanChoice}`)
        computerScore++
    }
}

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random(arr[arr.length - 1]) * arr.length)
    console.log(`Computer's Pick: ${arr[randomValue]}`)
    return arr[randomValue]
}

function getHumanChoice() {
    let userChoice = prompt('Enter a value')
    console.log(`My Pick: ${userChoice}`)
    return userChoice
}




// function playGame() {
//     console.clear()
//     for (let i = 1; i < 6; i++) {
        
//         playRound(getHumanChoice(), getComputerChoice())
//         console.log(`HumanScore: ${humanScore}`)
//         console.log(`ComputerScore: ${computerScore}`)
//         console.log(`DrawScore: ${drawScore}`)
//         console.log(`Round : ${i}`)
//         console.log('-------------------'); // Separator for clarity
//     }
//     if(humanScore > computerScore){
//         console.log('You WIN!') 
//     }else if(computerScore > humanScore){
//         console.log('You Lose')
//         console.log('AI WINS')
//     }else{
//         console.log('This Game Ended In A Draw')
//     }
// }


// playGame()

