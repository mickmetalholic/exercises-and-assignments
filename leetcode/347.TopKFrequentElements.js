/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const counts = nums.reduce((res, num) => {
    res[num] = res[num] || 0;
    res[num]++;
    return res;
  }, {});

  const res = Object.keys(counts);
  _sort(res, 0, res.length);
  return res.slice(0, k);

  function _sort(arr, l, r) {
    let p = l;
    // find the pivot which is k + 1 th frequent element, so the index should be k
    const pivot = arr[p];
    for (let i = p + 1; i <= r; i++) {
      if (counts[pivot] < counts[arr[i]]) {
        p++;
        [arr[p], arr[i]] = [arr[i], arr[p]];
      }
    }
    [arr[l], arr[p]] = [arr[p], arr[l]];
    if (p < k) {
      _sort(arr, p + 1, r);
    } else if (p > k) {
      _sort(arr, l, p - 1);
    }
  }
}
