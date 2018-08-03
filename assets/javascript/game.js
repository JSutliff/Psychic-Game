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
console.log(computerGuess);

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
  } else if (!keyLog.includes(userKey) && remainingGuesses > 0) {
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

//generate computerGuess

  //take userGuess
    //remainingGuess --
    //keyLog.push(userGuess)

  //if userGuess === computer guess
    //wins++
    //resetGuesses

    // else 

    





























//check remainingGuesses
// var checkLoss = function() {
//   if (remainingGuesses < 1) {
//     document.getElementById('message').textContent = `You must not be psychic, the hidden letter was "${computerGuess}"`;
//     document.getElementById('numGuesses').textContent = 0;
//     losses++;
//     setTimeout(function() {
//       document.getElementById('message').textContent = ``;
//       document.getElementById('guessesSoFar').textContent = '';
//       return true;
//       }, 3000);
//     }
//     return false;
//   }
// //initialize variables to start values
// var resetStats = function() {
//   remainingGuesses = 5;
//   guessesSoFar = [];
//   userGuess = [];
//   computerGuess = randomLetter();
//   console.log(`This is our computerGuess ${computerGuess}`); 
//   handleDomUpdate();
// }

// //compare userGuess to computer
// var handleUserGuess = function(userGuess) {
//   console.log(`this is our userGuess ${userGuess}`)
//   console.log(`this is our remainingHuesses ${remainingGuesses}`)
// if (userGuess === computerGuess ) {
//   document.getElementById('message').textContent = `You must be psychic! The hidden letter was "${computerGuess}"`;
//   wins++;
//   return resetStats();
// }
// if (!guessesSoFar.includes(userGuess)) {
//   remainingGuesses--;
//   if (checkLoss()) {
//     losses++;
//     return resetStats();
//   }
//   guessesSoFar.push(userGuess);
//   return handleDomUpdate();
// }
// return handleDomUpdate();
// }

// //newGame
// resetStats();

// document.onkeyup = function(event) {
//   var userKey = event.key.toLowerCase();
//   handleUserGuess(userKey);
// }

// document.getElementById('newGame').addEventListener("click", function() {
//   wins = 0;
//   losses = 0;
//   resetStats();
// });

// document.getElementById('newGame').addEventListener("click", function() {
//   wins = 0;
//   losses = 0;
//   resetGuessVars();
//   handleDomUpdate();
//   }
  
//check remainingGuesses
// var checkLoss = function() {
//   if (remainingGuesses < 1) {
//     document.getElementById('message').textContent = `You must not be psychic, the hidden letter was "${computerGuess}"`;
//     document.getElementById('numGuesses').textContent = 0;
//     losses++;
//     setTimeout(function() {
//       document.getElementById('message').textContent = ``;
//       document.getElementById('guessesSoFar').textContent = '';
//       return true;
//       }, 3000);
//     }
//     return false;
//   }
// //initialize variables to start values
// var resetStats = function() {
//   remainingGuesses = 5;
//   guessesSoFar = [];
//   userGuess = [];
//   computerGuess = randomLetter();
//   console.log(`This is our computerGuess ${computerGuess}`); 
//   handleDomUpdate();
// }

// //compare userGuess to computer
// var handleUserGuess = function(userGuess) {
//   console.log(`this is our userGuess ${userGuess}`)
//   console.log(`this is our remainingHuesses ${remainingGuesses}`)
// if (userGuess === computerGuess ) {
//   document.getElementById('message').textContent = `You must be psychic! The hidden letter was "${computerGuess}"`;
//   wins++;
//   return resetStats();
// }
// if (!guessesSoFar.includes(userGuess)) {
//   remainingGuesses--;
//   if (checkLoss()) {
//     losses++;
//     return resetStats();
//   }
//   guessesSoFar.push(userGuess);
//   return handleDomUpdate();
// }
// return handleDomUpdate();
// }

// //newGame
// resetStats();

// document.onkeyup = function(event) {
//   var userKey = event.key.toLowerCase();
//   handleUserGuess(userKey);
// }

// document.getElementById('newGame').addEventListener("click", function() {
//   wins = 0;
//   losses = 0;
//   resetStats();
// });