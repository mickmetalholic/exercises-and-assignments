function stackSort(stack) {
  const _s = [];
  while (stack.length) {
    const top = stack.pop();
    if (_s.length === 0 || _s[_s.length - 1] >= top) {
      _s.push(top);
    } else {
      while (_s.length && _s[_s.length - 1] < top) {
        stack.push(_s.pop());
      }
      _s.push(top);
    }
  }
  while (_s.length) {
    stack.push(_s.pop());
  }
}

const stack = [1, 8, 4, 2, 7, 6, 0, 9, 5, 3];
stackSort(stack);
console.log(stack);

