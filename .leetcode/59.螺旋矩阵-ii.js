/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    // new Array(n).fill(new Array(n))
    // 使用fill --> 填充的是同一个数组地址
    const res = Array.from({
        length: n
    }).map(() => new Array(n));
    let l = 0,
        t = 0,
        r = n - 1,
        b = n - 1 // 边界
    let num = 1,
        target = n * n
    while (num <= target) {
        // 从左到右
        for (let i = l; i <= r; i++) {
            res[t][i] = num++
        }
        t++
        // 从上到下
        for (let i = t; i <= b; i++) {
            res[i][r] = num++
        }
        r--
        // 从右到左
        for (let i = r; i >= l; i--) {
            res[b][i] = num++
        }
        b--
        // 从下到上
        for (let i = b; i >= t; i--) {
            res[i][l] = num++
        }
        l++
    }
    return res
}
// @lc code=end