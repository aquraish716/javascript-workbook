

//Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 1;
do {console.log(i); i++}
while (i < 1001);

/*Create an object (an array with keys and values) 
called person with the following data:firstName: "Jane",lastName: "Doe",birthDate: "Jan 5, 1925",gender: "female"*/

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1926",
    gender: "female"
};
let birthYear = person.birthDate.substring(7, 11);
/*Use a for...in loop and if statement to console.log the value associated with the key birthDate if 
the birth year is an odd number.*/
var x;
for(x in birthYear){
    if (birthYear % 2 !=0){
        console.log(birthYear);
    }else {
        console.log("Its an even year!");
    }
};




//Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. 

let arrayOfPersons = [
    {firstName: "Mike",
    lastName: "Smith",
    birthDate: "Jan 3, 1975",
    gender: "male"},
    
    {firstName: "Eddie",
    lastName: "Doe",
    birthDate: "Feb 5, 1983",
    gender: "male"},
    
    {firstName: "Jessica",
    lastName: "Smith",
    birthDate: "March 8, 1993",
    gender: "female"},
    
    {firstName: "Mike",
    lastName: "Johnson",
    birthDate: "Dec 23, 1985",
    gender: "male"}
];

//Use .map() to map over the arrayOfPersons and console.log() their information.
let newArrayofPersons = arrayOfPersons.map(arrayOfPersons => (arrayOfPersons));

console.log(newArrayofPersons);

//Use .filter() to filter the persons array and console.log only males in the array.

let arrayOfMales = arrayOfPersons.filter(arrayOfPersons => arrayOfPersons.gender === 'male');

console.log(arrayOfMales);

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let arrayOfpre1990babies = arrayOfPersons.filter(function(personinfo){
    let yearBorn = personinfo.birthDate.substring(7, 11);
    if(yearBorn < 1990){
        console.log([personinfo.firstName, personinfo.lastName, personinfo.birthDate]);
    }
});