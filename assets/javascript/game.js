var  wins = 0;
var  losses = 0;
var  remainingGuesses;
var  guessesSoFar;
var  userGuess;
var computerGuess;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet.split('');

//select random number from alphabet
var randomLetter = function() {
  return alphabet[(Math.floor(Math.random() * alphabet.length))];
}

//update DOM
var handleDomUpdate = function() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('numGuesses').textContent = remainingGuesses;
  document.getElementById('guessesSoFar').textContent = guessesSoFar.join(' ');
  document.getElementById('losses').textContent = losses;
}
//check remainingGuesses
var checkLoss = function() {
  if (remainingGuesses < 1) {
    document.getElementById('message').textContent = `You must not be psychic, the hidden letter was "${computerGuess}"`;
    document.getElementById('numGuesses').textContent = 0;
    setTimeout(function() {
      document.getElementById('message').textContent = ``;
      return true;
      }, 3000);
    }
    return false;
  }
//initialize variables to start values
var resetStats = function() {
  remainingGuesses = 5;
  guessesSoFar = [];
  userGuess = [];
  computerGuess = randomLetter();
  console.log(`This is our computerGuess ${computerGuess}`); 
  handleDomUpdate();
}

//compare userGuess to computer
var handleUserGuess = function(userGuess) {
  console.log(`this is our userGuess ${userGuess}`)
  console.log(`this is our remainingHuesses ${remainingGuesses}`)
if (userGuess === computerGuess ) {
  document.getElementById('message').textContent = `You must be psychic! The hidden letter was "${computerGuess}"`;
  wins++;
  return resetStats();
}
if (!guessesSoFar.includes(userGuess)) {
  remainingGuesses--;
  if (checkLoss()) {
    losses++;
    return resetStats();
  }
  guessesSoFar.push(userGuess);
  return handleDomUpdate();
}
return handleDomUpdate();
}

//newGame
resetStats();

document.onkeyup = function(event) {
  var userKey = event.key.toLowerCase();
  handleUserGuess(userKey);
}

document.getElementById('newGame').addEventListener("click", function() {
  wins = 0;
  losses = 0;
  resetStats();
});
