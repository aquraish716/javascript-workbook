'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  //created two variable to. One is the array you are starting with and the other is the array you are ending in
  let currentArray = stacks[startStack];
  let toArray = stacks[endStack];

  //used push to push whatever was popped from the currentArray onto the toArray (destination array)
  toArray.push(currentArray.pop());
}

function isLegal(startStack, endStack) {
  //created currentArra and toArray variables for isLegal function
  let currentArray = stacks[startStack];
  let toArray = stacks[endStack];
  //created currentArrayStart variable which is the equal to the starting array's last index (length-1)
  let currentArrayStart = stacks[startStack][currentArray.length - 1];
  //created currentArrayEnd variable which is the equal to the destination array's last index (length-1)
  let currentArrayEnd = stacks[endStack][toArray.length - 1];

  /*created if statement that checks to see if the last index of starting array (which is the one being moved) 
  is less than the last index of the destination arrays or if the destination array is undefined (which 
  means nothing is in that array) then return true.*/
  if (currentArrayStart < currentArrayEnd || currentArrayEnd === undefined){
    return true;
  }else{
    return false;
  }
}

function checkForWin(startStack, endStack) {
/*created if statement that checks to see if array b or array c's length is equal to 4 then return true as the 
numbers have been successfully legally moved to array b or c.*/
if(stacks.b.length == 4 || stacks.c.length == 4){
  console.log("You've won!");
  return true;
}else {
  return false;
}
}

function towersOfHanoi(startStack, endStack) {
  /* created if statement that checks to see if the isLegal function is true, 
  then run the movePiece function then check for a winner.*/
  if(isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
    checkForWin;
  } 
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
