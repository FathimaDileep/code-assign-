//prime or not
function isFirstElementPrime(array) {
    if (array.length === 0) {
        console.log("Array is empty.");
        return false;
    }
    
    const firstElement = array[0];
    
    if (firstElement <= 1) {
        console.log("First element is not prime.");
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(firstElement); i++) {
        if (firstElement % i === 0) {
            console.log("First element is not prime.");
            return false;
        }
    }
    
    console.log("First element is prime.");
    return true;
}

// Example 
const array1 = [2, 3, 5, 7, 11]; 
const array2 = [4, 6, 8, 9, 10]; 

isFirstElementPrime(array1)
isFirstElementPrime(array2)



//sum of squares
function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

// Example 
const array = [1, 2, 3, 4, 5];
const result = sumOfSquares(array);
console.log("Sum of squares:", result);




//frequent item in an array
function mostFrequentItem(arr){
    if(arr.length===0){
        return null; 
    
    }
let countMap = {};
let maxCount = 0;
let mostFrequent;

for(let item of arr){
    countMap[item]=(countMap[item] || 0) + 1;
    if(countMap[item] > maxCount){
        maxCount = countMap[item];
        mostFrequent = item;
    }
}
  return mostFrequent;
}

//Example
const arr = [1,2,3,4,5,4,5,3,3,3,5,3];
const resul = mostFrequentItem(arr);
console.log("Most frequent item:" , resul);


//odd or even
for(let i = 0; i <= 15; i++){
    if(i % 2 === 0){
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
