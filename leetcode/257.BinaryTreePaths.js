/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = root => {
  if(root === null) {
    return [];
  }

  const res = [];

  const getPath = (node, path) => {
    if(node.left === null & node.right === null) {
      res.push(path);
      return;
    }
    if(node.left !== null) {
      getPath(node.left, `${path}->${node.left.val}`);
    }
    if(node.right !== null) {
      getPath(node.right, `${path}->${node.right.val}`);
    }
  }
  getPath(root, `${root.val}`);
  return res;
};