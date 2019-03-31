/**
 * @param {string} S
 * @return {string[]}
 */
function letterCasePermutation(S) {
  const arr = [];
  for (let i = 0; i < S.length; i++) {
    if (/\d/.test(S[i])) {
      arr[i] = -1;
    } else {
      arr[i] = 0;
    }
  }

  const res = [];
  let next = arr, nextStr;
  while (next) {
    nextStr = next.map((e, i) => {
      if (e === 0) {
        return S[i].toLowerCase();
      } else if (e === 1) {
        return S[i].toUpperCase();
      } else {
        return S[i];
      }
    }).join('');
    res.push(nextStr);
    next = _next(next);
  }

  return res;

  function _next(arr) {
    let carry = 0, i = arr.length - 1;
    while (i >= 0 && arr[i] === -1) {
      i--;
    }
    if (i < 0) return null;

    arr[i]++;
    if (arr[i] === 2) {
      arr[i] = 0;
      carry = 1;
    }
    i--;
    while (carry === 1 && i >= 0) {
      if(arr[i] !== -1) {
        arr[i] += 1;
        if (arr[i] === 2) {
          arr[i] = 0;
        } else {
          carry = 0;
        }
      }
      i--;
    }
    return carry === 1 ? null : arr;
  }
}
