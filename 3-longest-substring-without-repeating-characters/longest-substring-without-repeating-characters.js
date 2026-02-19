/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 1. create a lastSeen object to store the last ondex of the char
    // 2. place l at 0 and maxL = 0 
    // 3. traverse the string and check if the current char is seen before
    //     i. if yes move the l pointer to lastSeen + 1 
    //     ii. if not update the lastSeen of current char and update the maxLength
    let lastSeen = {};
    let l = 0 ;
    let maxLen = 0 ; 

    for(let r = 0 ; r < s.length ; r++){
        let currChar = s[r];

        // check if lastSeen and in current window
        if(lastSeen[currChar] !== undefined  && lastSeen[currChar] >= l){
            l = lastSeen[currChar] + 1;
        }

        lastSeen[currChar] = r;

        maxLen = Math.max(maxLen,r-l+1);
    }
    return maxLen;
};