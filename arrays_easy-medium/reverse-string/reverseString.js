/*
    Reverse String
    Question: Reverse the characters of a string
*/

let input = "javascript and node js";

function reverseString(str) {
    let reverseStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    console.log(reverseStr);
};

reverseString(input);