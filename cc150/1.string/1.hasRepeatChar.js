function hasRepeatChar(str) {
  return str.split('')
    .sort()
    .some((e, i, arr) => {
      if (i > 0) {
        return e === arr[i - 1];
      }
      return false;
    });
}

console.log(hasRepeatChar('a') === false)
console.log(hasRepeatChar('ab') === false)
console.log(hasRepeatChar('abcdedf') === true)
console.log(hasRepeatChar('aa') === true)
console.log(hasRepeatChar('aba') === true)
console.log(hasRepeatChar('abcb') === true)
console.log(hasRepeatChar('abcbd') === true)
console.log(hasRepeatChar('') === false)


module.exports = hasRepeatChar;
