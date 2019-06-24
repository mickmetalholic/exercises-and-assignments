/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  if (s.length === 0 || words.length === 0) return [];

  const map = words.reduce((res, word) => {
    res[word] = res[word] || 0;
    res[word]++;
    return res;
  }, {});

  const wordLength = words[0].length;
  const totalLength = wordLength * words.length;

  const res = [];
  for (let i = 0; i < s.length - totalLength + 1; i++) {
    const substring = s.slice(i, i + totalLength);
    const wordCount = {};
    let j = 0;
    for (; j < words.length; j++) {
      const word = substring.slice(j * wordLength, j * wordLength + wordLength);
      if (
        map[word]
        && (!wordCount[word] || wordCount[word] < map[word])
      ) {
        wordCount[word] = wordCount[word] || 0;
        wordCount[word]++;
      } else {
        break;
      }
    }
    if (j === words.length) {
      res.push(i);
    }
  }

  return res;
}
