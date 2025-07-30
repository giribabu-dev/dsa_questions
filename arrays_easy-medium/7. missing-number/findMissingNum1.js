/* 
    Missing Number
    Q: Find the missing number in a sequence from 0 to N.
*/

function findMissingNum(arr) {

    const n = arr.length
    const expectedSum = (n * (n + 1)) / 2

    const actualSum = arr.reduce((acc, num) => acc + num, 0)

    return expectedSum - actualSum
}

console.log(findMissingNum([3, 0, 1]))
console.log(findMissingNum([0, 1]))
console.log(findMissingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(findMissingNum([0]))
