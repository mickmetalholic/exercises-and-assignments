/**
 * @param {number[]} nums
 * @return {number}
 */
function deleteAndEarn(nums) {
  if (nums.length === 0) return 0;

  const max = Math.max(...nums);
  const newNums = new Array(max + 1).fill(0);
  for (let num of nums) {
    newNums[num] += num;
  }

  if (newNums.length === 1) return newNums[0];
  if (newNums.length === 2) return Math.max(...newNums);
  if (newNums.length === 3) return Math.max(newNums[0] + newNums[2], newNums[1]);

  const dp = [];
  dp[0] = newNums[0];
  dp[1] = newNums[1];
  dp[2] = newNums[0] + newNums[2];
  for (let i = 3; i < newNums.length; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + newNums[i];
  }

  return Math.max(dp[newNums.length - 2], dp[newNums.length - 1]);
}
