/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 解法1：递归
var isSymmetric = function (root) {
    // 第一步，确认确认递归参数，root.left,root.right;返回值：true,false;
    const compareNode = function (left, right) {
        // 第二步：确认终止条件，空的情况
        // 首先判断节点为空的情况
        // 左节点为空，右节点不为空
        if (left === null && right !== null) return false;
        // 左节点不为空，右节点为空
        else if (left !== null && right === null) return false;
        // 左右节点都为空--->对称
        else if (left === null && right === null) return true;
        // 左右节点不为空，但是值不同
        else if (left.val !== right.val) return false;
        // 第三步：确认单层递归逻辑
        let outSide = compareNode(left.left, right.right);
        let inSide = compareNode(left.right, right.left);
        return outSide && inSide;
    }
    if (!root) return true;
    return compareNode(root.left, root.right);
};

// 解法2：广度---队列思想实现
var isSymmetric = function (root) {
    // 如果为空就直接不用进行后续操作
    if (!root) return true;
    let queue = [];
    // 把根节点左右子树插入队列中
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        // 先判断为空的情况，再比较值是否先等
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if (leftNode === null && rightNode === null) continue;
        else if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        // 继续插入到队列中按照：左外（leftNode.left）右外（rightNode.right），左里（leftNode.right）右里(rightNode.left) 成对插入
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
};

// 解法3：深度---迭代栈思想实现
var isSymmetric = function (root) {
    // 如果为空就直接不用进行后续操作
    if (!root) return true;
    let stack = [];
    // 把根节点左右子树插入队列中
    stack.push(root.left);
    stack.push(root.right);
    while (stack.length) {
        // 先判断为空的情况，再比较值是否先等
        let leftNode = stack.pop();
        let rightNode = stack.pop();
        if (leftNode === null && rightNode === null) continue;
        else if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        // 继续插入到队列中按照：左外（leftNode.left）右外（rightNode.right），左里（leftNode.right）右里(rightNode.left) 成对插入
        stack.push(leftNode.left);
        stack.push(rightNode.right);
        stack.push(leftNode.right);
        stack.push(rightNode.left);
    }
    return true;
};

// @lc code=end

