console.log('the script is included');

var app = {
  
  wordList: [
    'helicopter',
    'playstation'  
  ],
  currentWord: ''
};

function startGame() {
  
  app.currentWord = app.wordList[0];
  
  console.log('the word is: ', app.currentWord);
  
  //TO DO: output the word on screen

}