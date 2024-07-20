function runGame(){
	var promptInput = prompt("Choose. Rock, Paper, or Scissors?");

	playerChoice = promptInput.toLowerCase().trim(); 

	var num = Math.floor(Math.random()*3);

	var chosenHand = chooseHand(num);
	
	checkWinner(chosenHand, playerChoice);
}

function chooseHand(h){
	if(h == 0){
		return "rock";;
	}else if(h == 1){
		return "paper";
	}else if(h == 2){
		return "scissors";
	}
}

function checkWinner(cmptC, pC){
	if(pC != "scissors" && pC != "rock" && pC != "paper"){
		alert("Your choice: " + pC + "\n Please only choose rock, paper, or scissors");
	}else if (cmptC == pC){
		alert("You chose: " + pC + " The computer chose: " + cmptC + " \n A tie, try again");
	}else if(cmptC != pC){
		if (pC == "rock" && cmptC == "scissors"){
			playerWin(cmptC, pC);
		}else if(pC == "paper" && cmptC == "rock"){
			playerWin(cmptC, pC);
		}else if(pC == "scissors" && cmptC == "paper"){
			playerWin(cmptC, pC);
		}else{
			alert("You chose: " + pC + " The computer chose: " + cmptC + " \n You've lost, try again");	
			var currCmptScore = document.getElementById("computerscore").textContent;
			document.getElementById("computerscore").innerHTML = Number(currCmptScore) + 1;
		}
	}
}

function playerWin(cmptC, pC){
	alert("You chose: " + pC + " The computer chose: " + cmptC + " \n You've won");
	var currCmptScore = document.getElementById("humanscore").textContent;
	document.getElementById("humanscore").innerHTML = Number(currCmptScore) + 1;
}


