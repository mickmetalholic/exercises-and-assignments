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
function sumNumbers(root) {
  if (!root) return 0;

  let sum = 0;
  dfs(root, '');
  return sum;

  function dfs(node, seq) {
    if (!node.left && !node.right) {
      sum += Number(`${seq}${node.val}`);
      return;
    }

    if (node.left) {
      dfs(node.left, `${seq}${node.val}`);
    }
    if (node.right) {
      dfs(node.right, `${seq}${node.val}`);
    }
  }
}
