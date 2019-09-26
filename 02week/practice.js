let fruitA = {
    name: "Apple",
    possibleColors: ["red", "yellow", "green"],
    size: "medium",
    singleSeed: false
}


let fruitB = {
    name: "Peach",
    possibleColors: ["peach", "yellow", "orange"],
    size: "medium",
    singleSeed: true
}

let fruitC = {
    name: "Watermelon",
    possibleColors: ["red", "green"],
    size: "large",
    singleSeed: false
}

let myFruits = [];
myFruits.push(fruitA);
myFruits.push(fruitB);
myFruits.push(fruitC);

console.log("I have " + myFruits.length + " fruits defined");

//if (!fruitA.singleSeed){
//    console.log("The "+ fruitA.name+ " is a "+ fruitA.size +" sized fruit with many seeds.")
//}

//if (fruitB.singleSeed){
//    console.log("The "+ fruitB.name+ " is a "+ fruitB.size +" sized fruit with a single seed.")
//}

printDescription(fruitA);
printDescription(fruitB);
printDescription(fruitC);

function printDescription(myFruit){
    let seedSubString = "";
    if (myFruit.singleSeed){
        seedSubString = "with a single seed";
    }else{
        seedSubString = "with many seeds";
    }
console.log("The "+ myFruit.name+ " is a "+ myFruit.size +" sized fruit "+ seedSubString)

}