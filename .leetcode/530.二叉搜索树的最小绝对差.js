/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
// 解法1：递归解法---先转换成有序数组
var getMinimumDifference = function (root) {
    const arr = [];
    // 递归三部曲
    // 1:确定参数和返回值
    const generateTree = function (root) {
        // 2:确定终止条件
        if (!root) return;
        // 3：确认单层递归条件
        // 左
        generateTree(root.left);
        // 中
        arr.push(root.val);
        // 右
        generateTree(root.right);
    }
    generateTree(root);
    // 遍历生成后的有序数组，找出最小绝对值
    let minValue = arr[arr.length - 1];
    for (let i = 1; i < arr.length; i++) {
        if (minValue > arr[i] - arr[i - 1]) {
            minValue = arr[i] - arr[i - 1]
        }
    }
    return minValue;
};

// 解法2：递归---双指针解法
var getMinimumDifference = function (root) {
    let minValue = Infinity;
    let preNode = null;
    // 使用二叉搜索树的中序遍历特性
    // 递归三部曲
    // 1：确定参数和返回值
    const inoreder = function (root) {
        // 2：确定终止条件；
        if (!root) return;
        // 3：确认单层递归条件
        // 左节点
        inoreder(root.left);
        // 中 更新最小值
        if (preNode) {
            minValue = Math.min(minValue, root.val - preNode.val);
        }
        // 更新pre节点
        preNode = root;
        // 左
        inoreder(root.right);
    }
    inoreder(root);
    return minValue;
}
// 解法3：迭代法 --- 模拟中序遍历
var getMinimumDifference = function (root) {
    const stack = [];
    let minValue = Infinity;
    let cur = root;
    let pre = null;
    while (stack.length || cur) {
        // 指针来访问节点，访问到最底层
        if (cur) {
            // 将访问的节点放进栈
            stack.push(cur);
            // 左
            cur = cur.left;
        } else {
            cur = stack.pop();
            // 中
            if (pre) minValue = Math.min(minValue, cur.val - pre.val);
            pre = cur;
            // 右
            cur = cur.right;
        }
    }
    return minValue;
}
// @lc code=end

