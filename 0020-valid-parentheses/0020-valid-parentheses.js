/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    }

    for(let i of s) {
        if(map[i]){
            if(map[i] !== stack.pop()){
                return false
            }
        } else{
            stack.push(i)
        }
    }
        return stack.length === 0;
};