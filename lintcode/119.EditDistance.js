/**
 * @param word1: A string
 * @param word2: A string
 * @return: The minimum number of steps.
 */
function minDistance(word1, word2) {
  // distances[i][j] := the edit distance of word1[0, i] and word2[0, j]
  const distances = Array.from({ length: word1.length + 1 }, _ => new Array(word2.length + 1));

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0) {
        // insert j characters
        distances[i][j] = j;
      } else if (j === 0) {
        // delete i characters
        distances[i][j] = i;
      } else {
        distances[i][j] = Math.min(
          // if word1[i - 1] !== word2[j - 1], replace
          distances[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1),
          // delete word1[i] -> word1[0, i - 1] word2[0, j]
          distances[i - 1][j] + 1,
          // insert word2[j] after word1[0, i] -> word1[0, i]word[j] word2[0, j] which the edit distance is the same with word1[0, i] word2[0, j - 1]
          distances[i][j - 1] + 1
        );
      }
    }
  }

  return distances[word1.length][word2.length];
}
