/**
 * @param root: the root of binary tree
 * @return: the length of the longest consecutive sequence path
 */
function longestConsecutive2(root) {
  let max = 0;
  getLen(root);
  return max;

  function getLen(node) {
    if (!node) return { inc: 0, des: 0 };

    const { inc: leftInc, des: leftDes } = getLen(node.left);
    const { inc: rightInc, des: rightDes } = getLen(node.right);

    let inc = 1, des = 1;
    if (node.left) {
      if (node.val - node.left.val === 1) {
        inc = Math.max(inc, leftInc + 1);
      } else if (node.val - node.left.val === -1) {
        des = Math.max(des, leftDes + 1);
      }
    }
    if (node.right) {
      if (node.val - node.right.val === 1) {
        inc = Math.max(inc, rightInc + 1);
      } else if (node.val - node.right.val === -1) {
        des = Math.max(des, rightDes + 1);
      }
    }
    max = Math.max(max, inc + des - 1);

    return { inc, des };
  }
}
