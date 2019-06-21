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
const findMode = root => {
  if(root === null) { return []; }
  return inOrder(root, {
    curVal: root.val,
    curCount: 0,
    maxCount: 0,
    res: []
  }).res.filter((e, i, arr) => e !== arr[i - 1]);
};


function inOrder(node, info) {
  if(node === null) { return info; }

  const newInfo = inOrder(node.left, info);
  if(node.val !== newInfo.curVal) {
    newInfo.curVal = node.val;
    newInfo.curCount = 0;
  }
  newInfo.curCount++;
  if(newInfo.curCount > newInfo.maxCount) {
    newInfo.maxCount = newInfo.curCount;
    newInfo.res = [newInfo.curVal];
  } else if(newInfo.curCount === newInfo.maxCount) {
    newInfo.res.push(newInfo.curVal);
  }
  return inOrder(node.right, newInfo);
}
