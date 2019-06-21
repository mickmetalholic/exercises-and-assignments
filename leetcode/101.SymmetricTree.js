/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  if(!root) return true;

  return _isMirror(root.left, root.right);  

  function _isMirror(node1, node2) {
    if (!node1 && !node2) {
      return true;
    } else if (
      (!node1 && node2)
      || (node1 && !node2)
      || (node1.val !== node2.val)
    ) {
      return false;
    }
    return _isMirror(node1.left, node2.right) && _isMirror(node1.right, node2.left);
  }
}
