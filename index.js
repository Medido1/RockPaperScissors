let roundWinner = ""; let playerScore=0; let ComputerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const round_result = document.getElementById("round_result");

rock.addEventListener("click", ()=> {
	playRound("rock")
})
paper.addEventListener("click", ()=> {
	playRound("paper")
})
scissor.addEventListener("click", ()=> {
	playRound("scissor")
})

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

function playRound(playerChoice, computerChoice){
	computerChoice = getComputerChoice();
  if (playerChoice === computerChoice){
    roundWinner = "draw";
  }
  else if(
		(playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock")||
    (playerChoice === "scissor" && computerChoice === "paper")){
      roundWinner = playerChoice;
      playerScore++
  }
	else if(
		(playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissor")||
    (playerChoice === "scissor" && computerChoice === "rock")){
      roundWinner = computerChoice;
      ComputerScore++
  }
	showRoundResult(roundWinner, playerChoice, computerChoice)
}

function showRoundResult(roundWinner, playerChoice, computerChoice){
	if (roundWinner === "draw"){
		round_result.textContent = "it'a Draw!!";
		round_box.style.backgroundColor = "green";
	}
	else if (roundWinner === playerChoice){
		round_result.textContent = `You win!! ${playerChoice} beats ${computerChoice}`;
		round_box.style.backgroundColor = "blue";
	}
	else if (roundWinner === computerChoice){
		round_result.textContent = `You lose :( ${computerChoice} beats ${playerChoice}`;
		round_box.style.backgroundColor = "red";
	}
}


