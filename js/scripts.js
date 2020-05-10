console.log('the script is included');

var app = {
  wordList: [
    'helicopter',
    'playstation',  
    'watermelon',
    'textbook'
  ],
  currentWord: ''
};

function randomNumber() {
  let number = Math.floor(Math.random() * app.wordList.length);

  return number;
}

function startGame() {

  let index = randomNumber();

  console.log(index);
  
  app.currentWord = app.wordList[index];
  
  console.log('the word is: ', app.currentWord);
  
  //TO DO: output the word on screen

}

/* Letter logic: Loop that checks all letters in 'currentWord.length' 
if they match 'inputLetter', else then 'livesLeft' = 'livesLeft - 1'
loop breaks if any letter matches 'input letter', and respective blank(s) filled
*/

// Endgame logic:
function winLose(currentLives, wordStatus) {
  // Lose logic
  if (currentLives === 0) {
    console.log('Game over!');
    // Ends the game
  } else {
    // Continues the game
  };
  // Win logic
  if (wordStatus === true /* true is a placeholder for the correct status of the word */) {
    console.log('You win!');
    // Ends the game
  } else {
    // Continues the game
  }
}