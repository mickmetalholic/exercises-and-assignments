/*
 * @lc app=leetcode id=477 lang=javascript
 *
 * [477] Total Hamming Distance
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function totalHammingDistance(nums) {
  const length = nums.length;
  let res = 0;

  let done = false;
  while (!done) {
    done = true;
    let oneCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] & 1) {
        oneCount++;
      }
      nums[i] = (nums[i] >> 1);
      if (done && nums[i] !== 0) {
        done = false;
      }
    }
    res += oneCount * (length - oneCount);
  }
  return res;
}
