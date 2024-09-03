let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let numberofRounds = 0;
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let output = document.getElementById('output');
let rounds = document.getElementById('rounds');
let roundsOutput = document.getElementById('roundOupt');
let roundsToPlay = document.getElementById('rounds_to_play');
let finalWinner = document.getElementById('finalWinner');


rockBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id
    playRound(humanChoice, getComputerChoice());
    disableBtns()
    console.log(humanScore)
    console.log(computerScore)
    console.log(drawScore)
})

paperBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id;
    playRound(humanChoice, getComputerChoice());
    disableBtns()
    console.log(humanScore)
    console.log(computerScore)
    console.log(drawScore)
})

scissorsBtn.addEventListener('click', (e) => {
    let humanChoice = e.target.id;
    playRound(humanChoice, getComputerChoice());
    disableBtns()
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
        numberofRounds++;
        drawScore++;
        output.textContent = draw;
        document.body.appendChild(output);
        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);
    }
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        output.textContent = `You Win: ${humanChoice} crushes ${computerChoice}`;
        document.body.appendChild(output);
        numberofRounds++;
        humanScore++;
        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        output.textContent = `You lose: ${computerChoice} covers ${humanChoice}`;
        document.body.appendChild(output)
        numberofRounds++;
        computerScore++;
        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        output.textContent = `You Win: ${humanChoice} covers ${computerChoice}`;
        document.body.appendChild(output);
        numberofRounds++;
        humanScore++;
        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        output.textContent = `You lose: ${computerChoice} cuts ${humanChoice}`;
        document.body.appendChild(output)
        numberofRounds++;
        computerScore++;
        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        output.textContent = `You Win: ${humanChoice} cuts ${computerChoice}`;
        document.body.appendChild(output)
        numberofRounds++;
        humanScore++;
        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
       output.textContent = `You lose: ${computerChoice} crushes ${humanChoice}`;
       numberofRounds++; 
       computerScore++;
       roundsOutput.textContent = `${numberofRounds}`;
       rounds.appendChild(roundsOutput);
    }
}

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random(arr[arr.length - 1]) * arr.length)
    console.log(`Computer's Pick: ${arr[randomValue]}`)
    return arr[randomValue]
}

function disableBtns(){
    if(numberofRounds == 5){
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        if(humanScore > computerScore){
            finalWinner.textContent = 'Game Over : You WIN!'
            document.body.appendChild(finalWinner);
        }else if(computerScore > humanScore){
            finalWinner.textContent = 'Game Over : You Lose';
            document.body.appendChild(finalWinner);
        } else {
            finalWinner.textContent = 'Game Over : Game Ends In A Draw';
            document.body.appendChild(finalWinner);
        }
    }
}


// You can add a last feature when announcing the final winner
// use a timeout to display Game over, announce winner, and lastly number of final scores
// when you get to last round, change the output to Last round : then put the result of that play
// if statements should be able to handle the above

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

