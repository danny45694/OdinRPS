

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerScore = 0;
let computerScore = 0;

    function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice == 0) {
             computerChoice = "rock";
        }
            else if (computerChoice == 1) {
                computerChoice = "paper";
        }
            else if (computerChoice == 2) {
                 computerChoice = "scissors";
        }
        return computerChoice;
    }
   computerPlay = getComputerChoice();


 function playRound(playerScore, computerScore) {
    while (playerScore <= 5 && computerScore <= 5) {
        
        let getPlayerChoice = prompt("please enter rock, paper, scissors").toLowerCase();
        let computerPlay = getComputerChoice();
        console.log(getPlayerChoice);
        console.log(computerPlay);
        if (getPlayerChoice == computerPlay) {
        console.log("It's a tie");
        }
        else if (getPlayerChoice == "rock" && computerPlay == "scissors") {
        playerScore++;
        console.log("Player Wins");
        }
        else if (getPlayerChoice == "paper" && computerPlay == "rock") {
        playerScore++;
        console.log("Player Wins!");
        }
        else if (getPlayerChoice == "scissors" && computerPlay == "paper") {
        playerScore++;
        console.log("Player wins!")
        }
        else {
        computerScore++;
        console.log("Computer wins!")
        }
        if (playerScore > 5) {
            console.log("Humanity Wins!");
        }
        else if (computerScore > 5) {
            console.log("Oh no! AI Wins!");
        }
    }
}


playRound(playerScore, computerScore, computerPlay);
