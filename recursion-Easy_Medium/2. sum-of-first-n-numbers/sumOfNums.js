/*
    Sum of first n numbers
    Que: Calculate the sum of the first n natural numbers using recursion.
*/

function sumOfNums(num) {
    if (num === 0) return 0

    return num + sumOfNums(num - 1)
}

console.log(sumOfNums(5))
console.log(sumOfNums(11))
