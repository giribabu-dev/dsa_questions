/* Count Negative Numbers in an Array */


const arr = [5, -15, -7, 1, 20, -25];

let count = 0;

function countNegativeNumbers(arr){
    arr.forEach((ele, index)=> {
        if(ele < 0){
            count += 1;
        }
    });

    console.log(count);
};

countNegativeNumbers(arr);