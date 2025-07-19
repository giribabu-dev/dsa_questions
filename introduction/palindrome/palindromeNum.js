/* 
    Palindrome
    Check if a number is a Palindrome.
*/

function checkPalindrome(num) {

    const original = num;
    let reversed = 0;

    while(num > 0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
};

console.log(checkPalindrome(12321));
console.log(checkPalindrome(2025));
console.log(checkPalindrome(121));