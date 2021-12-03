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
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        let value = target - nums[i];
        if (map.has(value)) {
            return [map.get(value), i];
        } else {
            map.set(i, mums[i]);
        }
    }
    return []
};
// @lc code=end