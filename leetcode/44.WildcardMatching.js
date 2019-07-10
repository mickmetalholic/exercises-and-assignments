/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  if (s.length === 0 && p.length === 0) {
    return true;
  } else if (s.length === 0) {
    return p.split('').every(e => e === '*');
  } else if (p.length === 0) {
    return false;
  }

  const match = Array.from({ length: s.length }, _ => new Array(p.length).fill(false));

  match[0][0] = s[0] === p[0] || p[0] === '?' || p[0] === '*';
  // j === 0
  for (let i = 1; i < s.length; i++) {
    match[i][0] = p[0] === '*';
  }
  // i === 0
  for (let j = 1; j < p.length; j++) {
    match[0][j] = (match[0][j - 1] && p[j] === '*')
      || (p.slice(0, j).split('').every(e => e === '*') && (s[0] === p[j] || p[j] === '?'));
  }

  for (let i = 1; i < s.length; i++) {
    for (let j = 1; j < p.length; j++) {
      if (p[j] === '*') {
        match[i][j] = match[i - 1][j - 1] || match[i][j - 1] || match[i - 1][j];
      } else if (p[j] === '?') {
        match[i][j] = match[i - 1][j - 1];
      } else {
        match[i][j] = match[i - 1][j - 1] && s[i] === p[j];
      }
    }
  }

  return match[s.length - 1][p.length - 1];
}
