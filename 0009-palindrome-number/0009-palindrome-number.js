/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString().split('').reverse().join('');
    return num === x.toString();
};