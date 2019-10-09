/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
 */
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
function largestValues(root) {
  if (!root) return [];

  const res = [];
  let curLevel = [root];
  while (curLevel.length) {
    const nextLevel = [];
    let max = curLevel[0].val;
    for (const node of curLevel) {
      max = Math.max(max, node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    res.push(max);
    curLevel = nextLevel;
  }
  return res;
}
