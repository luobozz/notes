/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj={}
    for(let i in nums){
        if(obj[target-nums[i]]!=undefined){
            return [obj[target-nums[i]],i]
        }
        obj[nums[i]]=i
    }
};
// @lc code=end

