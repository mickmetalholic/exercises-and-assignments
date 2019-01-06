/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
  const stack = [];
  tokens.forEach(token => {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          const res = a / b;
          if (res < 0) {
            stack.push(Math.ceil(res));
          } else {
            stack.push(Math.floor(res));
          }
          break;
      }
    }
  });
  return stack.pop();
};
