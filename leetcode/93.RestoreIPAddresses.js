/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  const res = [];
  dfs(s, []);
  return res.map(indices => {
    return [
      s.slice(0, indices[0] + 1),
      s.slice(indices[0] + 1, indices[1] + 1),
      s.slice(indices[1] + 1, indices[2] + 1),
      s.slice(indices[2] + 1)
    ].join('.');
  });

  function dfs(str, indices) {
    if (indices.length === 3) {
      if (
        str.length > 0
        && (str.length === 1 || str[0] !== '0')
        && Number(str) <= 255
      ) {
        res.push(indices);
      }
      return;
    }

    dfs(str.slice(1), indices.concat(s.length - str.length));
    if (str.slice(0, 1) !== '0') {
      dfs(str.slice(2), indices.concat(s.length - str.length + 1));
      if (Number(str.slice(0, 3)) <= 255) {
        dfs(str.slice(3), indices.concat(s.length - str.length + 2));
      }
    }
  }
}
