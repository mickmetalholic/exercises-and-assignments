/**
 * @param {number} n
 * @return {number}
 */
const numTrees = n => {
  const nums = [1, 1];

  for (let i = 2; i <= n; i++) {
    let res = 0;
    for (let j = 1; j <= i; j++) {
      res += nums[j - 1] * nums[i - j];
    }
    nums[i] = res;
  }

  return nums[n];
};
