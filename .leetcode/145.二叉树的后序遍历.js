/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    let res = []
    const traverse = function (root) {
        if (root === null) return;
        // 递归左子树
        traverse(root.left);
        // 递归右子树
        traverse(root.right);
         // 后序遍历所以从父节点结束
         res.push(root.val);
    }
    traverse(root);
    return res;
};

// ts写法
function postorderTraversal(root: TreeNode | null): number[] {
    function traverse (root: TreeNode | null, res: number[]): void {
        if (root === null ) return; 
        traverse(root.left, res);
        traverse(root.right, res);
        res.push(root.val);
    }
    const res: number[] = [];
    traverse(root, res);
    return res
};
// @lc code=end

