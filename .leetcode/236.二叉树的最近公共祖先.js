/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归解法---后续排列(模拟回溯过程)
var lowestCommonAncestor = function (root, p, q) {
    // 递归三部曲
    // 1：确定递归函数参数和返回值
    const travelTree = function (root, p, q) {
        // 2:确认终止条件
        if (root === p || root === q || root === null) return root;
        // 3：确认单层递归条件
        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);
        if (left !== null && right !== null) return root;
        else if (left === null && right !== null) return right;
        else if (left !== null && right === null) return left;
        else return null;
    }
    return travelTree(root, p, q);
};
// @lc code=end

