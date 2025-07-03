/* Print All Even Numbers in an Array  */


const arr = [5, 10, 7, 1, 20, 25];

function printEvenNumbers(arr){
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }
};

printEvenNumbers(arr);