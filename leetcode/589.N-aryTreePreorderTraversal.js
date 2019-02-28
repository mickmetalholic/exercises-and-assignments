/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
  const res = [];
  _preorder(root);
  return res;

  function _preorder(node) {
    if (!node) return;
    res.push(node.val);
    node.children && node.children.forEach(_preorder);
  }
}
