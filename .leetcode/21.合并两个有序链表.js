/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归方法---栈
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
    } else {
        l2.next = mergeTwoLists(l2.next, l1)
    }
};
// 迭代方法---链表
var mergeTwoLists2= function(l1, l2) {
    // 定义一个虚拟节点，最后返回下一个虚拟节点
    const newList = new ListNode(0)
    // 定义指针指向虚拟节点
    let p = newList
    // 用解构，使p1,p2分别指向两个链表头
    let [p1, p2] = [l1, l2]
    // 如果p1、p2 都有值
    while (p1 && p2) {
         // 如果p1指向的值小，则p指向p1的值
        // p1右移
        // 否则p指向p2的值，p2右移
        if (p1.val < p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        // 指针p也要右移
        p = p.next
    }
    // 到最后退出循环了，p1,p2肯定有且只有一个是null
    // 那么另一个不是null的还没有连接到p上
    // 把p再连接到不是null的那个
    p.next = p1 ? p1 : p2;
    // 返回虚拟节点的下一个节点
    return newList.next;
};
// @lc code=end

