/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let letter = new Set();
    for(let char of sentence.toLowerCase()){
        if(char>='a' && char <='z'){
            letter.add(char);
        }
    }
    return letter.size === 26

};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
