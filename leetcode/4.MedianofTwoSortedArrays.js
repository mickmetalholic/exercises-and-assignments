/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const total = nums1.length + nums2.length;
  const k = Math.floor((total + 1) / 2);

  let low = 0, high = Math.min(k, nums1.length) + 1;
  while (low < high) {
    const k1 = Math.floor((low + high) / 2);
    const k2 = k - k1;

    if (k2 > nums2.length) {
      low = k1 + 1;
    } else {
      const leftMax1 = k1 === 0 ? -Number.MAX_VALUE : nums1[k1 - 1];
      const rightMin1 = k1 >= nums1.length ? Number.MAX_VALUE : nums1[k1];

      const leftMax2 = k2 === 0 ? -Number.MAX_VALUE : nums2[k2 - 1];
      const rightMin2 = k2 >= nums2.length ? Number.MAX_VALUE : nums2[k2];

      if (leftMax1 > rightMin2) {
        high = k1;
      } else if(leftMax2 > rightMin1) {
        low = k1 + 1;
      } else {
        if (total % 2) {
          return Math.max(leftMax1, leftMax2);
        } else {
          return (Math.max(leftMax1, leftMax2) + Math.min(rightMin1, rightMin2)) / 2;
        }
      }
    }
  }
};
