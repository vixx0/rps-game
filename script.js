function computerPlay() {
    const optionList = ["rock", "paper", "scissors"]
    var option = optionList[Math.floor(Math.random() * 3)]
    return option 
}

function playRound (playerSelection, computerSelection) {
    var playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?").toLowerCase();
    var computerSelection = computerPlay();
       
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

function game() {
    for (i = 1; i <= 5; i++) {
        let result = playRound()
        if (result === "win") {
        console.log("You won");
        } else if (result === "lose") {
        console.log("You lost");
        } else if (result === "tie") {
        console.log("It's a tie"); 
        }
    }
}

game()
