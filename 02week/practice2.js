var numbers = [4,5,3,1,6,4,44,188];

var currentMax = null;

for(var index = 0; index < numbers.length; index++){
    var numberToLookAt = numbers[index];
    if(currentMax == null){
        currentMax = numberToLookAt;
    }else if(currentMax < numberToLookAt){
        currentMax = numberToLookAt;
    }
}

console.log("The max is ", currentMax);