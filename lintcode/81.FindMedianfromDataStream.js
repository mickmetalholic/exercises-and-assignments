/**
 * @param nums: A list of integers
 * @return: the median of numbers
 */
function medianII (nums) {
  if (nums.length === 1) return nums;

  const maxHeap = [], minHeap = [], res = [];
  res.push(nums[0]);
  if (nums[0] > nums[1]) {
    minHeap.push(nums[0]);
    maxHeap.push(nums[1]);
  } else {
    maxHeap.push(nums[0]);
    minHeap.push(nums[1]);
  }
  res.push(maxHeap[0]);
  for (let i = 2; i < nums.length; i++) {
    const num = nums[i];
    if (num <= maxHeap[0]) {
      insert(maxHeap, num, true);
    } else {
      insert(minHeap, num, false);
    }
    if (maxHeap.length - minHeap.length > 1) {
      insert(minHeap, pop(maxHeap, true), false);
    } else if (minHeap.length - maxHeap.length > 0) {
      insert(maxHeap, pop(minHeap, false), true);
    }
    res.push(maxHeap[0]);
  }
  return res;

  function insert(heap, n, isMax) {
    const compareFn = (a, b) => isMax ? a > b : a < b;
    heap.push(n);
    let curIndex = heap.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (compareFn(n, heap[parentIndex])) {
        heap[curIndex] = heap[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = n;
  }

  function pop(heap, isMax) {
    const compareFn = (a, b) => isMax ? a > b : a < b;
    const res = heap[0];
    const tmp = heap.pop();
    let curIndex = 0;
    while (curIndex * 2 + 1 < heap.length) {
      const leftIndex = curIndex * 2 + 1;
      const rightIndex = curIndex * 2 + 2;
      let val = heap[leftIndex], index = leftIndex;
      if (rightIndex < heap.length && compareFn(heap[rightIndex], val)) {
        val = heap[rightIndex];
        index = rightIndex;
      }
      if (compareFn(val, tmp)) {
        heap[curIndex] = val;
        curIndex = index;
      } else {
        break;
      }
    }
    heap[curIndex] = tmp;
    return res;
  }
}
