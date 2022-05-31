// computer picks a move based on random function
// 0 - Rock, 1 - Paper, 2 - Scissors
function computerPlay() 
{
    switch(Math.floor(Math.random() * 3))
    {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }

}

// Prompts player to input a move, sanitizes leading/trailing whitespace
// converts all characters to lowercase
function playerSelection() 
{
    return ((prompt("Please enter your move")).trim()).toLowerCase(); 
}

// Compares the moves of the computer and player
// Logic based on regular rock paper scissors
// returns a string of the result
function rpsPlay(moveComputer, movePlayer)
{
    switch(movePlayer)
    {
        case "rock":
            
            if (moveComputer == "Rock")
            {
                return "DRAW!";
            }
            else if (moveComputer === "Paper")
            {
                return "DEFEAT!";
            }
            else if (moveComputer == "Scissors")
            {
                return "VICTORY!";
            }
        case "paper":
            if (moveComputer == "Rock")
            {
                return "VICTORY!";
            }
            else if (moveComputer == "Paper")
            {
                return "DRAW!";
            }
            else if (moveComputer == "Scissors")
            {
                return "DEFEAT!";
            }
        case "scissors":
            if (moveComputer == "Rock")
            {
                return "DEFEAT!";
            }
            else if (moveComputer == "Paper")
            {
                return "VICTORY!";
            }
            else if (moveComputer == "Scissors")
            {
                return "DRAW!";
            }
        default: "Invalid input";
                
    }
}

const body = document.querySelector('body'); 
const listenButtons  = document.querySelectorAll('button');

const header = document.createElement("h2");
const header2 = document.createElement("h3");
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
const containerComputerMove = document.createElement("div");
const containerButtons = document.createElement("div");
const containerScoreboard = document.createElement("div");
const containerResult = document.createElement("div");
const containerFirstTo5 = document.createElement("div");
const buttonNewGame = document.createElement("button");

header.textContent = "ROCK PAPER SCISSORS";
header2.textContent = "First to five!";
body.appendChild(header);
body.appendChild(header2);

buttonRock.textContent = "ROCK";
buttonPaper.textContent = "PAPER";
buttonScissors.textContent = "SCISSORS";
containerButtons.appendChild(buttonRock);
containerButtons.appendChild(buttonPaper);
containerButtons.appendChild(buttonScissors);
// containerButtons.style.cssText = "display:flex\
// ;justify-content:space-evenly;align-items:center\
// margin:50px"
containerButtons.style.cssText = "display:flex\
 ;justify-content:space-evenly;margin:50px;\
 align-items:center;gap:30px";
body.appendChild(containerButtons);

body.style.cssText = 'display:flex;\
flex-direction:column;justify-content:center;\
align-items:center;color:white;font-family: Roboto, sans-serif;';





function printResult(result)
{
    containerResult.textContent = `Result: ${result}`;
    body.appendChild(containerResult);
}

let scorePlayer = 0;
let scoreComputer = 0;
function scoreTally(result, moveComputerText)
{
    if (result == "VICTORY!")
    {
        scorePlayer++;
        containerScoreboard.textContent = `PLAYER: ${scorePlayer}\
        - COMPUTER: ${scoreComputer}`;
    }
    else if (result == "DEFEAT!")
    {
        scoreComputer++;
        containerScoreboard.textContent = `PLAYER: ${scorePlayer}\
        - COMPUTER: ${scoreComputer}`;
    }
    containerComputerMove.textContent = `COMPUTER PLAYS ${moveComputerText.toUpperCase()}`;
    body.appendChild(containerComputerMove);
    body.appendChild(containerScoreboard); 
}

function checkScore(scoreComputer, scorePlayer)
{
    if (scorePlayer == 5)
    {
        console.log("THE PLAYER WINS!")
        containerFirstTo5.textContent = "YOU HAVE WON THE GAME!";
        body.appendChild(containerFirstTo5);
    }
    else if (scoreComputer == 5)
    {
        console.log("THE COMPUTER WINS!")
        containerFirstTo5.textContent = "THE COMPUTER HAS WON THE GAME!";
        body.appendChild(containerFirstTo5);
    }
}

function descriptionResults(result, moveComputerText)
{
    // if (scoreComputer == 5 || scorePlayer == 5)
    // {
    //     scoreComputer = 0;
    //     scorePlayer = 0;
    //     // containerFirstTo5.remove();
    //     // containerResult.remove();
    //     body.appendChild(buttonNewGame);
    // }
    scoreTally(result, moveComputerText);
    printResult(result);
    checkScore(scoreComputer, scorePlayer);
}

function cleanUp()
{
    if (scoreComputer >= 5 || scorePlayer >= 5)
    {
        buttonNewGame.textContent = "New game?";
        body.appendChild(buttonNewGame);
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
    }
}
buttonRock.addEventListener('click', () => {
    let moveComputerText = computerPlay();
    let result = rpsPlay(moveComputerText, "rock");
    descriptionResults(result, moveComputerText);
    cleanUp();
});
buttonPaper.addEventListener('click', () => {
    let moveComputerText = computerPlay();
    let result = rpsPlay(moveComputerText, "paper");
    descriptionResults(result, moveComputerText);
    cleanUp();
});
buttonScissors.addEventListener('click', () => {
    let moveComputerText = computerPlay();
    let result = rpsPlay(moveComputerText, "scissors");
    descriptionResults(result, moveComputerText);
    cleanUp();
});

buttonNewGame.addEventListener('click', () => {
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
    scoreComputer = 0;
    scorePlayer = 0;
    containerFirstTo5.remove();
    containerResult.remove();
    containerScoreboard.remove();
    containerComputerMove.remove();
    buttonNewGame.remove();
});

listenButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        alert(button.id)
    });
});

buttonRock.style.cssText = "background-color: #121212; color: white; border: 2px solid #f44336; border-radius: 12px; padding: 16px 40px";
buttonPaper.style.cssText = "background-color: #121212; color: white; border: 2px solid #4CAF50; border-radius: 12px; padding: 16px 40px";
buttonScissors.style.cssText = "background-color: #121212; color: white; border: 2px solid #008CBA; border-radius: 12px; padding: 16px 40px";
buttonNewGame.style.cssText = "background-color: #121212; color: white; border: 2px solid white; border-radius: 12px; padding: 16px 40px; margin: 20px";
document.body.style.backgroundColor = "#121212";




// Test computerPlay() function
// Should returns strings of either rock paper scissor randomly
//console.log((computerPlay()))

// Test playerSelection() function
// Prompts for and then returns player input
//console.log(playerSelection())

// Test rpsPlay() function
// Plays a round of rock paper scissors and returns a string of the result
// let moveComputer = computerPlay();
// let movePlayer = playerSelection();
// let rpsOutcome = rpsPlay(moveComputer, movePlayer);
// console.log(rpsOutcome);

// Test game() function
// runs the rpsPlay() up to 5 times for a BO5 and declares a winner
//console.log(game());

