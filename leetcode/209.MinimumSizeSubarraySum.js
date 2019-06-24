/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(s, nums) {
  let start = 0, sum = 0, res = Infinity;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= s) {
      res = Math.min(res, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return res === Infinity ? 0 : res;
}
