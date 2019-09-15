'use strict';

//JavaScript program to display the current day and time
new Date().toString();
console.log(new Date().toString());

//JavaScript program to convert a number to a string
const a = 10;
console.log(a.toString());

//JavaScript program to convert a string to the number
const b = "20";
console.log(Number(b));

//JavaScript program that takes in different datatypes and prints out whether they are
let c = true;
let d = null;
let e;
let f = 24;
console.log(typeof 45 % "forty two");
let h = "A string";

console.log(typeof c, d, typeof e, typeof f, typeof h);

//JavaScript program that adds 2 numbers together.
let x = 10 + 18;
console.log(x);

//JavaScript program that runs only when 2 things are true
let num1 = 21;
let num2 = 10;
if (num1 > 20 && num2 <15){
    console.log("This is true");
}

//JavaScript program that runs when 1 of 2 things are true
let num3 = 21;
let num4 = 16;
if (num3 > 20 || num4 < 15){
    console.log("At least one is true");
}

//JavaScript program that runs when both things are not true
let num5 = 21;
let num6 = 16;
if (num3 !== 20 && num4 !== 15){
    console.log("None are true");
}
