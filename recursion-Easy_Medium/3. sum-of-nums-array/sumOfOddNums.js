/*
    Sum of odd numbers in array using Recursion
    Que: Write a function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

    Concepts::
    1) Recursion: Repeatedly check whether arr[n] is odd and add it only if true.
    2) Base Case: if n==0, return arr[0] if it is odd, otherwise 0.
    3) Recursive Case: Return (arr[n] if odd) + sum(n - 1)
*/

let arr = [5, 2, 0, 3, 6, 7];

function sum(n) {
    let isOdd = arr[n] % 2 !== 0;
    if (n === 0) return isOdd ? arr[0] : 0;
    return (isOdd ? arr[n] : 0) + sum(n - 1);
}

console.log(sum(arr.length - 1)) // 15
