/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      // 3 sum
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          // 2 sum
          const sum = nums[i] + nums[j];
          let p1 = j + 1, p2 = nums.length - 1;
          while (p1 < p2) {
            if (sum + nums[p1] + nums[p2] < target) {
              p1++
              while (p1 < p2 && nums[p1 - 1] === nums[p1]) {
                p1++;
              }
            } else if (sum + nums[p1] + nums[p2] > target) {
              p2--;
              while (p1 < p2 && nums[p2 + 1] === nums[p2]) {
                p2--;
              }
            } else {
              res.push([nums[i], nums[j], nums[p1], nums[p2]]);
              p1++;
              while (p1 < p2 && nums[p1 - 1] === nums[p1]) {
                p1++;
              }
              p2--;
              while (p1 < p2 && nums[p2 + 1] === nums[p2]) {
                p2--;
              }
            }
          }
        }
      }
    }
  }

  return res;
}
