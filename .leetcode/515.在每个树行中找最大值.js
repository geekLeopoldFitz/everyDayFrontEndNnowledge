/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
    // 二叉树每行最大值，使用Math.max方法
    let res = [], queue = []; // 最终结果集和队列
    queue.push(root); // 首先把根节点插入哦队列
    // 如果根节点为空，则直接返回结果集，不需要做其他的处理
    if (!root) return res;
    // 遍历队列
    while (queue.length !== 0) {
        // 每一层结果集长度
        let length = queue.length;
        let curLevel = []; // 每一层的数组合集
        while (length--) {
            // 队列先进先出，所有把数组第一项弹出队列
            let node = queue.shift();
            curLevel.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(Math.max(...curLevel))
    }
    return res;
};
// @lc code=end

