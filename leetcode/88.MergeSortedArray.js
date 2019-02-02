/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  const res = [];
  let p1 = 0, p2 = 0;
  while (p1 < m && p2 < n) {
    if (nums1[p1] > nums2[p2]) {
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
      m++;
      nums1.pop();
    }
    p1++;
  }
  if (p1 === m && p2 < n) {
    nums1.splice(p1, 0, ...nums2.slice(p2));
    while (p2 < n) {
      nums1.pop();
      p2++;
    }
  }
};
