/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
// 解法1：递归法
var binaryTreePaths = function (root) {
    // 前序遍历，因为这里需要根节点和叶子节点
    let res = []; // 最终结果集
    // 递归三部曲
    // 1:确定递归函数的参数和返回值
    const getPath = function (node, curPath) {
        // 2：确定终止条件 --- 因为这里有回溯，所有不能判断当前节点为空，需要判断子节点
        if (node.left === null && node.right === null) {
            curPath += node.val;
            res.push(curPath);
            return;
        }
        // 3: 确认单层递归逻辑
        curPath += node.val + '->';
        node.left && getPath(node.left, curPath);
        node.right && getPath(node.right, curPath);
    }
    getPath(root, '');
    return res;
};

// 解法2：迭代法
var binaryTreePaths = function (root) {
    // 迭代法
    // 前序遍历：中->左->右
    /// 入栈 右 -> 左
    // 出栈 中 -> 左 -> 右
    if (!root) return [];
    const res = [];// 最终返回结果集
    const stack = [root]; // 模拟递归
    const paths = ['']; // 存放对应的遍历路径
    while (stack.length) {
        const node = stack.pop();
        let path = paths.pop();
        // 到叶子节点终止, 添加路径到结果中
        if (!node.left && !node.right) {
            res.push(path + node.val);
            continue;
        }
        path += node.val + '->';
        // 右节点存在
        if (node.right) {
            stack.push(node.right);
            paths.push(path);
        }
        // 左节点存在
        if (node.left) {
            stack.push(node.left);
            paths.push(path);
        }
    }
    return res;
}
// @lc code=end

