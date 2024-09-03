let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let output = document.getElementById('output');


rockBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id
    playRound(humanChoice, getComputerChoice());
    console.log(humanScore)
    console.log(computerScore)
    console.log(drawScore)
})

paperBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id;
    playRound(humanChoice, getComputerChoice());
    console.log(humanScore)
    console.log(computerScore)
    console.log(drawScore)
})

scissorsBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id;
    playRound(humanChoice, getComputerChoice());
    console.log(humanScore)
    console.log(computerScore)
    console.log(drawScore)
})

function playRound(humanChoice, computerChoice) {
    console.log(`My choice : ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    let lose = 'You lose! Paper beats Rock';
    let win = 'You Win!';
    let draw = 'Draw!'
    if (humanChoice == computerChoice) {
        drawScore++
        output.textContent = draw;
        document.body.appendChild(output)
    }
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        output.textContent = `You Win: ${humanChoice} crushes ${computerChoice}`;
        document.body.appendChild(output);
        humanScore++
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        output.textContent = `You lose: ${computerChoice} covers ${humanChoice}`;
        document.body.appendChild(output)
        computerScore++
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        output.textContent = `You Win: ${humanChoice} covers ${computerChoice}`;
        document.body.appendChild(output)
        humanScore++
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        output.textContent = `You lose: ${computerChoice} cuts ${humanChoice}`;
        document.body.appendChild(output)
        computerScore++
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        output.textContent = `You Win: ${humanChoice} cuts ${computerChoice}`;
        document.body.appendChild(output)
        humanScore++
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
       output.textContent = `You lose: ${computerChoice} crushes ${humanChoice}`;
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

