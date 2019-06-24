/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
  if(t === null) {
    return true;
  } else if(s === null && t !== null) {
    return false;
  }
  return isIdentical(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isIdentical = (t1, t2) => {
  if(t1 === null && t2 === null) {
    return true;
  } else if(t1 === null || t2 === null) {
    return false;
  }
  if(t1.val === t2.val) {
    return isIdentical(t1.left, t2.left) && isIdentical(t1.right, t2.right);
  } else {
    return false;
  }
}