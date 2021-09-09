


//log Rock paper sissors ~ Project
console.log("Rock Paper Sissors ~ A Project created by CarbonBond, Instructions from The Odin Project");

//Create a varible that stores game wins for the player
let playerWins = 0;
//create a varible that stores game wins for the comupter
let computerWins = 0;
//loop game five times
for (let i = 1; i<6; i++) {

//log First game
    console.log(`game ${i} START `);
//get player input into a varible
    playerSelection = getPlayerSelection();
// get computer to choose Rock paper or sissors into a varible
    computerSelection = getComputerSelection();
// compare computer and players selections
    result = playRound(playerSelection, computerSelection);
// log a winner of this round
    switch(result){
        case "tie":
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection};  
            You tied this round`);
            break;
        case "player":
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection};  
            You won this round`);
            playerWins += 1;
            break;
        case "computer":
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection};  
            You Lost this round!`);
            computerWins += 1;     
            break;       
    }
    console.log(`Current Score: Player: ${playerWins} | Computer: ${computerWins}`)

}//Ending of game loop
// log whoever wins the game
if(playerWins > computerWins){
    console.log("You won the game!");
} else if (playerWins < computerWins) {
    console.log("You lost the game!");
} else {
    console.log("The game was a tie!");
}

function playRound(playerSelection, computerSelection){
    let result = "";
    if(playerSelection === "rock") {
        switch(computerSelection){
            case "rock":
                result = "tie";
                break;
            case "sissors":
                result = "player";
                break;
            case "paper":
                result = "computer";
                break;
        }
    }
    else if(playerSelection === "paper") {
        switch(computerSelection){
            case "paper":
                result = "tie";
                break;
            case "rock":
                result = "player";
                break;
            case "sissors":
                result = "computer";
                break;
        }
    }
    else if(playerSelection === "sissors") {
        switch(computerSelection){
            case "sissors":
                result = "tie";
                break;
            case "paper":
                result = "player";
                break;
            case "rock":
                result = "computer";
                break;
        }
    } 
        
    if (result === "") {console.error("function playRound did not receave a result");}
    
    return result;
}

function getPlayerSelection() {
    playerSelection = prompt(`Rock, Paper, or Sissors`, "");
    playerSelection = playerSelection.toLowerCase();
    //make player input into all lowercase
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "sissors"){
        playerSelection = prompt(` ${playerSelection} is not a correct answer, Please choose: Rock, Paper, or Sissors`, "");
        playerSelection = playerSelection.toLowerCase();
    }//Make sure player input is correct, or ask again
    return playerSelection;
}

function getComputerSelection(){
    randomChoice = getRandom3();
    selection = "";
    switch(randomChoice){
        case 1:
            selection = 'rock';
            break;
        case 2:
            selection = 'paper';
            break;
        case 3:
            selection = 'sissors';
            break;
        default:
            console.error("getComputerSelection: Switch error: Default case shouldn't go through")            
    }
    return selection;
}

function getRandom3(){
    return Math.floor(Math.random() * (4 - 1)+1);
}

