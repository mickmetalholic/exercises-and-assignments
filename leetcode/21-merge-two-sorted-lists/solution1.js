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
function mergeTwoLists(l1, l2) {
  let p1 = l1, p2 = l2;
  const dummyHead = new ListNode(null);

  let curNode = dummyHead;
  while (p1 || p2) {
    if (
      !p2
      || (p1 && p2 && p1.val <= p2.val)
    ) {
      curNode.next = p1;
      p1 = p1.next;
    } else {
      curNode.next = p2;
      p2 = p2.next;
    }
    curNode = curNode.next;
  }
  return dummyHead.next;
}
