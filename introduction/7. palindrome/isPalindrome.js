/*
    Palindrome
    Check if a string or number is a palindrome.
*/

function isPalindrome(value){

    // convert to string
    let str = value.toString();

    // reverse the string
    let reverseStr = str.split('').reverse().join('');

    // check if original string and reversed string are same
    return str === reverseStr;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome(121));
console.log(isPalindrome("hello"));
console.log(isPalindrome(12321));
