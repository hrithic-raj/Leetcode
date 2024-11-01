/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [...words[0]]
    for(let i=1; i<words.length; i++){
        let currentWord = [...words[i]]
        result = result.filter(char=>{
            let index = currentWord.indexOf(char)
            if(index !== -1){
                currentWord.splice(index,1);
                return true
            }
            return false
        })        
    }
    return result;
};

console.log(commonChars(["bella","label","roller"])); // Output: ["e","l","l"]
console.log(commonChars(["cool","lock","cook"]));     // Output: ["c","o"]