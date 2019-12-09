var str=['Paper', 'Rock', 'Scissors'];
var computerScore=0;
var playerScore =0;
function computer(){
    var num=Math.floor(Math.round()*3);
    var computer=str[num];
    return computer;
}
function playRound(player, comp) {
    if (player == 'rock' && comp == 'Scissors') {
        playerScore++;
        console.log("You Win! Rock beats Scissors. Score:"+playerScore+":"+computerScore);
        
    } else if (player == 'rock' && comp == 'Paper') {
        computerScore++;
        console.log("You Lose! Paper covers rock. Score:"+playerScore+":"+computerScore);
        

    } else if (player == 'paper' && comp == 'Scissors') {
        computerScore++;
        console.log("You Lose! Scissors cut paper. Score:"+playerScore+":"+computerScore);
       

    } else if (player == 'paper' && comp == 'Rock') {
        playerScore++;
        console.log("You Win! Paper covers rock. Score:"+playerScore+":"+computerScore);
       
    } else if (player == 'scissors' && comp == "Rock") {
        computerScore++;
        console.log("You Lose! Rocks beats Scissors. Score:"+playerScore+":"+computerScore);

    } else if (player == 'scissors' && comp == 'Paper') {
        playerScore++;
        console.log("You Win! Scissors beat paper. Score:"+playerScore+":"+computerScore);
    }
   else  console.log("That was a draw. Try Again! Score:"+playerScore+":"+computerScore);
}
function game() {
    for (var i = 0; i < 5; i++) {
        var player = prompt('Type: Rock, Paper, or Scissors')
       
        var comp = computer();
        console.log(comp);
        playRound(player, comp);
    }
    if (playerScore > computerScore) {
        console.log("You're the winner! Final Score:"+playerScore+":"+computerScore);
    } else if (computerScore > playerScore) {
        console.log("You're the loser. Final Score:"+playerScore+":"+computerScore);
    } else
    console.log("You tied. Final Score: "+playerScore+":"+computerScore);
}
game();