/*
    Sum of first n numbers
    Que: Calculate the sum of the first n natural numbers using recursion.

    sum(n) = n + sum(n-1)
*/

function sum(n) {
    if (n === 0) return 0
    return n + sum(n - 1)
}

console.log(sum(5))
console.log(sum(11))
