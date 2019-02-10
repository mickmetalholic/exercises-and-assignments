/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
  if (!root) return;
  _flattern(root);

  function _flattern(node) {
    if (node.left === null && node.right === null) return node;
    if (node.left === null) return _flattern(node.right);
    if (node.right === null) {
      const leftTail = _flattern(node.left);
      node.right = node.left;
      node.left = null;
      return leftTail;
    }
    const leftTail = _flattern(node.left);
    const rightTail = _flattern(node.right);
    leftTail.right = node.right;
    node.right = node.left;
    node.left = null;
    return rightTail;
  }
}
