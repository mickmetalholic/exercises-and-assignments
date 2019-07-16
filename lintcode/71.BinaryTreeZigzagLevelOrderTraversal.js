/**
 * @param root: A Tree
 * @return: A list of lists of integer include the zigzag level order traversal of its nodes' values.
 */
function zigzagLevelOrder(root) {
  if (!root) return [];

  let cur = [root], dir = 0;
  const res = [[root.val]];
  while (cur.length) {
    const next = [], curRes = [];
    for (const node of cur) {
      if (node.left) {
        next.push(node.left);
        if (dir === 0) {
          curRes.unshift(node.left.val);
        } else {
          curRes.push(node.left.val);
        }
      }
      if (node.right) {
        next.push(node.right);
        if (dir === 0) {
          curRes.unshift(node.right.val);
        } else {
          curRes.push(node.right.val);
        }
      }
    }
    cur = next;
    if (curRes.length > 0) {
      res.push(curRes);
    }
    dir = dir ? 0 : 1;
  }
  return res;
}
