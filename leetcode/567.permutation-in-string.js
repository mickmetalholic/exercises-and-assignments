/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const charMap1 = s1.split('').reduce((res, e) => {
    res[e] = res[e] || 0;
    res[e]++;
    return res;
  }, {});

  const charMap2 = {};
  for (let j = 0; j < s1.length; j++) {
    const ch2 = s2[j];
    charMap2[ch2] = charMap2[ch2] || 0;
    charMap2[ch2]++;
  }

  if (compare(charMap1, charMap2)) return true;

  let start = 1;
  while (start + s1.length <= s2.length) {
    charMap2[s2[start - 1]]--;
    const nextCh = s2[start + s1.length - 1];
    charMap2[nextCh] = charMap2[nextCh] || 0;
    charMap2[nextCh]++;
    if (compare(charMap1, charMap2)) return true;
    start++;
  }
  return false;
}

function compare(map1, map2) {
  for (const [ch, count1] of Object.entries(map1)) {
    if (!map2[ch] || count1 !== map2[ch]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
