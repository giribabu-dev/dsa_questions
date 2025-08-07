/* 
    Second Largest
    Que: Find the second largest number in an array
*/

function secondLargestNum(arr){

    if (arr.length < 2){
        return "Array length should be greater than 2"
    }

    let large = -Infinity;
    let secondLarge = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > large){
            secondLarge = large;
            large = arr[i];
        }
        else if (arr[i] > secondLarge && arr[i] != large){
            secondLarge = arr[i];
        }
    }

    return secondLarge;
};

console.log(secondLargestNum([12, 39, 7, 3, 20, 25]));
