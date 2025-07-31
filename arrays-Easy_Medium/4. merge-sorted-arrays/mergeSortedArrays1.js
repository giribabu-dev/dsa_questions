/*
    Merge Sorted Arrays
    Question: Merge two sorted arrays into one sorted array
*/

function mergeSortedArrays(arr1, arr2) {
    let output = [];

    for (let i = 0; i < arr1.length; i++) {
        output.push(arr1[i]);
    };

    for (let j = 0; j < arr2.length; j++) {
        output.push(arr2[j]);
    };

    for(let k = 0; k < output.length; k++){
        for(let l = k + 1; l < output.length; l++){
            if(output[k] > output[l]){
                let temp = output[k];
                output[k] = output[l];
                output[l] = temp;
            }
        }
    };

    return output;
};

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([1, 2, 8], [3, 4, 10]));
