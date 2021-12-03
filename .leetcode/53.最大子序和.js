/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 第一种情况，自身就是自身
    const length = nums.length
    if (!length) {
        return nums
    } else if (length === 1) {
        return nums[0]
    }
    let ans = nums[0]
    let sum = 0
    // 如果有多个，则需要进行下边步骤
    // 如果用for循环，虽然可提高效率，但是不能终止遍历，这里需要使用for-of
    for(const num of nums) {
        if(sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};
// @lc code=end

