/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // 新建虚拟节点，避免处理头结点特殊情况
    let ret = new ListNode(0, head),
        temp = ret;
    while (temp.next && temp.next.next) {
        // 存储需要交换位置的前一个链表节点和后一个链表节点
        let cur = temp.next.next,
            pre = temp.next;
        pre.next = cur.next; // 后节点指向第三个链表节点
        cur.next = pre; // 后链表节点指向交换前的链表前节点
        temp.next = cur; // 虚拟头结点交换前的后链表节点
        temp = pre; // 指针后移两位，准备下一轮交换
    }
    return ret.next // 返回去除虚拟节点的交换后链表

};
// @lc code=end