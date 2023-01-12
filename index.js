let arr = [5, 12, 5, 10, 4, 26, 7, 9, 71];
/*sort numbers from lower to higher,
log the numbers,
log only even numbers,
multiply odd numbers by ten,
find biggest number,
turn multiplied odd numbers into array,
*/
arr.sort(function(a, b) { return a - b});
console.log(arr);

let numbers = "";
for(let i = 0; i < arr.length; i ++) {
    numbers += arr[i] + " ";
} console.log(numbers);
let evenNumbers = "";
for(let j = 0; j < arr.length; j++) {
    if(arr[j] % 2 === 0) {
        evenNumbers += arr[j] + " ";
    } 
}
console.log(evenNumbers);

let bigNumbers = "";
for(let k = 0; k < arr.length; k++) {
    if(arr[k] % 2 !== 0) {
        bigNumbers += arr[k] * 10 + " ";
    }
}
console.log(bigNumbers);

console.log(typeof(bigNumbers));

let bigNumbersArray = bigNumbers.split(" ").map(Number);
console.log(bigNumbersArray);
console.log(typeof(bigNumbersArray));

let maxNumber = Math.max.apply(null, arr);
console.log(maxNumber);
console.log(typeof(numbers));

let numbersArray = numbers.split(" ").map(Number);
console.log(numbersArray);