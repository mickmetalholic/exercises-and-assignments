/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      const num1 = nums[i];
      let j = i + 1, k = nums.length - 1;
      while (j < k) {
        if (nums[j] + nums[k] < -num1) {
          j++;
        } else if (nums[j] + nums[k] > -num1) {
          k--;
        } else {
          res.push([num1, nums[j], nums[k]]);
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          j++;
          while (j < k && nums[k - 1] === nums[k]) {
            k--;
          }
          k--;
        }
      }
    }
  }
  return res;
}
