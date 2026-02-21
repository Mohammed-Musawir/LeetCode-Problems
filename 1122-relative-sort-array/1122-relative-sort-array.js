/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let sortedArray = [];
    let result = [];

    for(let i = 0; i < arr2.length; i++) {
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] === arr1[j]){
                sortedArray.push(arr1[j])
            }
        }
    }

    for(let c = 0; c < arr1.length; c++){
        let find = false
        for(let  d = 0; d < arr2.length; d++){
            if(arr2[d] === arr1[c]){
                find = true;
                continue;
            }
        }
        if(!find){
            result.push(arr1[c])
        }
    }
    let b = result.sort((a,b) => a-b)
    return [...sortedArray, ...b]
};