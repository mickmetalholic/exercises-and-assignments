/**
 * @param {number} N
 * @return {number}
 */
function monotoneIncreasingDigits(N) {
  const nums = N.toString().split('');
  let end;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      nums[i]--;
      end = end || nums.length;
      for (let j = i + 1; j < end; j++) {
        nums[j] = 9;
      }
      end = i + 1;
    }
  }
  return Number(nums.join(''));
}
