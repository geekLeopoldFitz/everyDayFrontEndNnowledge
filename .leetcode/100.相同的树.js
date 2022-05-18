/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 解法1：递归法
var isSameTree = function (p, q) {
    // 如果都为空，则为true
    if (!p && !q) return true;
    // 递归三部曲
    // 1:确定递归参数和返回值
    const compareNode = function (left, right) {
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
        let outSize = compareNode(left.left, right.left);
        let inSize = compareNode(left.right, right.right);
        return outSize && inSize;
    }
    return compareNode(p, q);
};
// 解法2：深度优先遍历的前序遍历
// 用栈进行模拟
// 遍历顺序 中、左、右
// 入栈： 中、右、左
// 出栈：中、左、右
var isSameTree = function (p, q) {
    // 如果左右树都是空，直接发挥true
    if (!p && !q) return true;
    const stack = []; // 模拟栈
    stack.push(p);
    stack.push(q);
    while (stack.length) {
        // 先判断为空的情况
        let leftNode = stack.pop(); // 左边树
        let rightNode = stack.pop(); //右边的树 
        // 如果左右都为空，则跳出循环
        if (leftNode === null && rightNode === null) continue;
        else if (leftNode === null && rightNode !== null) return false;
        else if (leftNode !== null && rightNode === null) return false;
        else if (leftNode.val !== rightNode.val) return false;
        // 如果子节点存在切值相同，则继续插入模拟栈中，继续迭代
        stack.push(leftNode.left);
        stack.push(rightNode.left);
        stack.push(leftNode.right);
        stack.push(rightNode.right);
    }
    return true;
}

// 解法3：广度优先遍历
// 用队列进行模拟 --- 先进先出
var isSameTree = function (p, q) {
    // 如果左右树都是空，直接发挥true
    if (!p && !q) return true;
    const queue = []; // 模拟栈
    queue.push(p);
    queue.push(q);
    while (queue.length) {
        // 先判断为空的情况
        let leftNode = queue.shift(); // 左边树
        let rightNode = queue.shift(); //右边的树 
        // 如果左右都为空，则跳出循环
        if (leftNode === null && rightNode === null) continue;
        else if (leftNode === null && rightNode !== null) return false;
        else if (leftNode !== null && rightNode === null) return false;
        else if (leftNode.val !== rightNode.val) return false;
        // 如果子节点存在切值相同，则继续插入模拟栈中，继续迭代
        queue.push(leftNode.left);
        queue.push(rightNode.left);
        queue.push(leftNode.right);
        queue.push(rightNode.right);
    }
    return true;
}
// @lc code=end

