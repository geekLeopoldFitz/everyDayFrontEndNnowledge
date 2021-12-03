/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // 暴力解法
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if (nums[i] === val) { // 发现需要移除的元素，就将数组集体向前移动一位
            for (let j = i + 1; j < length; j++) {
                nums[j - 1] = nums[j]
            }
            i-- // 因为下表i以后的数值都向前移动了一位，所以i也向前移动一位
            length-- // 此时数组的大小-1
        }
    }
    return length
};

var removeElement = function (nums, val) {
    // 双指针解法
    let length = nums.length
    let slowKey = 0
    for (let fastKey = 0; i < length; i++) {
        if (nums[fastKey] !== val) {
            nums[slowKey++] = nums[fastKey]
            length --
        }
    }
    return slowKey
};
// @lc code=end