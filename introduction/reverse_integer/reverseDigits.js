/* 
    Reverse Integer
    Reverse the Digits of an Integer 
*/

function reverseDigits(num) {
    let output = "";

    for (let i = 0; num > 0; i++) {
        output = output + (num % 10);
        num = Math.floor(num / 10);
    };

    return output;
};

console.log(reverseDigits(1126));
console.log(reverseDigits(2025));
