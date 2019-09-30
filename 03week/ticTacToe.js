'use strict';

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
function horizontalWin() {
  for (let i = 0; i < board.length; i++) {
    if(board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] == playerTurn) {
      window.alert("You are the winner!!!");
      document.location.reload(true);
    }
  } return false;
}

function verticalWin() {
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] == playerTurn && board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
      window.alert("You are the winner!!!");
      document.location.reload(true);
    }
  } return false;
}

function diagonalWin() {
  if (board[1][1] == playerTurn) {
    if (board[0][0] == playerTurn && board [2][2] == playerTurn) {
      window.alert("You are the winner!!!");
      document.location.reload(true);
    } else if (board[0][2] == playerTurn && board[2][0] == playerTurn) {
      window.alert("You are the winner!!!");
      document.location.reload(true);
    }
  } else 
  return false;
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
  return true;
}

function ticTacToe(row, column) {
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
  } else {
    console.log('Please try again, place has been taken.');
    window.alert('Please try again, place has been taken.');

    return playerTurn;
  }
  checkForWin();
  
  if (playerTurn == 'X') {
    playerTurn = 'O';
    let playerX = document.getElementById('box'+row+column);
    playerX.innerHTML = 'X';
    checkForWin();
  }
  else if (playerTurn == 'O') {
    playerTurn = 'X';
    let playerO = document.getElementById('box'+row+column);
    playerO.innerHTML = 'O';
    checkForWin();
  }
} 