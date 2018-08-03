var  wins = 0;
var  losses = 0;
var  remainingGuesses = 5;
var  keyLog = [];
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
  document.getElementById('losses').textContent = losses;
  document.getElementById('guessesRemaining').textContent = remainingGuesses;
  document.getElementById('keyLog').textContent = keyLog.join(' ');
  // document.getElementById('message').textContent = '';
}

handleDomUpdate();

var resetGuessVars = function() {
  remainingGuesses = 5;
  keyLog = [];
  computerGuess = randomLetter();
  document.getElementById('guessesRemaining').textContent = remainingGuesses;
}

resetGuessVars();

var handleWin = function() {
  document.getElementById('message').textContent = `You must be a psychic! The secret letter was "${computerGuess}"`;
  setTimeout(function() {
    document.getElementById('message').textContent = ``;
    }, 3000);
}

var handleLoss = function() {
  document.getElementById('message').textContent = `Your psychic powers aren't very strong! The secret letter was "${computerGuess}"`;
  setTimeout(function() {
    document.getElementById('message').textContent = ``;
    }, 3000);
}

var handleInvalidKey = function() {
  document.getElementById('message').textContent = `Try pressing a letter!`;
  setTimeout(function() {
    document.getElementById('message').textContent = ``;
    }, 3000);
}

var checkKey = function (userKey) {
 if (alphabet.includes(userKey) && (!keyLog.includes(userKey))) {
  if (userKey === computerGuess) {
    wins++;
    handleWin();
    resetGuessVars();
    handleDomUpdate();
  } else if (!keyLog.includes(userKey) && remainingGuesses !== 1) {
     keyLog.push(userKey);
     remainingGuesses--;
     handleDomUpdate();
  } else {
    losses++;
    handleLoss();
    resetGuessVars();
    handleDomUpdate();
  }
 } else {
   handleInvalidKey();
 }
}
 
document.onkeyup = function(event) {
  var userKey = event.key.toLowerCase();
  checkKey(userKey);
};

document.getElementById('newGame').addEventListener("click", function() {
  wins = 0;
  losses = 0;
  resetGuessVars();
  handleDomUpdate();
});