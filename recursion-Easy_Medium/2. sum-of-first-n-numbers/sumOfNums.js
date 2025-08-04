/*
    Function to calculate sum of first n natural numbers using recursion
    Que: Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

    Concepts::
    1) Recursion: A technique where a function calls itself with a reduced subproblem.
    2) Base Case: Stops recursion to prevent infinite calls. Here, if n === 0, return 0.
    3) Recursive Case: Return n + sum(n - 1)
*/

function sum(n) {
    if (n === 0) return 0;
    return n + sum(n - 1);
}

console.log(sum(5)); // 15
console.log(sum(11)); // 66
