/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    // 二叉树层序遍历
    let res = [], queue = [];
    queue.push(root); //根节点先插入队列中
    // 如果根节点为空，则不用做后续处理
    if (!root) return res;
    // 遍历队列
    while (queue.length !== 0) {
        // 记录当前层级节点数
        let length = queue.length;
        // 存放每一层的节点
        let curLevel = [];
        for (let i = 0; i < length; i++) {
            // 移除数组的第一项
            let node = queue.shift();
            // 把队列最前边的节点值插入每一层节点的数组中
            curLevel.push(node.val);
            // 存放当前层的下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // 把每一层的结果放入到结果数组
        res.push(curLevel);
    }
    // 最后返回结果集
    return res;
};
// @lc code=end

