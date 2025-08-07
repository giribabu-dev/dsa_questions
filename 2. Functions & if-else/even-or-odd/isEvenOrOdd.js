/* 
    Even or Odd Number

    Problem Statement::
    Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisible by 2,
    It's an Even number. Otherwise, it's an Odd number. Test the function with inputs 18 and 5.

    Approach::
    1) Create a function that takes a number.
    2) if number % 2 === 0, return Even.
    3) Else return Odd

    Example::
    Input: 18 → Output: Even Number
    Output: 5 → Output: Odd Number
*/

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("Even Number")
    }
    else {
        console.log("Odd Number")
    }
}

checkEvenOrOdd(18)
checkEvenOrOdd(5)
