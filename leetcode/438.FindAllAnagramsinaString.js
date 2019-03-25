/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const map = p.split('')
    .reduce((res, e) => {
      res[e] = res[e] || 0;
      res[e]++;
      return res;
    }, {});

  const res = [];
  // count := the total count of characters in the map
  let count = p.length;
  // left := start index
  // right := the next position of the end of substring
  let left = 0, right = 1;
  while (right <= s.length) {
    // right ->
    map[s[right - 1]] = map[s[right - 1]] || 0;
    map[s[right - 1]]--;
    if (map[s[right - 1]] >= 0) {
      // current character is in the map
      count--;
    }
    if (count === 0) {
      res.push(left);
    }
    // left ->
    if (right - left === p.length) {
      map[s[left]] = map[s[left]] || 0;
      map[s[left]]++;
      if (map[s[left]] > 0) {
        // if map[s[left]] <= 0, it's not count for the total characters
        count++;
      }
      left++;
    }
    right++;
  }
  return res;
}

