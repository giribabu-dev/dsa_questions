/* Q3. Find Largest Number in an Array */

/* 
    1. Initialize the variable with the first element of the array as the largest
    2. Loop through the array
    3. Compare the each element with the current element
    4. If an element is larger, update the large
*/


const arr = [10, 44, 7, 1, 20, 25];

let large = arr[0];

function findLargestNumber(arr){
    for(let i = 0; i < arr.length; i++){
        if(large < arr[i]){
            large = arr[i];
        }
    }

    return large;
};

let largestNum = findLargestNumber(arr);

console.log(largestNum);