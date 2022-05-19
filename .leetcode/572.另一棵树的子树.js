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
// 解法1：递归法
var isSubtree = function (root, subRoot) {
    // 递归三部曲
    // 1:确定递归参数和返回值
    const isSameTree = function (left, right) {
        // 2:确定终止条件
        // 首先判断节点为空的情况
        // 同时为空 说明树一起到底，两树相同
        if (left === null && right === null) return true;
        // 如果上面没有返回值，说明必有一个没有为空（有可能两个都不为空）
        else if (left === null && right !== null) return false;
        // 左节点不为空，右节点为空
        else if (left !== null && right === null) return false;
        // 左右树都不为空，但是值不相同
        // 如果判断到了这一步，说明两个都不为空
        // 先序遍历 自己--左 -- 右
        else if (left.val !== right.val) return false;
        // 3：确认单层递归条件
        return isSameTree(left.left, right.left) && isSameTree(left.right, right.right);
    }
    // 我s都遍历完了。你居然还没匹配上。那就返回false
    if (root == null) {
        return false;
    }
    // 短路运算符，有一个为真，返回真
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// 解法2：深度前序遍历，迭代，栈思想
// 遍历顺序 中、左、右
// 入栈： 中、右、左
// 出栈：中、左、右
var isSubtree = function (root, subRoot) {
    if (!root && !subRoot) true;
    const isSameTree = function (p, q) {
        let stack = []; // 模拟栈
        stack.push(p);
        stack.push(q);
        while (stack.length) {
            let node = stack.pop();// 寻找树
            let target = stack.pop(); // 目标树
            if (node === null && target === null) continue;
            else if (node === null || target === null || node.val !== target.val) return false;
            // 存在，切值相等，则继续插入模拟栈
            stack.push(node.left);
            stack.push(target.left);
            stack.push(node.right);
            stack.push(target.right);
        }
        return true;

    }
    // 层序遍历root树，将每个子树拿出来分别于subTree作比较

    let rootStack = [root];
    while (rootStack.length) {
        let rootNode = rootStack.pop();
        if (isSameTree(rootNode, subRoot)) return true;
        rootNode.left && rootStack.push(rootNode.left);
        rootNode.right && rootStack.push(rootNode.right);
    }
    return false;
}
// 解法3：广度前序遍历，迭代，队列思想
var isSubtree = function (root, subRoot) {
    if (!root && !subRoot) true;
    const isSameTree = function (p, q) {
        let queue = []; // 模拟栈
        queue.push(p);
        queue.push(q);
        while (queue.length) {
            let node = queue.shift();// 寻找树
            let target = queue.shift(); // 目标树
            if (node === null && target === null) continue;
            else if (node === null || target === null || node.val !== target.val) return false;
            // 存在，切值相等，则继续插入模拟栈
            queue.push(node.left);
            queue.push(target.left);
            queue.push(node.right);
            queue.push(target.right);
        }
        return true;

    }
    // 层序遍历root树，将每个子树拿出来分别于subTree作比较
    let rootQueue = [root];
    while (rootQueue.length) {
        let rootNode = rootQueue.shift();
        if (isSameTree(rootNode, subRoot)) return true;
        rootNode.left && rootQueue.push(rootNode.left);
        rootNode.right && rootQueue.push(rootNode.right);
    }
    return false;
}
// @lc code=end

