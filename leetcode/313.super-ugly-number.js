/*
 * @lc app=leetcode id=313 lang=javascript
 *
 * [313] Super Ugly Number
 */
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
function nthSuperUglyNumber(n, primes) {
  const heap = [], set = new Set();
  let res = 1;
  for (let i = 0; i < n - 1; i++) {
    primes.forEach(e => {
      const next = res * e;
      if (!set.has(next)) {
        insert(next);
        set.add(next);
      }
    });
    res = pop();
  }
  return res;

  function insert(val) {
    heap.push(val);
    let curIndex = heap.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (heap[parentIndex] > val) {
        heap[curIndex] = heap[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = val;
  }

  function pop() {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();

    const res = heap[0];
    const curValue = heap.pop();
    let curIndex = 0;
    while (curIndex * 2 + 1 < heap.length) {
      let minIndex = curIndex * 2 + 1;
      if (minIndex + 1 < heap.length && heap[minIndex + 1] < heap[minIndex]) {
        minIndex++;
      }
      if (curValue > heap[minIndex]) {
        heap[curIndex] = heap[minIndex];
        curIndex = minIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = curValue;

    return res;
  }
}
