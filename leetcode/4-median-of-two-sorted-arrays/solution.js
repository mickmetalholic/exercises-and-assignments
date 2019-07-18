/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const length = nums1.length + nums2.length;
  if (length === 0) return null;

  const leftCount = Math.floor((length + 1) / 2);

  // the count of numbers from nums1 is range from max(0, leftCount - nums2.length) to min(leftCount, nums1.length)
  let min = Math.max(0, leftCount - nums2.length), max = Math.min(leftCount, nums1.length) + 1;
  while (min < max) {
    const l1 = Math.floor((min + max) / 2), l2 = leftCount - l1;
    if (l1 > 0 && l2 < nums2.length && nums1[l1 - 1] > nums2[l2]) {
      // l1 is too large
      max = l1;
    } else if (l2 > 0 && nums2[l2 - 1] > nums1[l1]) {
      // l2 is too large, so l1 is too small
      min = l1 + 1;
    } else {
      let left, right;
      if (l1 > 0 && l2 > 0) {
        left = Math.max(nums1[l1 - 1], nums2[l2 - 1]);
      } else {
        left = l1 > 0 ? nums1[l1 - 1] : nums2[l2 - 1];
      }
      if (l1 < nums1.length && l2 < nums2.length) {
        right = Math.min(nums1[l1], nums2[l2]);
      } else {
        right = l1 < nums1.length ? nums1[l1] : nums2[l2];
      }
      return length % 2 ? left : (left + right) / 2;
    }
  }
}
