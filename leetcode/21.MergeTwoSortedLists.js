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
    let res = null, p = null;
    while (p1 || p2) {
      let newNode;
      if (p1 && !p2) {
        newNode = p1;
        p1 = p1.next;
      } else if (p2 && !p1) {
        newNode = p2;
        p2 = p2.next;
      } else {
        if (p1.val < p2.val) {
          newNode = p1;
          p1 = p1.next;
        } else {
          newNode = p2;
          p2 = p2.next;
        }
      }
      if (p) {
        p.next = newNode;
      } else {
        res = newNode;
      }
      p = newNode;
    }
    return res;
  }