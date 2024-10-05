/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj={}
    for(let x of s){
        obj[x] = (obj[x]||0)+1
    }

    for(let y of t){
        if(!obj[y] || obj[y]===0){
            return y
        }
        else{
            obj[y]--
        }
    }
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));
