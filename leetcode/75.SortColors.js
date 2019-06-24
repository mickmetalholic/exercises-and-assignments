/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let redNum = 0, blueNum = 0;
  let cur = 0;
  while (cur < nums.length - blueNum) {
    if (nums[cur] === 0) {
      _swap(cur, redNum);
      redNum++;
      cur++;
    } else if (nums[cur] === 2) {
      _swap(cur, nums.length - 1 - blueNum);
      blueNum++
    } else {
      cur++;
    }
  }

  function _swap(i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
}
