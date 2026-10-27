/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let result = []
    for(let i = 0; i < matrix.length; i++){
        let curr = matrix[i];
        let count = 0;
        for(let j = 0; j < curr.length; j++){
            if(curr[j] === 1){
                count++
            }else{
                continue;
            }
        }
        result.push(count)
    }
    return result
};