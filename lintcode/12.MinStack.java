import java.util.Stack;

public class MinStack {

  private Stack<Integer> data;
  private Stack<Integer> minData;

  public MinStack() {
    data = new Stack<>();
    minData = new Stack<>();
  }

  /*
   * @param number: An integer
   * @return: nothing
   */
  public void push(int number) {
    data.push(number);
    if (minData.isEmpty() || number <= minData.peek()) {
      minData.push(number);
    }
  }

  /*
   * @return: An integer
   */
  public int pop() {
    int res = data.pop();
    if (res == minData.peek()) {
      minData.pop();
    }
    return res;
  }

  /*
   * @return: An integer
   */
  public int min() {
    return minData.peek();
  }
}
