

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerPlay = "";
let playerScore = 0;
let computerScore = 0;
let getPlayerChoice = prompt("please enter rock, paper or scissors").toLowerCase();
let computerChoice = Math.floor(Math.random() * 3);

function playGame() {
    function getComputerChoice(computerPlay) {
        
        if (computerChoice == 0) {
            return computerPlay = "rock";
        }
            else if (computerChoice == 1) {
                return computerPlay = "paper";
        }
            else if (computerChoice == 2) {
                return computerPlay = "scissors";
        }
    }
        return getComputerChoice;

    function playRound(computerPlay, getPlayerChoice) {
        if (getPlayerChoice == computerPlay) {
        return "It's a tie";
        }
        else if (getPlayerChoice == "rock" && computerPlay == "scissors") {
        playerScore++;
        return "Player Wins!";
        }
        else if (getPlayerChoice == "paper" && computerPlay == "rock") {
        playerScore++
        return "Player Wins!"
        }
        else if (getPlayerChoice == "scissors" && computerPlay == "paper") {
        playerScore++
        return "Player wins!"
        }
        else {
        computerScore++
        return "Computer wins!"
        }
    }
}