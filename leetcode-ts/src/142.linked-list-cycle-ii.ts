/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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

function detectCycle (head: ListNode | null): ListNode | null {
  const set = new Set()
  let current: ListNode | null = head
  while (current !== null) {
    if (set.has(current)) {
      return current
    }
    set.add(current)
    current = current.next
  }
  return null
}
// @lc code=end
