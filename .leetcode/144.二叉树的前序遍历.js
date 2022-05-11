/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = []
    const traverse = function (root) {
        if (root === null) return;
        // 前序遍历所以从父节点开始
        res.push(root.val);
        // 递归左子树
        traverse(root.left);
        // 递归右子树
        traverse(root.right);
    }
    traverse(root);
    return res;

};
// @lc code=end

