/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  let res = '';

  let level = 0, tmp = '', k = '';
  for (let c of s) {
    switch (c) {
      case '[':
        level++;
        if (level > 1) {
          tmp += '[';
        }
        break;
      case ']':
        level--;
        if (level === 0) {
          res += decodeString(tmp).repeat(k === '' ? 1 : Number(k));
          k = '';
        } else {
          tmp += ']';
        }
        break;
      default:
        if (level === 0) {
          if (/\d/.test(c)) {
            k += c;
            tmp = '';
          } else {
            res += c;
          }
        } else {
          tmp += c;
        }
    }
  }

  return res;
}
