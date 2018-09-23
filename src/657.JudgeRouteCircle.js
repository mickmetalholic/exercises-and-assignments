/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
  const map = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };
  return moves.split('')
    .reduce((res, e) => {
      res[0] += map[e][0];
      res[1] += map[e][1];
      return res;
    }, [0 ,0])
    .every(e => e === 0);
};