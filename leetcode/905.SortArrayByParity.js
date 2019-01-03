/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = A => A
  .reduce((res, e) => {
    res[e % 2].push(e);
    return res;
  }, [[], []])
  .reduce((res, e) => res.concat(e));
