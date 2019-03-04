/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];
  const res = [];
  let curLevel = [root];
  while (curLevel.length) {
    res.push(curLevel.map(node => node.val));
    const nextLevel = [];
    for (const node of curLevel) {
      node.left && nextLevel.push(node.left);
      node.right && nextLevel.push(node.right);
    }
    curLevel = nextLevel;
  }
  return res;
}
