/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // brute force T- O(n*n)
    // 2 for loop
    // let ans = [];
    // for(let i = 0 ; i < nums.length ; i ++){
    //     for(let j = i+1 ; j < nums.length ;j++){
    //         if(nums[i]+ nums[j] === target){
    //             ans.push(i,j);
    //         }
    //     }
    // }

    // optimized approach T- O(n)
    // using map for storing index of current value as key
    // if target-value is there in map we got the number
    let mp = new Map();
    for(let i = 0 ; i < nums.length;i++){
        let newTarget = target - nums[i]; // new value to find in map
        if(mp.has(newTarget)){
           return  [mp.get(newTarget),i];
        }
        mp.set(nums[i],i);
    }
    
};