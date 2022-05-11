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
// var preorderTraversal = function (root) {
//     let res = []
//     const traverse = function (root) {
//         if (root === null) return;
//         // 前序遍历所以从父节点开始
//         res.push(root.val);
//         // 递归左子树
//         traverse(root.left);
//         // 递归右子树
//         traverse(root.right);
//     }
//     traverse(root);
//     return res;

// };

// 遍历写法
// 入栈 右 -> 左
// 出栈 中 -> 左 -> 右
var preorderTraversal = function (root) {
    let res = [];
    if (!root) return res;
    const stack = [root];
    // 设置指针
    let cur = null;
    while (stack.length) {
        // 指针指向最后数组的一个元素
        cur = stack.pop();
        res.push(cur.val);
        // 因为遍历需要回溯，所有先右再左
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
}
// @lc code=end

