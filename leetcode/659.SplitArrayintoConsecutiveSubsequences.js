/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPossible(nums) {
  const freq = nums.reduce((res, num) => {
    res[num] = res[num] || 0;
    res[num]++;
    return res;
  }, {});

  const tail = {};
  for (const num of nums) {
    if (freq[num] > 0) {
      freq[num]--;
      if (tail[num - 1]) {
        tail[num - 1]--;
        tail[num] = tail[num] || 0;
        tail[num]++;
      } else if (freq[num + 1] && freq[num + 2]) {
        tail[num + 2] = tail[num + 2] || 0;
        tail[num + 2]++;
        freq[num + 1]--;
        freq[num + 2]--;
      } else {
        return false;
      }
    }
  }
  return true;
}
