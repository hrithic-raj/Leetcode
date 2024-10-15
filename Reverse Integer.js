/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg=x<0;
    let rev=0;
    x = Math.abs(x);
    while(x>0){
        rev = rev*10 + x%10
        x=Math.floor(x/10)
    }
    if(rev>Math.pow(2,31)-1){
        return 0;
    }
    return neg ? -rev : rev
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
