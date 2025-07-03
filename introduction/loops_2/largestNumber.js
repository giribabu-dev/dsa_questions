/* Q3. Find Largest Number in an Array */

/* 
    1. Initialize the variable with the first element of the array as the largest
    2. Loop through the array
    3. Compare the each element with the current element
    4. If an element is larger, update the large
*/


const arr = [10, 44, 7, 1, 20, 25];

function findLargestNumber(arr){
    let largest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;
};

let result = findLargestNumber(arr);
console.log(result);