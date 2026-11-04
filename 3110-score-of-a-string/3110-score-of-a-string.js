/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0;
    for(let i = 0; i < s.length - 1; i++) {
        let b = (s.charCodeAt(i) - s.charCodeAt(i+1));
        if (b < 0)
            sum += (b * -1)
        else
            sum +=b
    }
    return sum
};