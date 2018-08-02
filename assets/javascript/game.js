var  wins = 0;
var  losses = 0;
var  remainingGuesses;
var  guessesSoFar;
var  userGuess;
var computerGuess;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet.split('');

//select random number from alphabet
function randomLetter() {
  return alphabet[(Math.floor(Math.random() * alphabet.length))];
}

//initialize variables to start values
function resetStats() {
  // wins = 0;
  // losses = 0;
  remainingGuesses = 5;
  guessesSoFar = [];
  userGuess = [];
  computerGuess = randomLetter();
  console.log(`This is our computerGuess ${computerGuess}`); 
  handleDomUpdate();
  // document.getElementById('wins').textContent = wins;
  // document.getElementById('losses').textContent = losses;
  // document.getElementById('numGuesses').textContent = remainingGuesses;
  // document.getElementById('guessesSoFar').textContent = guessesSoFar;

}






//newGame
resetStats();

function checkLoss () {
if (remainingGuesses < 1) {

  document.getElementById('message').textContent = `The hidden letter was ${computerGuess}`;
  document.getElementById('numGuesses').textContent = 0;
  setTimeout(function() {
    document.getElementById('message').textContent = ``;
    return true;
    }, 3000);
    
  }
  return false;
}

  function handleUserGuess(userGuess) {
    console.log(`this is our userGuess ${userGuess}`)
    console.log(`this is our remainingHuesses ${remainingGuesses}`)
  if (computerGuess === userGuess) {
    console.log('congrats, you win!');
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

  function handleDomUpdate() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('numGuesses').textContent = remainingGuesses;
  document.getElementById('guessesSoFar').textContent = guessesSoFar.join(' ');
  document.getElementById('losses').textContent = losses;
}

//while remainingGuesses > 0 
document.onkeyup = function(event) {
  var userKey = event.key.toLowerCase();




  handleUserGuess(userKey);




  // if (remainingGuesses > 0  ) {
  //   if (alphabet.includes(userKey)) {
  //     if (computerChoice === userKey) {
  //       wins++;
  //       alert('You WON!');
  //       document.getElementById('wins').textContent = wins;
  //       remainingGuesses = 5;
  //       computerChoice = randomLetter();
  //       guessesSoFar = [];
  //     } else {
  //       remainingGuesses --;
  //       document.getElementById('numGuesses').textContent = remainingGuesses;
  //       guessesSoFar.push(event.key.toLowerCase());
  //       document.getElementById('guessesSoFar').textContent = guessesSoFar;
  //     }
  //   } else {
  //     alert('invlaid choice, try a letter')
  //   }
  // } else {
  //   remainingGuesses--;
  //   document.getElementById('guessesSoFar').textContent = guessesSoFar;
  //   losses++;
    
  //   document.getElementById('losses').textContent = losses;
  //   remainingGuesses = 5;
  //   guessesSoFar = [];
  //   alert('You LOST!');
  // }
}

document.getElementById('newGame').addEventListener("click", function() {
  wins = 0;
  losses = 0;
  resetStats();
  
});
//get users choice
// guessesSoFar ++;
//   userGuess.push(event.key);
//   remainingGuesses --;
//   console.log('you guesses ' + event.key);