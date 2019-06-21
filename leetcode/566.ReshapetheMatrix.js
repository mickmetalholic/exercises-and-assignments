/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let arr = nums.reduce((prev, cur) => {
        return prev.concat(cur);
    }, []);
    
    if(arr.length !== r * c) {
        return nums;
    }
    
    let result = [];
    for(let i = 0; i < r; i++) {
        let row = [];
        for(let j = 0; j < c; j++) {
            row.push(arr.shift());
        }
        result.push(row);
    }
    return result;
}