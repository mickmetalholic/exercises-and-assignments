/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  let i = nums.length - 1;
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i--;
  }

  if (i === 0) {
    nums.reverse();
    return;
  }

  // nums[i - 1] should increase
  let j = i - 1;
  // find the smallest one in the latter part which is larger than nums[i - 1]
  while (j + 1 < nums.length && nums[j + 1] > nums[i - 1]) {
    j++;
  }
  [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
  // reverse the latter part
  for (let k = i; k <= Math.floor((i + nums.length - 1) / 2); k++) {
    [nums[k], nums[nums.length - 1 - (k - i)]] = [nums[nums.length - 1 - (k - i)], nums[k]];
  }
}
