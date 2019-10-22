/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  const frequency = {};
  for (const word of words) {
    frequency[word] = frequency[word] || 0;
    frequency[word]++;
  }

  const heap = [];
  for (const word of Object.keys(frequency)) {
    if (heap.length < k || compareFn(word, heap[0])) {
      insert(word);
      if (heap.length > k) {
        pop();
      }
    }
  }

  const res = [];
  while (heap.length > 0) {
    res.unshift(pop());
  }
  return res;

  /**
   * whether word1 is ahead of word2
   * @param {string} word1 word1
   * @param {string} word2 word2
   * @returns {boolean}
   */
  function compareFn(word1, word2) {
    if (frequency[word1] > frequency[word2]) {
      return true;
    } else if (frequency[word1] < frequency[word2]) {
      return false;
    } else {
      return word1 < word2;
    }
  }
  function insert(word) {
    heap.push(word);

    let curIndex = heap.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);
      if (compareFn(heap[parentIndex], word)) {
        heap[curIndex] = heap[parentIndex];
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = word;
  }
  function pop() {
    if (heap.length === 1) return heap.pop();

    const res = heap[0];
    const curWord = heap.pop();
    let curIndex = 0;
    while (curIndex * 2 + 1 < heap.length) {
      let childIndex = curIndex * 2 + 1;
      if (
        childIndex + 1 < heap.length
        && compareFn(heap[childIndex], heap[childIndex + 1])
      ) {
        childIndex++;
      }
      if (compareFn(curWord, heap[childIndex])) {
        heap[curIndex] = heap[childIndex];
        curIndex = childIndex;
      } else {
        break;
      }
    }
    heap[curIndex] = curWord;

    return res;
  }
}
// @lc code=end

