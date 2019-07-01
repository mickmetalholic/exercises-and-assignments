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
function maxPathSum(root) {
  const { res } = dfs(root);
  return res;

  function dfs(node) {
    if (!node) {
      return { res: null, maxNodeSum: 0 };
    }
    const { res: leftRes, maxNodeSum: maxLeftNodeSum } = dfs(node.left);
    const { res: rightRes, maxNodeSum: maxRightNodeSum } = dfs(node.right);
    const maxNodeSum = Math.max(maxLeftNodeSum + node.val, maxRightNodeSum + node.val, node.val);
    let res = (maxLeftNodeSum > 0 ? maxLeftNodeSum : 0) + (maxRightNodeSum > 0 ? maxRightNodeSum : 0) + node.val;
    if (leftRes !== null) {
      res = Math.max(res, leftRes);
    }
    if (rightRes !== null) {
      res = Math.max(res, rightRes);
    }
    return { res, maxNodeSum };
  }
}
