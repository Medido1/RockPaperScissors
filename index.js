let roundWinner = ""; let playerScore=0; let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const round_result = document.getElementById("round_result");
const player_box = document.getElementById("player_box")
const computer_box = document.getElementById("computer_box");
const player_score_box= document.getElementById("player_score_box");
const computer_score_box = document.getElementById("computer_score_box");
const final_result = document.getElementById("final_result");
const restart_btn = document.getElementById("restart_btn");

rock.addEventListener("click", ()=> {
	if (isGameOver()){
		alert("Game over!! Press PlayAgain to start a new game!!");
		return;
	}
	playRound("rock")
})

paper.addEventListener("click", ()=> {
	if (isGameOver()){
		alert("Game over!! Press PlayAgain to start a new game!!");
		return;
	}
	playRound("paper")
})
scissor.addEventListener("click", ()=> {
	if (isGameOver()){
		alert("Game over!! Press PlayAgain to start a new game!!");
		return;
	}
	playRound("scissor")
})

restart_btn.addEventListener("click", restartGame);

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
      computerScore++
  }
	showRoundResult(roundWinner, playerChoice, computerChoice);
	if (isGameOver()){
		showFinalResult(playerScore, computerScore);
	}
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
	player_box.textContent = `You : ${playerScore}`;
	computer_box.textContent = `Computer : ${computerScore}`;
	changeSize(playerScore, computerScore);
}

function changeSize(playerScore, computerScore){
	if (playerScore === computerScore){
		player_score_box.classList.remove("shrink");
		computer_score_box.classList.remove("grow");
		player_score_box.classList.remove("grow");
		computer_score_box.classList.remove("shrink");
	}
	else if (playerScore > computerScore){
		player_score_box.classList.remove("shrink")
		computer_score_box.classList.remove("grow");
		player_score_box.classList.add("grow");
		computer_score_box.classList.add("shrink");
	}
	else if (playerScore < computerScore){
		player_score_box.classList.remove("grow")
		computer_score_box.classList.remove("shrink");
		player_score_box.classList.add("shrink");
		computer_score_box.classList.add("grow");
	}
}

function isGameOver(){
	return (playerScore === 5 || computerScore === 5);
}

function showFinalResult(playerScore, computerScore){
	if (playerScore > computerScore){
		final_result.textContent = `You win!! You : ${playerScore} Computer : ${computerScore}`;
	}
	else if (playerScore < computerScore){
		final_result.textContent = `You lose :( Computer : ${computerScore} You : ${playerScore}`;
	}
}

function removeClasses(player_score_box, computer_score_box){
	player_score_box.classList.remove("grow");
	player_score_box.classList.remove("shrink");
	computer_score_box.classList.remove("grow");
	computer_score_box.classList.remove("shrink");
}

function restartGame(){
	round_result.textContent = "choose Rock Paper or Scissor!!";
	final_result.textContent = "First to 5 wins!!";
	round_box.style.backgroundColor = "black";
	playerScore = 0; computerScore = 0;
	player_box.textContent = `You : ${playerScore}`;
	computer_box.textContent = `Computer : ${computerScore}`;
	removeClasses(player_score_box, computer_score_box);
}
