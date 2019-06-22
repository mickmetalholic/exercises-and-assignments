/**
 * @param {number[][]} matrix
 */
class NumMatrix {
  constructor(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      this.sumMatrix = [[0]];
    } else {
      const sumMatrix = Array.from({ length: matrix.length }, (_, i) => matrix[i].slice());

      for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          sumMatrix[i][j] += sumMatrix[i - 1][j];
        }
      }

      for (let j = 1; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
          sumMatrix[i][j] += sumMatrix[i][j - 1];
        }
      }
      
      this.sumMatrix = sumMatrix;
    }
  }

  /** 
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    return this.sumMatrix[row2][col2]
      - (col1 > 0 ? this.sumMatrix[row2][col1 - 1] : 0)
      - (row1 > 0 ? this.sumMatrix[row1 - 1][col2] : 0)
      + ((col1 > 0 && row1 > 0) ? this.sumMatrix[row1 - 1][col1 - 1] : 0);
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(length: )
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
