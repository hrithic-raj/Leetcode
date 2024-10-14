/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let result=0;
    for(let i=1; i<=num/2; i++){
        if(num%i===0){
            result+=i;
        }
    }
    return num===result;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
