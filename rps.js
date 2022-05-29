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

// runs a best of 5 rock paper scissors game
// instead of for loop a while loop can be used instead
// project page asked for a 5 round game
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    
    while((scorePlayer < 3))
    {
        if (scoreComputer >= 3)
        {
            break;
        }

        console.log("Player points: " + scorePlayer + " Computer points: " + scoreComputer);
        let moveComputer = computerPlay();
        let movePlayer = playerSelection();
        let rpsOutcome = rpsPlay(moveComputer, movePlayer);

        console.log (rpsOutcome);
        if (rpsOutcome == "VICTORY!") 
        {
            scorePlayer++;
        }
        else if (rpsOutcome == "DEFEAT!")
        {
            scoreComputer++;
        }

        console.log("\nComputer picks " + moveComputer);
        console.log("\nPlayer picks " + movePlayer);
        

    }

    return (scorePlayer === 3 ? "PLAYER HAS WON THE BO5" : "PLAYER HAS LOST THE BO5");
}




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
console.log(game());

