/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }

  let p1 = head, p2 = head;
  for (let i = 0; i < k % len; i++) {
    p1 = p1.next;
  }
  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  const newHead = p2.next;
  if (newHead) {
    p2.next = null;
    p1.next = head;
    return newHead;
  } else {
    return head;
  }
}
