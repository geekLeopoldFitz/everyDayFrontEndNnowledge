/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
// 解法1：递归
var countNodes = function (root) {
    // 1: 确认递归参数和返回值
    const getNumber = function (node) {
        // 2：确认终止条件
        if (!node) return 0;
        // 3：确认单层递归逻辑
        let leftNum = getNumber(node.left);
        let rightNum = getNumber(node.right);
        return num = 1 + leftNum + rightNum;
    }
    return getNumber(root);
};

// 解法2：迭代---层序遍历
var countNodes = function (root) {
    let queue = [];
    if (!root) return 0;
    queue.push(root);
    let nodeNums = 0;
    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            nodeNums++;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return nodeNums;
}
// @lc code=end

