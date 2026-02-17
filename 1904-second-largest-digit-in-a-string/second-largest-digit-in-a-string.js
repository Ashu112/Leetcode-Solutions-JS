/**
 * @param {string} s
 * @return {number}
 */


var secondHighest = function(s) {
    // 1. traverse each char and mantain first and second max
    // 2. if char is number check for first and second max
    // 3. return the second max
    let firstMax = -1 
    let secondMax = -1;
    for(let i = 0 ; i < s.length ;i++){
        if(s[i] >= '0' && s[i] <= '9' ){
            let num = Number(s[i]);
            if(num > firstMax){
                secondMax = firstMax;
                firstMax = num;
            }else if(num < firstMax && num > secondMax){
                secondMax = num;
            }
        }
    }
    return secondMax;
};