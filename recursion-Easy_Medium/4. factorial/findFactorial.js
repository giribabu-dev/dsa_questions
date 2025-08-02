/*
    Factorial of Number
    Que: Function to calculate factorial of a number using Recursion
*/

function factorial(n){
    if(n == 0 || n == 1) return 1
    
    return n * factorial(n - 1)
}

console.log(factorial(3))
console.log(factorial(1))
console.log(factorial(5))
