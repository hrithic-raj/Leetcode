/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    return word.slice(0,word.indexOf(ch)+1).split('').reverse().join('')+word.slice(word.indexOf(ch)+1)
 };

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z"));
console.log(reversePrefix("argaz", "z"));
