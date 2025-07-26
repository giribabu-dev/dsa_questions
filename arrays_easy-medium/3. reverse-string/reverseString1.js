/*
    Reverse String
    Question: Reverse the characters of a string

    str.split('')
        converts "hello" into ["h", "e", "l", "l", "o"]
    .reverse()
        reverses it to ["o", "l", "l", "e", "h"]
    .join('')
        joins it back to 'olleh'
*/

function reverseString(str){

    return str.split("").reverse().join("");
};

console.log(reverseString("javascript playground"));
console.log(reverseString("nodejs and expressjs"));
