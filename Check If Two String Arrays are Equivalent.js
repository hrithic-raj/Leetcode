/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1=word1.join('')
    let str2=word2.join('')
    return (str1===str2)
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
