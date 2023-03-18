/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function reverseKGroup (head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return head
  }

  let tail: ListNode | null = head
  for (let i = 0; i < k; i++) {
    if (tail === null) {
      return head
    }
    tail = tail.next
  }
  const newHead = _reverse(head, tail)
  head.next = reverseKGroup(tail, k)
  return newHead

  function _reverse (head: ListNode, tail: ListNode | null): ListNode {
    let p1: ListNode = head
    let p2: ListNode | null = head.next
    p1.next = null
    while (p2 !== null && p2 !== tail) {
      const next = p2.next
      p2.next = p1
      p1 = p2
      p2 = next
    }
    return p1
  }
}
// @lc code=end
