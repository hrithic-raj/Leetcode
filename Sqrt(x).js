/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let y = Math.sqrt(x)
    return Math.trunc(y)
};
console.log(mySqrt(4));
console.log(mySqrt(8));
