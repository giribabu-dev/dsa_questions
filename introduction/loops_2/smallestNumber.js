/* Q2. Find Smallest Number in an Array */

/*
    1. Initialize a variable with the first element of the array as the minimum
    2. Loop through the array
    3. Compare each element with the currect element
    4. If an element is smaller, update the minimum
*/


const arr = [10, 43, 7, 2, 20, 25];

function findSmallestNumber(arr){

    let smallest = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    };

    return smallest;
};

let result = findSmallestNumber(arr);
console.log(result);