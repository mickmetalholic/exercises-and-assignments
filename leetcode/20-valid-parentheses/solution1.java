class Solution {

  private HashMap<Character, Character> map;

  public Solution() {
    this.map = new HashMap();
    this.map.put('(', ')');
    this.map.put('[', ']');
    this.map.put('{', '}');
  }

  public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (int i = 0; i < s.length(); i++) {
      Character ch = s.charAt(i);
      if (ch == '(' || ch == '[' || ch == '{') {
        stack.push(ch);
      } else if (stack.isEmpty() || ch != map.get(stack.pop())) {
        return false;
      }
    }
    return stack.isEmpty();
  }
}
