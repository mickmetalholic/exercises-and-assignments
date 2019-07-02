/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  const citationCount = citations.reduce((res, citation) => {
    res[citation] = res[citation] || 0;
    res[citation]++;
    return res;
  }, {});

  const citationCountArr = Object.entries(citationCount).sort(([a], [b]) => b - a);
  for (let i = 1; i < citationCountArr.length; i++) {
    citationCountArr[i][1] += citationCountArr[i - 1][1];
  }

  let res = 0
  for (let i = 0; i < citationCountArr.length; i++) {
    const [citation, count] = citationCountArr[i];
    res = Math.max(res, Math.min(Number(citation), count));
  }
  return res;
}
