/**
 * @param {number[]} answers
 * @return {number}
 */
function numRabbits(answers) {
  const count = answers.reduce((res, c) => {
    res[c] = res[c] || 0;
    res[c]++;
    return res;
  }, {});

  let res = 0;
  for (const [k, v] of Object.entries(count)) {
    res += Math.ceil(v / (Number(k) + 1)) * (Number(k) + 1);
  }
  return res;
}
