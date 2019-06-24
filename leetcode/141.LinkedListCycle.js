/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (!head || !head.next) return false;

  let p1 = head.next, p2 = head.next.next;
  while (p1 !== null && p2 !== null && p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next && p2.next.next;
  }
  if (p1 === null || p2 === null) return false;
  return true;
}
