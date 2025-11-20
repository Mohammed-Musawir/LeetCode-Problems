/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let sums = []
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i] + '', result = 0;
        for(let val of num){
            result += Number(val)
        }
        sums.push(result)
    }
     let b = sums.sort((a,b) => a - b)
     return b[0]
};