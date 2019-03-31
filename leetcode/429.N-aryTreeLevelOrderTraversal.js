/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];

  let curLevel = [];
  curLevel[0] = root;
  const res = [];

  while (curLevel.length) {
    const curRes = [], nextLevel = [];
    for (let i = 0; i < curLevel.length; i++) {
      const node = curLevel[i];
      curRes.push(node.val);
      nextLevel.push(...node.children);
    }
    curLevel = nextLevel;
    res.push(curRes);
  }
  return res;
}
