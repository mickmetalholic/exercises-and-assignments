/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    for (const ch of s) {
      if (
        ch === '{'
        || ch === '['
        || ch === '('
      ) {
        stack.push(ch);
      } else {
        const lastCh = stack.pop();
        if (
          (ch === '}' && lastCh !== '{')
          || (ch === ']' && lastCh !== '[')
          || (ch === ')' && lastCh !== '(')
        ) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  