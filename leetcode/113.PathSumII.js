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
 * @return {number[][]}
 */
function pathSum(root, sum) {
  if (!root) return [];

  const res = [];
  dfs(root, [], 0);
  return res;

  function dfs(node, seq, prevSum) {
    if (!node.left && !node.right) {
      if (prevSum + node.val === sum) {
        res.push(seq.concat(node.val));
      }
      return;
    }

    const curSum = prevSum + node.val;
    if (node.left) {
      dfs(node.left, seq.concat(node.val), curSum);
    }
    if (node.right) {
      dfs(node.right, seq.concat(node.val), curSum);
    }
  }
}
