/* Check if a string is a Palindrome or not */

/* madam, racecar, 12321 */

let input = "Giribabu";

function checkPalindrome(str) {
    let output = "";

    for (let i = str.length - 1; i >= 0; i--) {
        output = output + str.charAt(i);
    };

    if (input.toLowerCase() == output.toLowerCase()) {
        console.log(input + " is a Palindrome string");
    }
    else {
        console.log(input + " is not a Palindrome string");
    }
};

checkPalindrome(input);