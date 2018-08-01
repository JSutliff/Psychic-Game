var  wins;
var  losses;
var  remainingGuesses;
var  guessesSoFar;
var  userGuess;
var computerChoice;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.split('');

//select random number from alphabet
var randomLetter = function() {
  return alphabet[(Math.floor(Math.random() * 26 ))];
}

//initialize variables to start values
var resetStats = function() {
  wins = 0;
  losses = 0;
  remainingGuesses = 5;
  guessesSoFar = [];
  userGuess = [];
  computerChoice = randomLetter();
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('numGuesses').textContent = remainingGuesses;
  document.getElementById('guessesSoFar').textContent = guessesSoFar;

}



//newGame
resetStats();



//while remainingGuesses > 0 
document.onkeyup = function(event) {
  var userKey = event.key.toLowerCase();
  if (remainingGuesses > 0) {
    if (alphabet.includes(userKey)) {
      if (computerChoice === userKey) {
        wins++;
        alert('You WON!');
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
      console.log('invlaid choice, try a letter')
    }
  } else {
    document.getElementById('guessesSoFar').textContent = guessesSoFar; //<del>
    losses++;
    alert('You LOST!');
    document.getElementById('losses').textContent = losses;
    remainingGuesses = 5;
    guessesSoFar = [];
  }
}

document.getElementById('newGame').addEventListener("click", function() {
  resetStats();
  
});


//get users choice
// guessesSoFar ++;
//   userGuess.push(event.key);
//   remainingGuesses --;
//   console.log('you guesses ' + event.key);