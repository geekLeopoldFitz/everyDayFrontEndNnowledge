/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    // 如果都为空，则为true
    if (!root && subRoot) return false;
    // 递归三部曲
    // 1:确定递归参数和返回值
    const isSameTree = function (left, right) {
        // 2:确定终止条件
        // 首先判断节点为空的情况
        // 左节点为空，右节点不为空
        if (left === null && right !== null) return false;
        // 左节点不为空，右节点为空
        else if (left !== null && right === null) return false;
        // 左右节点都为空--->对称
        else if (left === null && right === null) return true;
        // 左右树都不为空，但是值不相同
        else if (left.val !== right.val) return false;
        // 3：确认单层递归条件
        let outSize = isSameTree(right.left, left.left);
        let inSize = isSameTree(right.right, left.right);
        return outSize && inSize;
    }
    // 递归出口
    if (!root) return false;
    // 若两个树相同，肯定是true
    if (isSameTree(root, subRoot)) return true;
    // 不相同，就递归判断s的左右子树
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end

