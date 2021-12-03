/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 第一种情况：头结点或者头结点之后没有是指向null, 则不存在环
    if (!head || !head.next) return null;
    // 第二种 有多个节点，但是不知道是否存在环形链表
    let slow = head.next,
        fast = head.next.next;
    // fast 不为null, fast 下一个节点不为bull, fast 不等于slow 既无环
    // fast !== slow 这种情况一定是相交节点
    while (fast && fast.next && fast !== slow) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 不存在环
    if (!fast || !fast.next) return null;
    // 存在环,则根据推导公式(x + y) * 2 = x + y + n (y + z) => x = (n - 1) (y + z) + z
    // 从头结点出发一个指针，从相遇节点 也出发一个指针，这两个指针每次只走一个节点，
    //  那么当这两个指针相遇的时候就是 环形入口的节点。
    slow = head;
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next; // fast从相交节点开始动
    }
    return slow;
};
// @lc code=end