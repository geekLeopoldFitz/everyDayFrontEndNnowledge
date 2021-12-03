/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 第一种方法：暴力解法; 时间复杂度：O(n+nlogn)
    const len = nums.length
    for (let i = 0; i < len; i++) {
        nums[i] = nums[i] * nums[i]
    }
    nums = nums.sort((function (a, b) {
        return a - b
    }))
    return nums
};

var sortedSquares = function (nums) {
    // 第二种方法：双指针 --- 时间复杂度为O(n)
    let newArr = [] // 新数组
    for (let i = 0, j = nums.length - 1; i <= j;) {
        // 这里原数组nums,已经有排序了，所以平方结果只能在两端
        const left = Math.abs(nums[i])
        const right = Math.abs(nums[j])
        if (left >= right) {
            newArr.unshift(left * left)
            i++
        } else {
            newArr.unshift(right * right)
            j--
        }
    }
    return newArr
};
// @lc code=end