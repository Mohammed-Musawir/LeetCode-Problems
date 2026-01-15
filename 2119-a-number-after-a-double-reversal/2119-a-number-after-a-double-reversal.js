/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let r = `${num}`;
    let bla='';
    if(num === 0) return true;
    for(let i = r.length - 1; i >= 0; i--) {
        if(r[i] === '0'){
            continue;
        }else{
            for(let j = i; j >= 0; j--){
                bla += r[j]
            }
            break;
        }
    }
    return bla.length === r.length
};