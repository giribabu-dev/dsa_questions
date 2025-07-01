/* Print All Even Numbers in an Array  */


const arr = [5, 10, 7, 1, 20, 25];
function printEvenNumbers(arr){
    arr.forEach((ele, index)=> {
        if(ele % 2 == 0){
            console.log(ele)
        }
    })
};

printEvenNumbers(arr);