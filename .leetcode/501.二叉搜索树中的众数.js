/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
// 递归法：使用map结构---使用递归中序遍历
var findMode = function (root) {
    let map = new Map();
    // 递归三部曲
    // 1：确定参数和返回值
    const inoreder = function (root) {
        // 2：确认终止条件
        if (!root) return;
        // 3：确认单层递归条件
        inoreder(root.left); // 左
        map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1); // 中
        inoreder(root.right); // 右
    }
    inoreder(root);
    //上面把数据都存储到map
    //下面开始寻找map里面的
    // 定义一个最大出现次数的初始值为root.val的出现次数
    let maxMount = map.get(root.val);
    // 定义一个存放结果的数组
    let res = [];
    for (let [key, value] of map) {
        // 如果当前值等于最大出现次数就直接在res增加该值
        if (value === maxMount) {
            res.push(key)
        }
        // 如果当前值比最大出现值大，则就清空res的所有值，因为找到了更大的
        if (value > maxMount) {
            res = [];
            maxMount = value;
            res.push(key);
        }
    }
    return res;
};
// 递归解法---不使用额外空间，利用二叉树性质中序遍历(有序)
var findMode = function (root) {
    // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1
    let res = [], pre = null, maxMount = 1, count = 0;
    // 递归三部曲
    // 1.确定递归函数及函数参数
    const inoreder = function (cur) {
        // 2:确认终止条件
        if (!cur) return;
        inoreder(cur.left);
        // 3:确认单层递归条件
        if (pre === null) { // 第一个节点
            count = 1;
        } else if (cur.val === pre.val) {// 与前一个节点数值相同
            count++
        } else { // 不一样，则重新计数
            count = 1;
        }
        // 更新上一节点
        pre = cur;
        // 如果当前值等于最大出现次数就直接在res增加该值
        if (count === maxMount ) {
            res.push(cur.val);
        } else if( count > maxMount) {
            // 如果当前值比最大值大，则清空res,因为找到了最大值
            res = [];
            maxMount = count;
            res.push(cur.val);
        }
        // 右
        inoreder(cur.right);
    }
    inoreder(root);
    return res;
}
// @lc code=end

