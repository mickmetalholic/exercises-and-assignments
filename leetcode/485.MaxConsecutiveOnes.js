/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  let res = 0, tmp = 0;
  for (const ele of nums) {
    if (ele === 1) {
      tmp++;
    } else {
      res = Math.max(res, tmp);
      tmp = 0;
    }
  }
  return Math.max(res, tmp);
}
