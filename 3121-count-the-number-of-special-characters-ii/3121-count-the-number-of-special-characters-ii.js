/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const lastLower = {};
    const firstUpper = {};

    for(let i=0; i<word.length; i++){
        let ch = word[i];

        if(ch===ch.toLowerCase()){
            lastLower[ch]=i
        }else{
            const lower = ch.toLowerCase();

            if(firstUpper[lower]===undefined){
                firstUpper[lower]=i;
            }
        }
    }

    let count = 0;
    for (let i = 97; i <= 122; i++) {
        const ch = String.fromCharCode(i);

        if(lastLower[ch]!== undefined && 
        firstUpper[ch] !== undefined && 
        lastLower[ch] < firstUpper[ch]
        ){
            count++;
        }
    }
    
    return count;
};