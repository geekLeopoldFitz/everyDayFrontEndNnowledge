/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // 解法1：滑动解法
    let minLen = Infinity;
    let len = nums.length,
        left = 0,
        right = 0,
        sum = 0
    while (right < len) {
        sum += nums[right]
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return minLen === Infinity ? 0 : minLen; // 从未找到可行解，返回0
};
// @lc code=end