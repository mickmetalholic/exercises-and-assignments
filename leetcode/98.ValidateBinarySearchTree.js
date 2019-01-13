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
const isValidBST = root => {
  return _isValidBST(root, null, null);

  function _isValidBST(root, min, max) {
    if (root === null) return true;
    if (
      (min !== null && root.val <= min)
      || (max !== null && root.val >= max)
    ) {
      return false;
    }

    return _isValidBST(root.left, min, root.val)
      && _isValidBST(root.right, root.val, max);
  }
};
