/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
  const ls1 = [], ls2 = [];
  _getLeafValueSequence(root1, ls1);
  _getLeafValueSequence(root2, ls2);

  if (ls1.length !== ls2.length) return false;
  for (let i = 0; i < ls1.length; i++) {
    if (ls1[i] !== ls2[i]) return false;
  }
  return true;

  function _getLeafValueSequence(root, res) {
    if (!root) return;

    if (!root.left && !root.right) {
      res.push(root.val);
      return;
    }

    _getLeafValueSequence(root.left, res);
    _getLeafValueSequence(root.right, res);
  }
}
