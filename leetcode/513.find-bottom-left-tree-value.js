/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
 * @return {number}
 */
function findBottomLeftValue(root) {
  const { res } = _find(root);
  return res.val;
}

function _find(node) {
  if (node.left && node.right) {
    const { res: leftRes, height: leftHeight } = _find(node.left);
    const { res: rightRes, height: rightHeight } = _find(node.right);
    return {
      res: leftHeight >= rightHeight ? leftRes : rightRes,
      height: Math.max(leftHeight, rightHeight) + 1,
    };
  } else if (node.left) {
    const { res, height } = _find(node.left);
    return { res, height: height + 1 };
  } else if (node.right) {
    const { res, height } = _find(node.right);
    return { res, height: height + 1 };
  } else {
    return { res: node, height: 0 };
  }
}
