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

function translateChoice2int(choice)
{
    choice = choice.toLowerCase();
    choice = choice.trim();
    if (choice == "rock") return ROCK;
    else if (choice == "paper") return PAPER;
    else if (choice == "scissor") return SCISSOR;
}

function computerPlay()
{
    return Math.floor(Math.random * POSSIBLE_CHOICES);
}

function getNext(selection)
{
    switch (selection) {
    case ROCK: return PAPER;
    case PAPER: return SCISSOR;
    case SCISSOR: return ROCK;
    default: console.assert(false);
    }
}

function playRound(playerSelection, computerSelection)
{
    if (computerSelection === playerSelection) {
        return "DRAW!"
    }
    else if (getNext(playerSelection) === computerSelection) {
        
        return `You lose! ${translateChoice2str(computerSelection)} beats ${translateChoice2str(playerSelection)}`;
    }
    else {
        return `You win! ${translateChoice2str(playerSelection)} beats ${translateChoice2str(computerSelection)}`;
    }
}
