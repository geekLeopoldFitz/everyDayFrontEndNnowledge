/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = [0,1]
    for (let i = 0; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    console.log(dp)
    return dp[n]
};
// @lc code=end

