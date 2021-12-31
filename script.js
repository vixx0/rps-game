function computerPlay() {
    const optionsList = ["rock", "paper", "scissors"];
    let option = optionsList[Math.floor(Math.random() * 3)];
    return option
  }

  /* function computerPlay() is what the computer will use to make a choice. OptionsList is the choices. option creates a random number
  and multiplies it by 3 (makes a whole number) assigns it to one of the items from options list and returns it  */
  
  function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Choose: rock, paper or scissors").toLowerCase();
    var computerSelection = computerPlay();

    /* function playRound takes two variables playerselection and computerselection. player selection prompts the user to make a choice
    of rock paper or scissors and then makes the input lower case. computer selection calls on the function computerPlay to make a choice */
  
    if (playerSelection === "rock") {
      switch (computerSelection) {
        case "rock":
          return "T";
        case "paper":
          return "L";
        case "scissors":
          return "W";
      }
    } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case "rock":
          return "W";
        case "paper":
          return "T";
        case "scissors":
          return "L";
      }
    } else if (playerSelection === "scissors") {
      switch (computerSelection) {
        case "rock":
          return "L";
        case "paper":
          return "W";
        case "scissors":
          return "T";
      }
    }
  }

  /* the code above goes through all the possible outcomes. when the computer types in rock, it will call upon computer selection and go through
  the choices and return and out come W = win, L = lose and T = tie. */
  
  function game() {
    for (i = 1; i <= 5; i++) {
      let outcome = playRound()
      if (outcome === "L") {
        console.log("Machine Wins, You Lose");
      } else if (outcome === "W") {
        console.log("You Win")
      } else if (outcome === "T") {
        console.log("It's a Tie!")
      }
    }
  }

  /* this function is the game playing multiple rounds. It has a for loop that loops up to 5 times. outcome is assigned the results of
  playRound function and console.logs a messaged based on the result */
  
  game();