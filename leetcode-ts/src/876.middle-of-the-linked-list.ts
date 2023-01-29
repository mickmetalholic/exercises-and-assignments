/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
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

function middleNode (head: ListNode | null): ListNode | null {
  let p1 = head
  let p2 = head

  while (p2 !== null && p2.next !== null) {
    p1 = p1 === null ? p1 : p1.next
    p2 = p2.next
    p2 = p2.next
  }

  return p1
}
// @lc code=end
