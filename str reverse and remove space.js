// 1. Create a function that takes a string, and returns a string of the words in reverse
// order concatenated by a single space. (Score 3)
// Note:- The string may contain leading or trailing spaces or multiple spaces between
// two words. The returned string should only have a single space separating the
// words. Do not include any extra spaces.
// Examples
// reverseString(“Welcome to Bridgeon”) ➞ “Bridgeon to Welcome”
// reverseString(" hello world ") ➞ “world hello”
// reverseString("a good example") ➞ "example good a"

function strReverse(str){
    let arr=[]
    let result=[]
    arr=str.split(' ').reverse()
    for(let x of arr){
     if(x!==''){
        result.push(x);
     }   
    }
    return result.join(' ');
}
console.log(strReverse('Welcome to Bridgeon'));
console.log(strReverse(" hello world "));
console.log(strReverse("a good   example"));