/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  const stack = [];
  const str = s.replace(/\s/g, '');
  const nums = str.split(/[\+\-\*\/]/g).map(Number);
  const ops = str.replace(/\d/g, '').split('');
  stack.push(nums[0]);
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case '+':
        stack.push(nums[i + 1]);
        break;
      case '-':
        stack.push(-nums[i + 1]);
        break;
      case '*':
        stack.push(stack.pop() * nums[i + 1]);
        break;
      case '/':
        stack.push(Math.trunc(stack.pop() / nums[i + 1]));
    }
  }
  return stack.reduce((a, b) => a + b);
}
