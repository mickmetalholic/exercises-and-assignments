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
const minDepth = root => {
  if(root === null) { return 0; }
  let curLevel = [], nextLevel = [], depth = 0;
  curLevel.push(root);
  while(curLevel.length) {
    depth++;
    for(let node of curLevel) {
      if(node.left === null && node.right === null) {
        return depth;
      } else {
        if(node.left !== null) { nextLevel.push(node.left); }
        if(node.right !== null) { nextLevel.push(node.right); }
      }
    }
    curLevel = nextLevel;
    nextLevel = [];
  }
  return depth;
};
