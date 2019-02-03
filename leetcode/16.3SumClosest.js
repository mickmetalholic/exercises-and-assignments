/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  let res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let p1 = i + 1, p2 = nums.length - 1;
      while (p1 < p2) {
        const sum = nums[i] + nums[p1] + nums[p2];
        if (
          res === undefined
          || Math.abs(sum - target) < Math.abs(res - target)
        ) {
          res = sum;
        }
        if (sum < target) {
          p1++;
          while (p1 < p2 && nums[p1 - 1] === nums[p1]) {
            p1++;
          }
        } else if (sum > target) {
          p2--;
          while (p1 < p2 && nums[p2] === nums[p2 + 1]) {
            p2--;
          }
        } else {
          return sum;
        }
      }
    }
  }

  return res;
};
