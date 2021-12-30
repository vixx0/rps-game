function computerPlay() {
    var optionList = ["rock", "paper", "scissors"]
    var option = [optionList, Math.floor(Math.random() * 3)]
    return option; 
}

function playRound (playerSelection, computerSelection) {
    var playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?").toLowerCase();
    var computerSelection = computerPlay;
       
        if (playerSelection === "rock") {
            switch (computerSelection) {
                case "rock":
                return ("tie");
                break;

                case "paper":
                return ("win");
                break;

                case "scissors":
                return ("lose");
                break;
            }
        }
        else if (playerSelection === "paper") {
            switch (computerSelection) {
                case "rock":
                return ("lose");
                break;

                case "paper":
                return ("tie");
                break;

                case "scissors":
                return ("win");
                break;
            }
        }
        else if (playerSelection === "scissors") {
            switch (computerSelection) {
                case "rock":
                return ("win");
                break;

                case "paper":
                return ("lose");
                break;

                case "scissors":
                return ("tie");
                break;
        }
    }
}
