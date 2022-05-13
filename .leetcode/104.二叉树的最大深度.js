/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 解法1：层序遍历方式
var maxDepth = function (root) {
    let maxDepth = 0;
    let queue = [root];
    if (!root) return maxDepth;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        maxDepth++;
    }
    return maxDepth;
};

// 解法2：递归
var maxDepth = function (root) {
    // 1:确定递归参数：node; 返回值：层数
    const getDepth = function (node) {
        // 2: 确定终止条件
        if (node === null) {
            return 0;
        }
        // 3: 确认单层递归逻辑
        let leftDepth = getDepth(node.left);
        let rightDepth = getDepth(node.right);
        let depth = 1 + Math.max(leftDepth, rightDepth);
        return depth;
    }
    return getDepth(root);
}
// @lc code=end

