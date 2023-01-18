function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    switch (randomNumber){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissor";
            break;
    }
    return choice;
}

function gameRound(computerChoice, playerChoice){
    let rock = /rock/i; let paper = /paper/i; let scissor = /scissor/i
    let result; let winner; let loser;
    if (computerChoice === "rock" && playerChoice.match(rock)){
        result = "draw!!";
    }
    else if (computerChoice === "rock" && playerChoice.match(paper)){
        result = "You win!!";
    }
    else if (computerChoice === "rock" && playerChoice.match(scissor)){
        result = "You lose!!";
    }
    else if (computerChoice === "paper" && playerChoice.match(rock)){
        result = "You lose!!";
    }
    else if (computerChoice === "paper" && playerChoice.match(paper)){
        result = "draw!!"
    }
    else if (computerChoice === "paper" && playerChoice.match(scissor)){
        result = "You win!!";
    }
    else if (computerChoice === "scissor" && playerChoice.match(rock)){
        result = "You win!!";
    }
    else if (computerChoice === "scissor" && playerChoice.match(paper)){
        result = "You lose!!";
    }
    else if (computerChoice === "scissor" && playerChoice.match(scissor)){
        result = "draw!!"
    }
    else {
        return (alert("Invalid input"), computerChoice = getComputerChoice(),
        playerChoice = prompt("Rock, Paper or Scissor?"), gameRound(computerChoice, playerChoice));
    }

    if (result === "You win!!"){
        winner = playerChoice;
        loser = computerChoice;
    }
    else if (result === "You lose!!"){
        winner = computerChoice;
        loser = playerChoice;
    }
    else if (result === "draw!!"){
        return ("draw!!");
    }
    
    return (`${result}  ${winner} beats ${loser}`);
}

function game(){
    let computerChoice; let playerChoice; let result;
    let playerScore = 0; let ComputerScore = 0;
    for (let i = 0; i < 5; i++){
        computerChoice = getComputerChoice();
        playerChoice = prompt("Rock, Paper or Scissor?");
        result =gameRound(computerChoice, playerChoice);
        alert(result);
        if (result.match("You win!!")){
            playerScore += 1;
        }
        else if (result.match("You lose!!")){
            ComputerScore += 1;
        }
    }
    if (playerScore > ComputerScore || playerScore === 3){
        return (`You win!! You:${playerScore} Computer:${ComputerScore}`);
    }
    else if (playerScore < ComputerScore || ComputerScore === 3){
        return (`You lose!! You:${playerScore} Computer:${ComputerScore}`);
    }
    else {
        return ("Draw!!")
    }
}

alert(game())
