const buttonContainer = document.querySelector("#buttonContainer")
buttonContainer.style.cssText = 
    `display: flex;
    justify-content: center;`

const buttonRock = document.createElement('button');
buttonRock.id = 'rock';
buttonRock.classList.add('RPS');
buttonRock.textContent = "Rock";

const buttonPaper = document.createElement('button');
buttonPaper.id = 'paper';
buttonPaper.classList.add('RPS');
buttonPaper.textContent = "Paper"

const buttonSissors = document.createElement('button');
buttonSissors.id = 'sissors';
buttonSissors.classList.add('RPS');
buttonSissors.textContent = "Sissors";

buttonContainer.appendChild(buttonRock);
buttonContainer.appendChild(buttonPaper);
buttonContainer.appendChild(buttonSissors);

const rpsButtons = document.querySelectorAll('.RPS');

rpsButtons.forEach((button) => {
    
    button.addEventListener('click', () => {
        playGame(button.id)
    })

    button.style.cssText = `    
        margin: 10px;
        font-size: 200%;
        cursor: pointer;`
})

const scoreContainer = document.querySelector('#scoreContainer');

//Create a varible that stores game wins for the player
let playerWins = 0;
//create a varible that stores game wins for the comupter
let computerWins = 0;
//create a varible that stores how many rounds have been played
let rounds = 1;









function playGame(playerSelection){
    //log Rock paper sissors ~ Project
    console.log("Rock Paper Sissors ~ A Project created by CarbonBond, Instructions from The Odin Project");
    //log First game
    console.log(`game ${rounds}:START `);
    //get player input into a varible
    //playerSelection = getPlayerSelection();
    // get computer to choose Rock paper or sissors into a varible
    computerSelection = getComputerSelection();
    // compare computer and players selections
    result = checkRound(playerSelection, computerSelection);
    //updatescore and log the result
    updateScore(result, playerSelection, computerSelection);
    // log whoever wins the game
    logWinner();
}


function logWinner(){
    if(playerWins === 5){
        scoreContainer.textContent = "You won the game!";
        playerWins = 0;
        computerWins = 0;
        rounds = 0;
    } else if (computerWins == 5) {
        scoreContainer.textContent ="You lost the game!";
        playerWins = 0;
        computerWins = 0;
        rounds = 0;
    }
}

function updateScore(result, playerSelection, computerSelection){
    switch(result){
        case "tie":
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
            console.log(`   You tied this round`);
            break;
        case "player":
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
            console.log(`   You won this round`);
            playerWins += 1;
            break;
        case "computer":
            console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
            console.log(`   You Lost this round!`);
            computerWins += 1;     
            break;       
    }  
    scoreContainer.textContent = `
    Player selecction: ${playerSelection} | Computer: ${computerSelection}
    |||||||||||
    Current Score: Player: ${playerWins} | Computer: ${computerWins}
    `
    rounds += 1;
}

function checkRound(playerSelection, computerSelection){
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
        
    if (result === "") {console.error("function checkRound did not receave a result");}
    return result;
}

function getPlayerSelection() { 
    do{
        playerSelection = prompt(`Rock, Paper, or Sissors`, ""); //Player doesn't hit cancel
    } while (playerSelection == null)
    playerSelection = playerSelection.toLowerCase();
    //make player input into all lowercase
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "sissors" || playerSelection == null){
        playerSelection = prompt(` ${playerSelection} is not a correct answer, Please choose: Rock, Paper, or Sissors`, "");
        if(playerSelection != null) {playerSelection = playerSelection.toLowerCase();}
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

