const player=document.getElementById("player-score")
const computer=document.getElementById("computer-score")
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const btnContainer = document.querySelector(".btn-container");
const resetGameBtn = document.getElementById("reset-game-btn");


function getRandomComputerResult(){
    const options=["stone", "paper", "scissors"]
    const randomIndex=Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

function hasPlayerWontheRound(player, computer){
    return (
        (player === "stone" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
    (player=== "paper" && computer === "stone")
    )
}

let playerscore=0
let computerScore=0

function getRoundResults(userOption){
    const computerResult=getRandomComputerResult()
    if(hasPlayerWontheRound(userOption, computerResult)){
        playerscore++
        return `Player wins! ${userOption} beats ${computerResult}`
    }
    else if(computerResult===userOption){
        return `Its a tie, both chose ${userOption}`
    }
    else{
        computerScore++
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

function showResults(userOption){
    roundResultsMsg.innerText=getRoundResults(userOption)
    computer.innerText=computerScore
    player.innerText=playerscore

    if(playerscore === 3 || computerScore === 3){
winnerMsgElement.innerText=`${playerscore===3 ? "Player" : "Computer"} has won the game!`
resetGameBtn.style.display="block"
btnContainer.style.display="none"
    }
}
function resetGame(){
    playerscore=0
    computerScore=0
    player.innerText=playerscore
    computer.innerText=computerScore
    resetGameBtn.style.display="none"
    btnContainer.style.display="block"
    winnerMsgElement.innerText=""
    roundResultsMsg.innerText=""
}

resetGameBtn.addEventListener("click", resetGame)

const rockBtn=document.getElementById("rock-btn")
const paperBtn=document.getElementById("paper-btn")
const scissorsBtn=document.getElementById("scissors-btn")

rockBtn.addEventListener("click", 
    function (){
        showResults("stone")
    }
)
paperBtn.addEventListener("click", function () {
  showResults("paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("scissors");
});