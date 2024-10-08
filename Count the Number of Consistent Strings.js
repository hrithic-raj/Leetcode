/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    for (let word of words) {
        let isConsistent = true;
        for (let char of word) {
        if (!allowedSet.has(char)) {
            isConsistent = false;
            break;
        }
        }
        if (isConsistent) {
        count++;
        }
  }
  return count;
};

let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words)); // Output: 2

allowed = "abc";
words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
console.log(countConsistentStrings(allowed, words)); // Output: 7

allowed = "cad";
words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
console.log(countConsistentStrings(allowed, words)); // Output: 4