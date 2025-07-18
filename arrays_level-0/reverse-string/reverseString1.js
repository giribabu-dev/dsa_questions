/*
    Reverse String
    Question: Reverse the characters of a string
*/

const input = "javascript playground";

function reverseString(str){

    let reverseStr = str.split("").reverse().join("");

    console.log(reverseStr);
};

reverseString(input);