/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    // minimum citation of the left papers
    const citation = citations[i];
    // count of left papers
    const leftPaperCount = citations.length - i;
    if (citation >= leftPaperCount) {
      return leftPaperCount;
    }
  }

  return 0;
}
