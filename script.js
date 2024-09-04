let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let numberofRounds = 0;
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let output = document.getElementById('output');
let rounds = document.getElementById('rounds');
let roundsOutput = document.getElementById('roundOutPut');
let roundsToPlay = document.getElementById('rounds_to_play');
let finalWinner = document.getElementById('finalWinner');
let displayHumanScore = document.getElementById('userScore');
let humanScoreValue = document.getElementById('humanValue')
let displayComputerScore = document.getElementById('displayComputerScore');
let computerScoreValue = document.getElementById('computerValue');
let displayedDrawScore = document.getElementById('draw');
let displayDrawScore = document.getElementById('displayDrawScore');
let displayComputersPick = document.getElementById('displayComputersPick');
let computersPick = document.getElementById('computer_pick');
let roundWinner = document.getElementById('roundWinner')
let gameWinner = document.getElementById('gameWinner')

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomValue = Math.floor(Math.random(arr[arr.length - 1]) * arr.length)
    return arr[randomValue]
}

rockBtn.addEventListener('click', (e) => {
    let aiChoice = getComputerChoice();
    let humanChoice = e.target.id;
    playRound(humanChoice, aiChoice);
    disableBtns();
    computersPick.textContent = aiChoice;
    displayComputersPick.appendChild(computersPick);

})

paperBtn.addEventListener('click', (e) => {
    let aiChoice = getComputerChoice();
    let humanChoice = e.target.id;
    playRound(humanChoice, aiChoice);
    disableBtns()
    computersPick.textContent = aiChoice;
    displayComputersPick.appendChild(computersPick);

})

scissorsBtn.addEventListener('click', (e) => {
    let aiChoice = getComputerChoice();
    let humanChoice = e.target.id;
    playRound(humanChoice, aiChoice);
    disableBtns()
    computersPick.textContent = aiChoice;
    displayComputersPick.appendChild(computersPick);

})

function playRound(humanChoice, computerChoice) {
    let draw = 'Draw!';

    if (humanChoice == computerChoice) {
        numberofRounds++;
        drawScore++;

        output.textContent = draw;
        roundWinner.appendChild(output)
        // document.body.appendChild(output);

        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);
        
        displayedDrawScore.textContent = drawScore;
        displayDrawScore.appendChild(displayedDrawScore);        
        
    }
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        output.textContent = `You Win because ${humanChoice} crushes ${computerChoice}`;
        roundWinner.appendChild(output)
        // document.body.appendChild(output);
        numberofRounds++;
        humanScore++;

        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);

        humanScoreValue.textContent = humanScore;
        displayHumanScore.appendChild(humanScoreValue);

    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        output.textContent = `You lose because ${computerChoice} covers ${humanChoice}`;
        roundWinner.appendChild(output)
        // document.body.appendChild(output)
        numberofRounds++;
        computerScore++;

        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);

        computerScoreValue.textContent = computerScore;
        displayComputerScore.appendChild(computerScoreValue);

    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        output.textContent = `You Win because ${humanChoice} covers ${computerChoice}`;
        roundWinner.appendChild(output)
        // document.body.appendChild(output);
        numberofRounds++;
        humanScore++;

        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);

        humanScoreValue.textContent = humanScore;
        displayHumanScore.appendChild(humanScoreValue);

    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        output.textContent = `You lose because ${computerChoice} cuts ${humanChoice}`;
        roundWinner.appendChild(output)
        // document.body.appendChild(output)
        numberofRounds++;
        computerScore++;

        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);

        computerScoreValue.textContent = computerScore;
        displayComputerScore.appendChild(computerScoreValue);

    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        output.textContent = `You Win because ${humanChoice} cuts ${computerChoice}`;
        roundWinner.appendChild(output)
        // document.body.appendChild(output)
        numberofRounds++;
        humanScore++;

        roundsOutput.textContent = `${numberofRounds}`;
        rounds.appendChild(roundsOutput);

        humanScoreValue.textContent = humanScore;
        displayHumanScore.appendChild(humanScoreValue);

    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
       output.textContent = `You lose because ${computerChoice} crushes ${humanChoice}`;
       roundWinner.appendChild(output)
       numberofRounds++; 
       computerScore++;

       roundsOutput.textContent = `${numberofRounds}`;
       rounds.appendChild(roundsOutput);

       computerScoreValue.textContent = computerScore;
       displayComputerScore.appendChild(computerScoreValue);

    } 
}



function disableBtns(){
    if(numberofRounds == 5){
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        if(humanScore > computerScore){
            finalWinner.textContent = 'Game Over : You WIN!'
            gameWinner.appendChild(finalWinner);
        }else if(computerScore > humanScore){
            finalWinner.textContent = 'Game Over : You Lose';
            gameWinner.appendChild(finalWinner);
        } else {
            finalWinner.textContent = 'Game Over : Game Ends In A Draw';
            gameWinner.appendChild(finalWinner);
        }
    }
}

// display computer's pick
// You can add a last feature when announcing the final winner
// use a timeout to display Game over, announce winner, and lastly number of final scores
// when you get to last round, change the output to Last round : then put the result of that play
// if statements should be able to handle the above
// the button to select number of arounds should be highlighted for a new game
// as soon as the game starts you disable that button.
// as soon as it ends when it announces the winner you enable the button so it can be clicked to start a new game

