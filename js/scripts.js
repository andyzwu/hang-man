console.log('the script is included');

var app = {
  wordList: [
    'helicopter',
    'playstation',
    'watermelon',
    'textbook',
    'handicapped'
  ],
  currentWord: '',
  lives: 5,
  answer:[]
};

function randomNumber() {
  let number = Math.floor(Math.random() * (app.wordList.length - 1));

  return number;
}

function startGame() {

  app.currentWord = [];

  app.answer = [];

  let index = randomNumber();

  console.log(index);

  app.currentWord = app.wordList[index];

  console.log('the word is: ', app.currentWord);
  
  for (let i = 0; i < 27; i++) {
    // resets all buttons
  };

  for (let i = 0; i < app.currentWord.length; i++) {
    app.answer.push('_');
  }; 

  outputAnswer();

  app.lives = 5;

  outputLives();
  
  losingMessage = ``;

  document.getElementById("losingScreen").innerText = losingMessage;

  winningMessage = ``;

  document.getElementById("winningScreen").innerText = winningMessage;
}

function letterLogic(letter) {
  if (app.currentWord) {

    disableButton(letter);

    let letterChecker = false; 

    for (let i = 0; i < app.currentWord.length; i++) {
      let currentLetter = app.currentWord[i].toLowerCase();
      console.log(currentLetter);
      if (letter.toLowerCase() === currentLetter) {
        app.answer[i] = letter.toLowerCase();
        letterChecker = true;
      } 
    }

    if (letterChecker === false) {
      app.lives = app.lives - 1;
    }

    outputAnswer();
    outputLives();
    winLose();

  } else {
    // Says to pick a random word
  }
};

function outputAnswer() {
  let html = '';
  for (i = 0; i < app.answer.length; i++) {
    if (app.answer[i] === 'a') {
      html = html + `<div class="answerblockvowel">${app.answer[i]}</div>`;
    } else if (app.answer[i] === 'e') {
      html = html + `<div class="answerblockvowel">${app.answer[i]}</div>`;
    } else if (app.answer[i] === 'i') {
      html = html + `<div class="answerblockvowel">${app.answer[i]}</div>`;
    } else if (app.answer[i] === 'o') {
      html = html + `<div class="answerblockvowel">${app.answer[i]}</div>`;
    } else if (app.answer[i] === 'u') {
      html = html + `<div class="answerblockvowel">${app.answer[i]}</div>`;
    } else if (app.answer[i] === '_') {
      html = html + `<div class="answerblockunderscore">_</div>`;
    } else {
      html = html + `<div class="answerblockletter">${app.answer[i]}</div>`;
    }
    } 
   document.getElementById("answerOutput").innerHTML = html;
  };

function outputLives() {
  document.getElementById("livesOutput").innerText = app.lives;
}

function disableButton(letter) {
  let letterButton = document.getElementById(`${letter}Button`);
  letterButton.disabled = true;
};

const loseScreen = () => {
  losingMessage = `You ran out of lives. The correct word was "${app.currentWord}". Restart?`
  document.getElementById("losingScreen").innerText = losingMessage;  
};

// Endgame logic:
function winLose(wordStatus) {
  // Lose logic
  if (app.lives === 0) {
    loseScreen();
  }
  // Win logic
  let underscoreChecker = false;

  for (i = 0; i < app.currentWord.length; i++) {
    if (app.answer[i] === '_') {
      underscoreChecker = true;
    }
  }

  if (underscoreChecker === false) {
    if (app.lives === 5) {
      winningMessage = `You won the game without losing a single life! Restart?`
    } else if (app.lives === 1) {
      winningMessage = `You won the game with ${app.lives} life left! Restart?`
    } else {
      winningMessage = `You won the game with ${app.lives} lives left! Restart?`
    }
    document.getElementById("winningScreen").innerText = winningMessage;
  }
};

// TO DO:
/*
- disable all buttons when game reaches conclusion
- undisable buttons at end of each game 
*/