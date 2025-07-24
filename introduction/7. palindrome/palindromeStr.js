/* 
    Palindrome
    Check if a string is a Palindrome.
*/

function checkPalindrome(str) {

    const original = str;
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str.charAt(i);
    };

    return original === reversed;
};

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("javascript"));
console.log(checkPalindrome("racecar"));
