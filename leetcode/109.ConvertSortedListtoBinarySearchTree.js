/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  if (!head || !head.next) return head ? new TreeNode(head.val) : null;

  let p1 = null, p2 = head;
  while (p2 && p2.next) {
    p1 = p1 ? p1.next : head;
    p2 = p2.next.next;
  }
  const root = new TreeNode(p1.next.val);
  const rightHead = p1.next.next;
  p1.next = null;
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(rightHead);
  return root;
}
