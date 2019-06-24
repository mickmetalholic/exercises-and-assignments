/**
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
  const res = new Set();
  const set = new Set();
  for (let i = 0; i + 9 < s.length; i++) {
    const seq = s.slice(i, i + 10);
    if (set.has(seq)) {
      res.add(seq);
    } else {
      set.add(seq);
    }
  }
  return [...res];
}
