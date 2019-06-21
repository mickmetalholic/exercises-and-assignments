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
function isPalindrome(head) {
  if (!head || !head.next) return true;

  let right = head, p = head;
  while (p) {
    right = right.next;
    p = p.next && p.next.next;
  }

  let p1 = right, p2 = p1.next, p3 = p2 && p2.next;
  right.next = null;
  while (p2) {
    p2.next = p1;
    p1 = p2;
    p2 = p3;
    p3 = p3 && p3.next;
  }

  let node1 = head, node2 = p1;
  while (node2) {
    if (node2.val !== node1.val) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return true;
}
