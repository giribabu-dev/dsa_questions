/*
    Power of Two
    Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.
    
    Concepts:
    1) Power of Two: A number is a power of 2 if it can be divided by 2 repeatedly until it reaches 1.
    2) Base Case: n == 1 => true
    3) Invalid Case: n < 1 or n % 2 != 0 => false
    4) Recursive Case: isPowerOfTwo(n / 2)
*/

function isPowerOfTwo(n) {
    if (n === 1) return true;
    else if (n < 1 || n % 2 !== 0) return false;
    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(18))
