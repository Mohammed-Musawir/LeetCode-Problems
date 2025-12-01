/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let arr = [];
    let b = nums.sort((a,b) => a-b);
    for(let i = 0; i < b.length; i++){
        if(b[i] === target) {
            arr.push(i)
        }
    }
    return arr
};