/* Even or Odd Number */


function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
};

console.log(isEvenOrOdd(8));
console.log(isEvenOrOdd(17));
console.log(isEvenOrOdd(722));
console.log(isEvenOrOdd(2025));
