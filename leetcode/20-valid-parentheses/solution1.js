/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length === 0) return true;

  const map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const stack = [];
  for (const ch of s.length) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      const last = stack.pop();
      if (map[last] !== ch) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
