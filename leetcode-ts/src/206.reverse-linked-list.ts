/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

// function reverseList (head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) {
//     return head
//   }

//   let p1: ListNode | null = head
//   let p2: ListNode | null = null
//   while (p1 !== null) {
//     const next = p1.next
//     p1.next = p2
//     p2 = p1
//     p1 = next
//   }

//   return p2
// }

// recursive
function reverseList (head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }

  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
// @lc code=end
