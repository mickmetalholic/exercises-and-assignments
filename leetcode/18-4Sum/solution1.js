/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < nums.length - 3; i++) {
    const num1 = nums[i];
    if (i === 0 || nums[i - 1] !== num1) {
      for (let j = i + 1; j < nums.length - 2; j++) {
        const num2 = nums[j];
        if (j === i + 1 || nums[j - 1] !== num2) {
          const curTarget = target - (num1 + num2);
          let k1 = j + 1, k2 = nums.length - 1;
          while (k1 < k2) {
            if (nums[k1] + nums[k2] < curTarget) {
              k1++;
            } else if (nums[k1] + nums[k2] > curTarget) {
              k2--;
            } else {
              res.push([num1, num2, nums[k1], nums[k2]]);
              while (k1 < k2 && nums[k1] === nums[k1 + 1]) {
                k1++;
              }
              k1++;
              while (k1 < k2 && nums[k2 - 1] === nums[k2]) {
                k2--;
              }
              k2--;
            }
          }
        }
      }
    }
  }

  return res;
}
