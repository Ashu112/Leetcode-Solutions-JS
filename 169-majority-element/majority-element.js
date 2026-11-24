/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let k = n/2;
    let mp = new Map();
    let ans = nums[0];

    for(let i = 0 ; i< n ;i++){
        mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
    }

    mp.forEach((val,key)=>{
        if(val > k){
            ans = key;
        }
    })

    console.log(ans);

    return ans;
};