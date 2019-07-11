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
function findFrequentTreeSum(root) {
  const freqs = {};
  postOrder(root);

  let res = [], maxFreq = 0;
  for (const [sum, freq] of Object.entries(freqs)) {
    if (freq > maxFreq) {
      res = [sum];
      maxFreq = freq;
    } else if (freq === maxFreq) {
      res.push(sum);
    }
  }
  return res;

  function postOrder(node) {
    if (!node) return 0;

    const leftSum = postOrder(node.left);
    const rightSum = postOrder(node.right);
    const sum = leftSum + rightSum + node.val;
    freqs[sum] = freqs[sum] || 0;
    freqs[sum]++;
    return sum;
  }
}
