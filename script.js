const ROCK    = 0;
const PAPER   = 1;
const SCISSOR = 2;
let POSSIBLE_CHOICES = 3;

function computerPlay()
{
    return Math.floor(Math.random * POSSIBLE_CHOICES);
}

function translateChoice(choice)
{
    switch (choice) {
        case ROCK:    return "ROCK";
        case PAPER:   return "PAPER";
        case SCISSOR: return "SCISSOR";
        default: console.assert(false);
    }
}

translateChoice(0);
translateChoice(1);
translateChoice(2);

