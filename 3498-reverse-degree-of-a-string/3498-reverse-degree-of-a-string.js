/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let reversedAlpha = alphabets.split('').reverse().join('');
    console.log(reversedAlpha)
    let total = 0;
    for(let i = 0;i < s.length; i++) {
        let reversedIndex = reversedAlpha.indexOf(s[i])+1;
        total += reversedIndex * (i + 1);
    }
    return total;
};