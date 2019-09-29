'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
    hand1 = hand1.toLowerCase();
    hand2 = hand2.toLowerCase();
    hand1 = hand1.replace(/ /g, '');
    hand2 = hand2.replace(/ /g, '');
    
    if (hand1 === hand2){
        return "It's a tie!"
    }else if (hand1 === 'rock'){
        if (hand2 === 'scissors')
        {return "Hand one wins!"}
        else (hand2 === 'paper') 
        {return "Hand two wins!"}
    }
    else if (hand1 === 'paper'){
        if (hand2 === 'rock')
        {return "Hand one wins!"}
        else (hand2 === 'scissors') 
        {return "Hand two wins!"}
    }
    else if (hand1 === 'scissors'){
        if (hand2 === 'paper')
        {return "Hand one wins!"}
        else (hand2 === 'rock') 
        {return "Hand two wins!"}
    }

// Write code here
}

function getPrompt() {
    rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
        console.log( rockPaperScissors(answer1, answer2) );
        getPrompt();
    });
});
}

if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
        it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        });
        it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
        });
        it('should detect Hand one invalid input', () => {
        assert.equal(rockPaperScissors('ro34', 'scissors'), "Invalid Input for Hand 1. Please try again.");
        assert.equal(rockPaperScissors('sciss43s', 'paper'), "Invalid Input for Hand 1. Please try again.");
        assert.equal(rockPaperScissors('pa43kper', 'rock'), "Invalid Input for Hand 1. Please try again.");
        });
        it('should detect Hand two invalid input', () => {
        assert.equal(rockPaperScissors('rock', 'sf3ddd'), "Invalid Input for Hand 2. Please try again.");
        assert.equal(rockPaperScissors('scissors', 'pa33ddfrper'), "Invalid Input for Hand 2. Please try again.");
        assert.equal(rockPaperScissors('paper', 'roce33ek'), "Invalid Input for Hand 2. Please try again.");
        });
        
        it('should detect Hand one wins', () => {
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        });
        it('should detect Hand two wins', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        });
    });
    } else {

    getPrompt();

    }
