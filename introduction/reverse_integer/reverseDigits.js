/* Reverse the Digits of an Integer */

let input = 1126;

function reverseDigits(num) {
    let output = "";

    for (let i = 0; num > 0; i++) {
        output = output + (num % 10);
        num = Math.floor(num / 10);
    };

    console.log(output);
};

reverseDigits(input);