/*
    Remove Element
    Que: Remove specific elements from an array
*/

function removeElement(arr, num){
    let result = []

    arr.forEach(ele => {
        if(ele !== num){
            result.push(ele)
        }
    })
    return result
}

console.log(removeElement([11, 29, 7, 20, 25], 29))
console.log(removeElement([18, 28, 30, 7, 1], 30))