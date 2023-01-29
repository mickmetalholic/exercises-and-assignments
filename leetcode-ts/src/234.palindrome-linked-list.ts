/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome (head: ListNode | null): boolean {
  const stack: number[] = []

  let p1 = head
  let p2 = head
  while (p1 !== null && p2 !== null && p2.next !== null) {
    stack.push(p1.val)
    p1 = p1.next
    p2 = p2.next.next
  }

  if (p2 !== null) {
    p1 = p1?.next ?? null
  }

  while (p1 !== null) {
    if (p1.val !== stack.pop()) {
      return false
    }
    p1 = p1.next
  }

  return true
}
// @lc code=end
