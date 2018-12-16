/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let p1 = l1, p2 = l2;
  let head = null, tail = null;
  let next = 0;
  while (p1 !== null || p2 !== null) {
    const val1 = p1 ? p1.val : 0;
    const val2 = p2 ? p2.val : 0;
    const cur = val1 + val2 + next;
    next = Math.floor(cur / 10);
    if (!head) {
      head = new ListNode(cur % 10);
      tail = head;
    } else {
      tail.next = new ListNode(cur % 10);
      tail = tail.next;
    }
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }
  if (next) {
    tail.next = new ListNode(next);
  }
  return head;
};
