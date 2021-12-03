/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // 处理特殊情况
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const arr = []
    let l = 0,
        r = matrix[0].length - 1,
        t = 0,
        b = matrix.length - 1
    while (true) {
        // 从左到右
        for (let i = l; i <= r; i++) {
            arr.push(matrix[t][i])
        }
        t++
        // 处理什么时候跳出循环
        if (t > b) break;
        // 从上到下
        for (let i = t; i <= b; i++) {
            arr.push(matrix[i][r])
        }
        r--
        if (r < l) break;
        // 从右到左
        for (let i = r; i >= l; i--) {
            arr.push(matrix[b][i])
        }
        b--
        if (b < t) break;
        // 从下到上
        for (let i = b; i >= t; i--) {
            arr.push(matrix[i][l])
        }
        l++
        if (l > r) break;
    }
    return arr
};
// @lc code=end