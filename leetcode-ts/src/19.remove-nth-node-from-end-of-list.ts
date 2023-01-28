/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd (head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null
  }

  let p1: ListNode | null = head
  let i = n
  while (p1 !== null && i > 0) {
    p1 = p1.next
    i--
  }

  if (p1 === null) {
    return head.next
  }

  let p2: ListNode | null = head
  while (p1 !== null && p2 !== null && p1.next !== null) {
    p1 = p1.next
    p2 = p2.next
  }

  if (p2 === null) {
    return head
  }

  const next = p2.next
  p2.next = next === null ? null : next.next

  return head
}
// @lc code=end
