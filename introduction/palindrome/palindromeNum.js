/* Check if a Number is a Palindrome or not */

let input = 2025;

function checkPalindrome(num) {

    let output = "";

    for (let i = 0; num > 0; i++) {
        output = output + (num % 10);
        num = Math.floor(num / 10);
    };

    if (input == output) {
        console.log(input + " is a Palindrome number");
    }
    else {
        console.log(input + " is not a Palindrome number");
    }
};

checkPalindrome(input);