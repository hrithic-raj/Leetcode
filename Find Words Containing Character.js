/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result=[];
    for(let i=0; i<words.length; i++){
        if(words[i].indexOf(x)>=0){
            result.push(i)
        }
    }
    return result;
};

console.log(findWordsContaining(["leet","code"],"e"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"z"));
