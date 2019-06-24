/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  let i = 1;
  const res = [];
  while (i < path.length) {
    while (i < path.length && path[i] === '/') {
      i++;
    }
    let cur = '';
    while (i < path.length && path[i] !== '/') {
      cur += path[i];
      i++;
    }
    if (cur === '.' || cur === '') {
      // do nothing
    } else if (cur === '..') {
      res.pop();
    } else {
      res.push(cur);
    }
  }

  if (res.length === 0) {
    return '/';
  } else {
    return `/${res.join('/')}`;
  }
}
