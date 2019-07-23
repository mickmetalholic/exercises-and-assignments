/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
  const n = matrix.length;
  const indices = new Array(n).fill(0);
  // size of n, stores the index of array
  const heap = [];
  for (let i = 0; i < n; i++) {
    insert(i);
  }
  let arrIndex;
  for (let i = 0; i < k; i++) {
    arrIndex = pop();
    indices[arrIndex]++;
    if (indices[arrIndex] < n) {
      insert(arrIndex);
    }
  }
  return matrix[arrIndex][indices[arrIndex] - 1];


  function insert(val) {
    heap.push(val);
    let curIndex = heap.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (compare(val, heap[parentIndex])) {
        heap[curIndex] = heap[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = val;
  }

  function pop() {
    if (heap.length === 1) return heap.pop();
    const res = heap[0];
    const curVal = heap.pop();
    let curIndex = 0;
    while (2 * curIndex + 1 < heap.length) {
      let minIndex = 2 * curIndex + 1;
      if (minIndex + 1 < heap.length && compare(heap[minIndex + 1], heap[minIndex])) {
        minIndex++;
      }
      if (compare(heap[minIndex], curVal)) {
        heap[curIndex] = heap[minIndex];
        curIndex = minIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = curVal;

    return res;
  }

  // check if a should be the parent of b
  function compare(a, b) {
    return matrix[a][indices[a]] < matrix[b][indices[b]];
  }
}
