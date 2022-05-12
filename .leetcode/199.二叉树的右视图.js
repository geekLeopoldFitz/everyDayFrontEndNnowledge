/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @desc 思路 长度为当前层的长度就是最右边的节点
 */
var rightSideView = function (root) {
    // 二叉树右视图 只需要把每一层最后一个节点存储到res数组
    let res = [], queue = []; // 最终结果集和队列
    queue.push(root); // 首先把根节点插入哦队列
    // 如果根节点为空，则直接返回结果集，不需要做其他的处理
    if (!root) return res;
    // 遍历队列
    while (queue.length !== 0) {
        // 每一层结果集长度
        let length = queue.length;
        while (length--) {
            // 队列先进先出，所有把数组第一项弹出队列
            let node = queue.shift();
            // 这里如果是对队列中最后一个元素，则插入
            if (!length) {
                res.push(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return res;
};
// @lc code=end

