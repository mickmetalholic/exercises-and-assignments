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
const zigzagLevelOrder = root => {
  if (!root) return [];
  let curLevel = [root];
  const res = [];
  let level = 0;
  while (curLevel.length) {
    const nextLevel = [];
    while (curLevel.length) {
      const node = curLevel.pop();
      if (!res[level]) {
        res[level] = [];
      }
      res[level].push(node.val);
      if (level % 2) {
        node.right && nextLevel.push(node.right);
        node.left && nextLevel.push(node.left);
      } else {
        node.left && nextLevel.push(node.left);
        node.right && nextLevel.push(node.right);
      }
    }
    level++;
    curLevel = nextLevel;
  }
  return res;
};