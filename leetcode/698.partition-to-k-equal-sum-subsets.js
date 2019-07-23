/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function canPartitionKSubsets(nums, k) {
  if (nums.length === 0) return true;

  const totalSum = nums.reduce((sum, e) => sum + e);
  if (totalSum % k) return false;
  const target = totalSum / k;
  nums.sort((a, b) => a - b);
  const visited = new Array(nums.length).fill(false);
  return dfs(0, 0, 0);

  function dfs(subSetIndex, numIndex, curSum) {
    if (subSetIndex === k) return visited.every(Boolean);

    for (let i = numIndex; i < nums.length; i++) {
      if (!visited[i]) {
        const nextSum = curSum + nums[i];
        if (nextSum > target) return false;
        visited[i] = true;
        if (nextSum === target) {
          if (dfs(subSetIndex + 1, 0, 0)) return true;
        } else {
          if (dfs(subSetIndex, i + 1, nextSum)) return true;
        }
        visited[i] = false;
      }
    }
    return false;
  }
}
