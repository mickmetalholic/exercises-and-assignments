/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  if (!head) return null;

  const cache = new Map();
  const newHead = new Node(head.val);
  let node = head, newNode = newHead;
  cache.set(head, newHead);
  while (node.next) {
    node = node.next;
    newNode.next = new Node(node.val);
    newNode = newNode.next;
    cache.set(node, newNode);
  }

  let p1 = head, p2 = newHead;
  while (p1) {
    if (p1.random === null) {
      p2.random = null;
    } else {
      p2.random = cache.get(p1.random);
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return newHead;
}
