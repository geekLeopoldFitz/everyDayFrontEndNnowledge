/*
 * @Author: LeoFitz
 * @Date: 2020-10-22 10:35:30
 * @LastEditTime: 2020-10-22 17:08:01
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \everyDayFrontEndNnowledgec:\Users\sundan\.leetcode\746.使用最小花费爬楼梯.js
 */
/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for (var dp = [0, 0], i = 1; i++ < cost.length;) dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    return dp[--i]
};
// @lc code=end

