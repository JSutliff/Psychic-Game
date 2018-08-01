var  wins = 0;
var  losses = 0;
var  remainingGuesses = 5;
var  guessesSoFar = [];
var  userGuess = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.split('');

//select random number from alphabet
var randomLetter = function() {
  return alphabet[(Math.floor(Math.random() * 26 ))];
}

//initialize variables to start values
var resetStats = function() {
var  wins = 0;
var  losses = 0;
var  remainingGuesses = 5;
var  guessesSoFar = 0;
var  userGuess = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.split('');
}



//newGame
resetStats();
var computerChoice = randomLetter();

//while remainingGuesses > 0 
document.onkeyup = function(event) {
  if (remainingGuesses > 0) {
    if (alphabet.includes(event.key.toLowerCase())) {
      if (computerChoice === event.key.toLowerCase()) {
        wins++;
        document.getElementById('wins').textContent = wins;
        remainingGuesses = 5;
        guessesSoFar = [];
      } else {
        remainingGuesses --;
        document.getElementById('numGuesses').textContent = remainingGuesses;
        guessesSoFar.push(event.key.toLowerCase());
        document.getElementById('guessesSoFar').textContent = guessesSoFar;
      }
    } else {
      console.log('invlaid choice')
    }
  } else {
    console.log('You Lose!')
    losses++;
    document.getElementById('losses').textContent = losses;
    remainingGuesses = 5;
    guessesSoFar = [];
  }
}


//get users choice
// guessesSoFar ++;
//   userGuess.push(event.key);
//   remainingGuesses --;
//   console.log('you guesses ' + event.key);