/**
 * @param n: An integer
 * @return: return a  integer as description.
 */
function nthUglyNumber (n) {
  const heap = [], set = new Set();
  const factors = [2, 3, 5];
  insert(1);
  set.add(1);
  let min;
  for (let i = 1; i <= n; i++) {
    min = pop();
    for (const factor of factors) {
      const cur = factor * min;
      if (!set.has(cur)) {
        insert(cur);
        set.add(cur);
      }
    }
  }
  return min;

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
    if (heap.length === 1) return heap.pop();

    const res = heap[0];

    heap[0] = heap.pop();
    let curIndex = 0, curVal = heap[0];
    while (curIndex * 2 + 1 < heap.length) {
      let minIndex = curIndex * 2 + 1;
      if (minIndex + 1 < heap.length && heap[minIndex] > heap[minIndex + 1]) {
        minIndex++;
      }
      if (heap[minIndex] < curVal) {
        heap[curIndex] = heap[minIndex];
        curIndex = minIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = curVal;

    return res;
  }
}
