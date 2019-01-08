/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = n => {
  if (n === 0) return [];
  return generate(1, n);

  function generate(a, b) {
    if (a > b) return [null];
    if (a === b) return [new TreeNode(a)];

    const res = [];
    for (let i = a; i <= b; i++) {
      const leftTrees = generate(a, i - 1);
      const rightTrees = generate(i + 1, b);
      for (let j = 0; j < leftTrees.length; j++) {
        for (let k = 0; k < rightTrees.length; k++) {
          const root = new TreeNode(i);
          root.left = leftTrees[j];
          root.right = rightTrees[k];
          res.push(root);
        }
      }
    }

    return res;
  }
};
