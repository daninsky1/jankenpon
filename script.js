const ROCK    = 0;
const PAPER   = 1;
const SCISSOR = 2;
let POSSIBLE_CHOICES = 3;

function translateChoice2str(choice)
{
    switch (choice) {
        case ROCK:    return "ROCK";
        case PAPER:   return "PAPER";
        case SCISSOR: return "SCISSOR";
        default: console.assert(false);
    }
}

function translateChoice2int(strChoice)
{
    strChoice = strChoice.toLowerCase();
    strChoice = strChoice.trim();
    if (strChoice === "rock") return ROCK;
    else if (strChoice === "paper") return PAPER;
    else if (strChoice === "scissor") return SCISSOR;
    else return null;
}

function computerPlay()
{
    return Math.floor(Math.random() * POSSIBLE_CHOICES);
}

function getNext(intChoice)
{
    switch (intChoice) {
    case ROCK: return PAPER;
    case PAPER: return SCISSOR;
    case SCISSOR: return ROCK;
    default: console.assert(false);
    }
}

function playRound(playerSelection, computerSelection)
{
    if (computerSelection === playerSelection) {
        console.log("DRAW!");
        return 0;
    }
    else if (getNext(playerSelection) === computerSelection) {
        
        console.log(`You lose! ${translateChoice2str(computerSelection)} beats ${translateChoice2str(playerSelection)}`);
        return -1;
    }
    else {
        console.log(`You win! ${translateChoice2str(playerSelection)} beats ${translateChoice2str(computerSelection)}`);
        return 1;
    }
}

function game(minRound=3)
{
    let comScore = 0;
    let playerScore = 0;
    let playerChoice = "";
    let round = 0;
    while ((round < minRound) || (comScore === playerScore)) {
        playerChoice = translateChoice2int(prompt());
        while (!playerChoice) {
            playerChoice = translateChoice2int(prompt("Wrong input, choose rock paper or scissor."));
        }
        switch (playRound(playerChoice, computerPlay())) {
        case 1: {
            playerScore++;
            break;
        }
        case -1: {
            comScore++;
            break;
        }
        }
        round++;
    }
    console.assert(comScore != playerScore);
    let gameOverMsg = "GAME OVER!";
    if (comScore > playerScore)
        gameOverMsg = gameOverMsg.concat(" YOU LOSE!");
    else 
        gameOverMsg = gameOverMsg.concat(" YOU WIN!");
    console.log(gameOverMsg);
    console.log(`Computer ${comScore} X Player ${playerScore}`);
}

game(3);