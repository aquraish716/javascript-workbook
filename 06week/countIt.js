
//created a function that gets called when the submit button is pressed in the webpage
function getResults(){
//words equal the input that the user will input in the webpage
let wordsFromInput = document.getElementById("words").value;

//created a variable to equal to the string that gets inputted and removed special characters and had it lowercased 
let aString = wordsFromInput;
let finalString = aString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

let stringLength = finalString.length;

//created an object that will have keys and values based off of the input and the for loop
var aResults = {};

/*created for loop to sent the string letters into an object as a key and 
add 1 to a key value if there is 1 or more in ther and = to 1 if not */
for(let i = 0; i < stringLength; i++){
    let sentenceLetter = finalString[i];
    let countLetters = aResults[sentenceLetter]
    
    if(countLetters >= 1){
        aResults[sentenceLetter] = countLetters + 1;
    }else {
        aResults[sentenceLetter] = 1;
    }
}
//converted the object items into a string and removed special characters except for :
let finalResults = JSON.stringify(aResults);
let finalResults2 = finalResults.replace(/[^a-zA-Z0-9:]/g, ' ');
//created a variable to = to the resultarea id in the HTML page and had the string as the innertext that gets returned to screen
let printArea = document.getElementById("resultarea");
printArea.innerHTML = finalResults2;
console.log(finalResults2);
    
}


