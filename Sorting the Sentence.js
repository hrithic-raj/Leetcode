/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words=s.split(' ')
    words.sort((a,b)=>{
        const n1 = a[a.length-1]
        const n2 = b[b.length-1]
        return n1-n2;
    })
    const result = words.map(word => word.slice(0, -1));
    return result.join(' ')
};
// Example 1
let s1 = "is2 sentence4 This1 a3";
console.log(sortSentence(s1));  //"This is a sentence"

// Example 2
let s2 = "Myself2 Me1 I4 and3";
console.log(sortSentence(s2));  //"Me Myself and I"