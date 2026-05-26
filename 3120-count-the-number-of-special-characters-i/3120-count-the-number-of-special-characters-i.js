/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let result = new Set()
    for(let x of word){
        if(x===x.toUpperCase()){
            if(word.includes(x.toLowerCase())){
                result.add(x.toLowerCase())
            }
        }
        else{
            if(word.includes(x.toUpperCase())){
                result.add(x.toLowerCase())
            }
        }
    }
    return result.size
};