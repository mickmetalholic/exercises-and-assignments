/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists (list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let p1 = list1
  let p2 = list2

  const dummyHead = new ListNode()
  let node: ListNode | null = dummyHead
  while (node !== null && (p1 !== null || p2 !== null)) {
    if (p1 === null && p2 !== null) {
      node.next = p2
      p2 = p2.next
    } else if (p1 !== null && p2 === null) {
      node.next = p1
      p1 = p1.next
    } else if (p1 !== null && p2 !== null) {
      if (p1.val <= p2.val) {
        node.next = p1
        p1 = p1.next
      } else {
        node.next = p2
        p2 = p2.next
      }
    }
    node = node.next
  }

  return dummyHead.next
}
// @lc code=end
