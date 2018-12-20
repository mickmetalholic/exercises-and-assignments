/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let target = -nums[i];
      // 2 sum
      let p1 = i + 1;
      let p2 = nums.length - 1;
      while (p1 < p2) {
        const sum = nums[p1] + nums[p2];
        if (sum === target) {
          res.push([-target, nums[p1], nums[p2]]);
          p1++;
          while (p1 < p2 && nums[p1 - 1] === nums[p1]) {
            p1++;
          }
          p2--;
          while (p1 < p2 && nums[p2 + 1] === nums[p2]) {
            p2--;
          }
        } else if (sum > target) {
          p2--;
        } else {
          p1++;
        }
      }
    }
  }
  return res;
};
