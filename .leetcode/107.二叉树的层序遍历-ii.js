/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    // 二叉树层序遍历
    let res = [], queue = []; // 最终结果集和队列
    queue.push(root); //根节点先插入队列中
    // 如果根节点为空，则不用进行后续处理了
    if (!root) return res;
    // 遍历队列
    while (queue.length !== 0) {
        // 每一层的结果集
        let curLevel = [];
        const length = queue.length;
        // 遍历每层队列
        for (let i = 0; i < length; i++) {
            // 队列先进先出，所有拿出第一项
            let node = queue.shift();
            curLevel.push(node.val);
            // 将当前节点的左右子节点插入队列中
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // 从数组前头插入值，避免最后反转数组，减少运算时间
        res.unshift(curLevel);
    }
    return res;
};
// @lc code=end

