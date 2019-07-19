/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs(nums1, nums2, k) {
  if (nums1.length === 0 || nums2.length === 0) return [];
  const heap = [], res = [];
  let i = 0, j = 0, m = 0;
  while (m < k && (heap.length || (i < nums1.length && j < nums2.length))) {
    if (i < nums1.length && j < nums2.length) {
      let min, pairs;
      if (nums1[i] <= nums2[j]) {
        min = nums1[i++];
        pairs = nums2.slice(j).map(e => [min, e]);
      } else {
        min = nums2[j++];
        pairs = nums1.slice(i).map(e => [e, min]);
      }
      pairs.forEach(insert);
    }
    res.push(pop());
    m++;
  }
  return res;

  function insert(pair) {
    heap.push(pair);
    let curIndex = heap.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (compare(pair, heap[parentIndex])) {
        heap[curIndex] = heap[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = pair;
  }

  function pop() {
    if (heap.length === 1) return heap.pop();

    const res = heap[0];
    const curPair = heap.pop();
    let curIndex = 0;
    while (curIndex * 2 + 1 < heap.length) {
      let minIndex = curIndex * 2 + 1;
      if (minIndex + 1 < heap.length && compare(heap[minIndex + 1], heap[minIndex])) {
        minIndex++;
      }
      if (compare(heap[minIndex], curPair)) {
        heap[curIndex] = heap[minIndex];
        curIndex = minIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = curPair;

    return res;
  }

  function compare(p1, p2) {
    return p1[0] + p1[1] < p2[0] + p2[1];
  }
}
