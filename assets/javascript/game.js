//Computer Guesses
var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//Variables for to keep track of wins, losses, and guesses
var wins = 0
var losses = 0
var guessesLeft = 9
var guesses = []

//Function that recognizes the user's key input
document.onkeyup = function(event) {
//Changes all entries to upper case
var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
//Randomizes computer's guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



//If the correct button is pushed then the win alert pops up
if (userGuess === computerGuess) {
	wins++;
	alert("You Win");
	guessesLeft = 9
	guesses = [];
}

//If guesses left = 0 then the lose alert pops up and the game resets
else if (guessesLeft === 0){
	alert("You Lose");
	guessesLeft = 9
	guesses = [];
}

//If the user guess is incorrect then the guessesLeft counter is reduced by 1
else if (userGuess !== computerGuess) {
	guessesLeft--
	guesses.push(userGuess)
};




var html =
"<header>The Psychic Game</header>" + "<br><br>" +
"<p>Wins: " + wins + "</p>" + "<br><br>" +
"<p>Losses: " + losses + "</p>" + "<br><br>" +
"<p>Guesses Left: " + guessesLeft + "</p>" + "<br><br>" +
"<p>Your Guesses so Far: " + guesses + "</p>";

document.querySelector("#game").innerHTML = html;
}

