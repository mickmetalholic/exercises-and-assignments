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
function rob(root) {
  return _rob(root).max;

  function _rob(root) {
    if (root === null) return { l: 0, r: 0, max: 0 };

    const { l: ll, r: lr, max: l } = root.left ? _rob(root.left) : { l: 0, r: 0, max: 0 };
    const { l: rl, r: rr, max: r } = root.right ? _rob(root.right) : { l: 0, r: 0, max: 0 };

    const max = Math.max(root.val + ll + lr + rl + rr, l + r);
    return { l, r, max };
  }
}
