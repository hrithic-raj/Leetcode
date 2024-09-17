/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let result;
    for(let x of words){
        if(x===x.split('').reverse().join('')){
            return x
        }
    }
    return ""
    
};
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))
console.log(firstPalindrome(["notapalindrome","racecar"]))
console.log(firstPalindrome(["def","ghi"]))