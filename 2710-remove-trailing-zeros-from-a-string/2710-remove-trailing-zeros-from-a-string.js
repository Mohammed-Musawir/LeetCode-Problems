/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let str = num.split('').reverse();
    let result = ''
        let flag = false;
    for(let i = 0; i < str.length ; i++) {
        if(str[i] !== '0'){
            flag = true
             result += str[i]
           
        }else if(flag){
            result += str[i];
        }
    }

    return result.split('').reverse().join('')
    
};