/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function PredictTheWinner(nums) {
  if (nums.length === 1) return true;
  return search(nums, 0, 0);

  function search(nums, score1, score2) {
    if (nums.length === 2) {
      const max = Math.max(...nums), min = Math.min(...nums);
      return score1 + max >= score2 + min;
    }

    if (
      !search(nums.slice(1), score2, score1 + nums[0])
      || !search(nums.slice(0, -1), score2, score1 + nums[nums.length - 1])
    ) {
      return true;
    }
    return false;
  }
}
