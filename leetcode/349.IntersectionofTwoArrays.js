const intersection = (nums1, nums2) => {
    return nums1.filter(e => nums2.includes(e))
      .sort()
      .filter((e, i, arr) => i == 0 || e != arr[i - 1]);
};