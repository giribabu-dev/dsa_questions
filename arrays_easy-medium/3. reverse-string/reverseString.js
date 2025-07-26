/*
    Reverse String
    Question: Reverse the characters of a string
*/

function reverseString(str) {

    let reverseStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    return reverseStr;
};

console.log(reverseString("javascript and reactjs"));
console.log(reverseString("web development"));
