// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
 
// Example 1:
// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Explanation:
// The word "sweet" appears only in s1, while the word "sour" appears only in s2.
// Example 2:
// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]


function uniqeword(s1,s2){
    let total=[];
    let obj={};
    let arr=[];
    total=s1.split(' ').concat(s2.split(' '))
    for(let x of total){
        obj[x]=(obj[x]||0)+1
    }
    for(let x in obj){
        if(obj[x]==1){
            arr.push(x)
        }
    }
    return arr
}
console.log(uniqeword("apple apple","banana"))
console.log(uniqeword("this apple is sweet","this apple is sour"))