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
const levelOrderBottom = root => {
  if(root === null) {
    return [];
  }
  let curLevel = [];
  let nextLevel = [];
  const result = [];

  curLevel.push(root);

  while(curLevel.length) {
    curLevel.forEach(node => {
      if(node.left !== null) {
        nextLevel.push(node.left);
      }
      if(node.right !== null) {
        nextLevel.push(node.right);
      }
    });
    result.push(curLevel.map(e => e.val));
    curLevel = nextLevel;
    nextLevel = [];
  }
  return result.reverse();
};