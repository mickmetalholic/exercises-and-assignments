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
function recoverTree(root) {
  let prev, p1, p2;
  dfs(root);
  [p1.val, p2.val] = [p2.val, p1.val];

  function dfs(node) {
    node.left && dfs(node.left);
    if (prev && !p1 && prev.val > node.val) {
      p1 = prev;
    }
    if (prev && prev.val > node.val) {
      p2 = node;
    }
    prev = node;
    node.right && dfs(node.right);
  }
}
