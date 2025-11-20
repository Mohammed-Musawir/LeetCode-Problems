/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let freq = {}
    for(let key of sentence){
        freq[key] = (freq[key] || 0) + 1;
    }
    let count = 0;
    for(let key in freq){
        if(freq[key] >= 1){
            count++
        }
    }

    return count >= 26
};