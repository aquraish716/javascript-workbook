'use strict';

console.log("I am here!")
function pigLatin(word) {

word = word.trim().toLowerCase();

let vowelLetters = /[a,e,i,o,u]/;

if (word[0].match(vowelLetters)){
    return word + 'yay';
}else {
    let indexWord = word.indexOf(word.match(vowelLetters));
    let firstHalf = word.substring(0, indexWord);
    let secondHalf = word.substring(indexWord);
    return secondHalf + firstHalf + 'ay';
}

}
function handleTranslate(){
    console.log("I am inside handleTranslate()");
    //1. Get the input value from the inputbox
    var inputBox = document.getElementById("plainText");
    console.log(inputBox);
    var englishWord = inputBox.value;
    console.log("English word is", englishWord);

    //2. call the pigLatin function with this value
    var pigLatinWord = pigLatin(englishWord);
    console.log("Pig Latin word is ", pigLatinWord);

    //3. write the result that the pigLatin function returns to the screen
    var spanElement = document.getElementById("pigLatinWord");
    console.log("Span element word is ", spanElement);
    spanElement.innerText = pigLatinWord;
}