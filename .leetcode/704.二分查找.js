/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // （版本一）左闭右闭区间
    let left = 0 // 左边界
    let right = nums.length - 1
    while (left <= right) { // <= 是因为left == right 是有意义的
        let middle = (left + right) >> 1 // >>x相当于除以2的x次方；>>0就是Math.floor()
        if (nums[middle] === target) return middle
        let isSmall = nums[middle] < target
        left = isSmall ? middle + 1 : left
        right = isSmall ? right : middle - 1
    }
    return -1
};

var search = function (nums, target) {
    // （版本二）左闭右开区间
    let left = 0 // 左边界
    let right = nums.length // 这里就是右开的边界区别
    while (left < right) { // <= 是因为left == right 是无意义的
        let middle = (left + right) >> 1 // >>x相当于除以2的x次方；>>0就是Math.floor()
        if (nums[middle] === target) return middle
        let isSmall = nums[middle] < target
        left = isSmall ? middle + 1 : left
        right = isSmall ? right : middle
    }
    return -1
};

var search = function (nums, target) {
    // 1. 先定义区间。这里的区间是[left, right]
    let left = 0
    let right = nums.length-1
    while (left <= right) {
        // 因为taeget是在[left, right]中，包括两个边界值，所以这里的left == right是有意义的
        // 2. 计算区间中间的下标（如果left、right都比较大的情况下，left + right就有可能会溢出）
        // let middle = (left + right) / 2
        // 防溢出：
        let middle = (left + right) >> 1
        // 3. 判断
        if (target > nums[middle]) {
            left = middle + 1
        } else if (target < nums[middle]) {
            right = middle -1
        } else {
            return middle
        }
    }

    // 如果找不到目标，则返回-1
    return -1

}
// @lc code=end