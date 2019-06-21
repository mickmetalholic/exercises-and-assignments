/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
  if (!root) return false;
  return _sum(root, 0);

  function _sum(node, pathSum) {
    const curSum = node.val + pathSum;

    if (!node.left && !node.right) {
      return sum === curSum;
    } else if (!node.left && node.right) {
      return _sum(node.right, curSum);
    } else if (node.left && !node.right) {
      return _sum(node.left, curSum);
    } else {
      return _sum(node.left, curSum) || _sum(node.right, curSum);
    }
  }
}
