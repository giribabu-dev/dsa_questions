/*
    1
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
    1 0 1 0 1 0
*/

let n = 6;

for (let i = 0; i < n; i++) {

    let row = "";
    let toggle = "1";

    for (let j = 0; j < (i + 1); j++) {

        row = row + toggle;

       toggle == '1' ? toggle = '0' : toggle = '1';
    };

    console.log(row);
};

