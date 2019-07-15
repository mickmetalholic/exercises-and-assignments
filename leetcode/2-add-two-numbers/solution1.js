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
function addTwoNumbers(l1, l2) {
  let { nextCarry: carry, nextNode: cur } = add(l1, l2, 0);
  const res = cur;
  let node1 = l1.next, node2 = l2.next;
  while (node1 || node2) {
    const { nextCarry, nextNode } = add(node1, node2, carry);
    cur.next = nextNode;
    carry = nextCarry;
    cur = cur.next;
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }
  cur.next = carry === 1 ? new ListNode(1) : null;
  return res;

  function add(node1, node2, carry) {
    const sum = carry + (node1 ? node1.val : 0) + (node2 ? node2.val : 0);
    return {
      nextNode: new ListNode(sum % 10),
      nextCarry: Math.floor(sum / 10),
    };
  }
}
