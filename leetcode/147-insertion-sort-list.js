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
function insertionSortList(head) {
  if (!head || !head.next) return head;

  const dummyHead = new ListNode(null);
  dummyHead.next = head;

  let cur = head.next;
  head.next = null;
  while (cur) {
    const next = cur.next;
    let node = dummyHead;
    while (node.next && cur.val > node.next.val) {
      node = node.next;
    }
    const tmp = node.next;
    node.next = cur;
    cur.next = tmp;
    cur = next;
  }
  return dummyHead.next;
}
