/* Check Voting Eligibility */


function isEligible(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isEligible(26));
console.log(isEligible(12));
console.log(isEligible(18));
