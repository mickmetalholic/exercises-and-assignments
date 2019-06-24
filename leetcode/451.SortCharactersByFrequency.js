/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  const charToFreq = {};
  for (const ch of s) {
    charToFreq[ch] = charToFreq[ch] || 0;
    charToFreq[ch]++;
  }
  const freqToChar = {};
  let max = 0;
  for (const [key, val] of Object.entries(charToFreq)) {
    freqToChar[val] = freqToChar[val] || [];
    freqToChar[val].push(key);
    max = Math.max(max, Number(val));
  }

  let res = '';
  for (let i = max; i >= 1; i--) {
    if (freqToChar.hasOwnProperty(i)) {
      const chars = freqToChar[i];
      for (const ch of chars) {
        res += ch.repeat(i);
      }
    }
  }
  return res;
}
