/* 
    Missing Number
    Q: Find the missing number in a sequence from 1 to N.
*/

function findMissingNum(arr) {
    
    const totalElements = arr.length + 1;
    const expectedSum = (totalElements * (totalElements + 1)) / 2;

    let actualSum = 0;
    arr.forEach(ele => actualSum += ele);

    return expectedSum - actualSum;
};

console.log(findMissingNum([1, 2, 4, 5, 6]));
console.log(findMissingNum([7, 2, 1, 4, 6, 3]));
console.log(findMissingNum([1, 2, 3, 4, 5, 7, 8, 9, 10]));
console.log(findMissingNum([1, 2, 3, 4, 5, 6, 7, 9, 10, 11]));
