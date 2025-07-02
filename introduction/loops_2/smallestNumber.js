/* Q2. Find Smallest Number in an Array */

/*
    1. Initialize a variable with the first element of the array as the minimum
    2. Loop through the array
    3. Compare each element with the currect element
    4. If an element is smaller, update the minimum
*/


const arr = [10, 43, 7, 2, 20, 25];

let small = arr[0];

function findSmallestNumber(arr){
    for(let i = 0; i < arr.length; i++){
        if(small > arr[i]){
            small = arr[i]
        }
    }

    return small;
};

let smallestNum = findSmallestNumber(arr);

console.log(smallestNum)