/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
  const map = secret.split('').reduce((res, e, i) => {
    res[e] = res[e] || [];
    res[e].push(i);
    return res;
  }, {});

  let bulls = 0, count = {};
  for (let i = 0; i < guess.length; i++) {
    const c = guess[i];
    if (map.hasOwnProperty(c)) {
      const indices = map[c];
      const index = indices.indexOf(i);
      if (index !== -1) {
        indices.splice(index, 1);
        bulls++;
      } else {
        count[c] = count[c] || 0;
        count[c]++;
      }
    }
  }

  let cows = 0;
  for (const [c, num] of Object.entries(count)) {
    cows += Math.min(map[c].length, num);
  }

  return `${bulls}A${cows}B`;
}
