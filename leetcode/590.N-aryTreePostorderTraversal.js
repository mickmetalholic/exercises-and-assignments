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
function postorder(root) {
  const res = [];
  _postorder(root);
  return res;

  function _postorder(node) {
    if (!node) return;
    node.children && node.children.forEach(_postorder);
    res.push(node.val);
  }
}
