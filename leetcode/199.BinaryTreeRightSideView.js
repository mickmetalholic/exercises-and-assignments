/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];

  let curLevel = [root], nextLevel = [], res = [];
  while (curLevel.length) {
    res.push(curLevel[curLevel.length - 1].val);
    for (const node of curLevel) {
      if (node.left) {
        nextLevel.push(node.left);
      }
      if (node.right) {
        nextLevel.push(node.right);
      }
    }
    curLevel = nextLevel;
    nextLevel = [];
  }
  return res;
}
