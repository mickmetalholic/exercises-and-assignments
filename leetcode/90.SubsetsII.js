/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  const numsCount = nums.reduce((res, num) => {
    if (!res[num]) {
      res[num] = 0;
    }
    res[num]++;
    return res;
  }, {});

  const res = [];
  const uniqNums = Object.keys(numsCount).map(Number);
  const stack = [];
  _search(0);
  return res;

  function _search(i) {
    if (i === uniqNums.length) {
      res.push(stack.slice());
      return;
    }

    _search(i + 1);

    for (let j = 0; j < numsCount[uniqNums[i]]; j++) {
      stack.push(uniqNums[i]);
      _search(i + 1);
    }

    for (let j = 0; j < numsCount[uniqNums[i]]; j++) {
      stack.pop();
    }
  }
}
