/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let result = []
    for(let i = 0; i < matrix.length; i++){
        let sum = 0;
        for(let j = 0; j < matrix[i].length; j++){
            sum += matrix[i][j];
        }
        result.push(sum)
    }
    return result
};