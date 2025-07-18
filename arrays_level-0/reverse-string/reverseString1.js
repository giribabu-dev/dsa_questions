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

const input = "javascript playground";

function reverseString(str){

    let reverseStr = str.split("").reverse().join("");

    console.log(reverseStr);
};

reverseString(input);