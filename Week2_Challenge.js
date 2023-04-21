//Week 2 Challenge:
//Create a function that takes an array of numbers and returns both the minimum and maximum numbers, in that order.

function minMax(arr) {
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
    min = arr[i];
    } else if (arr[i] > max) {
    max = arr[i];
    }
}
   return [min, max];
}