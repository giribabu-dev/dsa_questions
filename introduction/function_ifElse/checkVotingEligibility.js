/* Check Voting Eligibility */


function checkVotingEligibility(num){
    if(num > 18){
        console.log("Eligible for voting");
    }
    else{
        console.log("Not eligible for voting");
    }
};

checkVotingEligibility(26);