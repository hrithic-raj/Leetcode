/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sen) {
    let len = 0;
    for(let x of sen){
        let words = x.split(' ')
        if(words.length>=len){
            len = words.length
        }
    }
    return len;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));