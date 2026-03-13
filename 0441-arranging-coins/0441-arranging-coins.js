/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let a = 0;
    let lastPlace = 0;
    for(let i = 0; i <= 2*n; i++){
        let b = a + i; 
        if(b <= n){
            lastPlace = i
            a += i;
        }else{
            break;
        }
    }
    return lastPlace
};