/* Find the Second Largest Number in an Array */

let arr = [12, 39, 7, 3, 20, 25];

function secondLargestNum(arr){

    if (arr.length < 2){
        return "Array length should be greater than 2"
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};

let result = secondLargestNum(arr);
console.log(result);