/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  if (!head || !head.next) return null;

  let p1 = head.next, p2 = head.next.next;
  while (p1 !== p2) {
    if (!p1 || !p2) return null;
    p1 = p1.next;
    p2 = p2.next && p2.next.next;
  }
  let p3 = head;
  while (p1 !== p3) {
    p1 = p1.next;
    p3 = p3.next;
  }
  return p1;
}
