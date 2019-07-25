/**
 * @param root: The root of binary tree
 * @return: An integer
 */
function minDepth(root) {
  if (!root) return 0;

  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {
    return 1 + minDepth(root.left);
  } else if (root.right) {
    return 1 + minDepth(root.right);
  } else {
    return 1;
  }  
}
