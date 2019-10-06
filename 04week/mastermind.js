'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {

  //created variable solutionArray that is the split of string solution  
  let solutionArray = solution.split("");
  //created variable guessArray that is the split of string guess
  let guessArray = guess.split("");
  //created variable for the hint of correct letter location
  let correctLetterLocations = 0;
  //created variable for the hint of amount of correct letters
  let correctLetters = 0;

  /*created for loop to go through each i of solutionArray and guessArray and add 1 if i matchs on 
  both to get the amount of correct letter locations*/
  for(let i = 0; i < 4; i++){
    if(solutionArray[i] === guessArray[i]){
      correctLetterLocations += 1;
      solutionArray[i] = null;
    }
  }
  /*created for loop to go through each i of solutionArray and guessArray and add 1 if i matchs on 
  both to get the amount of correct letters*/
  for(let i = 0; i < 4; i++){
    let targetIndex = solutionArray.indexOf(guessArray[i])
    if(targetIndex > -1){
      correctLetters += 1;
      solutionArray[targetIndex] = null;
    }
  }
//ends funtion by returning the amount of correctletterlocations and correct letters
return correctLetterLocations+"-"+correctLetters;
}

function mastermind(guess) {
  //defined a global variable
  const solution = 'abcd';

  //if statement to return "You guessed it!" if the guess equals the solution
  if(guess === solution){
    console.log("You guessed it!");
    return "You guessed it!";
  } 
  //Provides hint if guess does not equal solution
  else if (guess != solution){
    let hint = generateHint(guess);
    board.push(guess+"-"+hint);
  }
  //created if statement that lets you know to guess again or let you know that you have used up 10 guesses
  if(board.length == 10){
    console.log('You ran out of turns! The solution was ' + solution);
  }else{
    console.log('Guess again.');
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}
// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
