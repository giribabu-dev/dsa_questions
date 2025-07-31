/*
    Max Consecutive Ones
    Find the maximum streak of 1s in a binary array.
*/

function findMaxStreak(arr) {
    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        }
        else {
            currentStreak = 0;
        }
    }
    return maxStreak;
};

console.log(findMaxStreak([0, 1, 0, 1, 1, 1, 1]));
console.log(findMaxStreak([1, 1, 0, 1, 1, 1, 0, 1]));
