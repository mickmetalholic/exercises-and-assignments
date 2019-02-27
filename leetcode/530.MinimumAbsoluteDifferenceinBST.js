/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
  const { minDiff } = _getMinMaxDifference(root);
  return minDiff;

  function _getMinMaxDifference(root) {
    if (!root) return {
      min: -1,
      max: -1,
      minDiff: Infinity,
    };

    const { minDiff: leftMinDiff, max: leftMax, min: leftMin } = _getMinMaxDifference(root.left);
    const { minDiff: rightMinDiff, max: rightMax, min: rightMin } = _getMinMaxDifference(root.right);
    let minDiff = Math.min(leftMinDiff, rightMinDiff);
    if (leftMax >= 0) {
      minDiff = Math.min(minDiff, root.val - leftMax);
    }
    if (rightMin >= 0) {
      minDiff = Math.min(minDiff, rightMin - root.val);
    }
    return {
      max: rightMax >= 0 ? rightMax : root.val,
      min: leftMin >= 0 ? leftMin : root.val,
      minDiff,
    };
  }
}
