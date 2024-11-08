// Create a function that takes an array of non-negative integers and strings 
// and return a new array without the strings. 
// Examples :filterArray([1, 2, "a", "b"]) ➞ [1, 2]  
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15] 
// filterArray([1, 2, "aasf", "1", "123", 12]) ➞ [1, 2, 12] 


function removeStr(arr){
    let result=[]
    for(let x of arr){
        if(typeof(x) !== 'string'){
            result.push(x);
        }
    }
    return result;
}
console.log(removeStr([1, 2, "a", "b"]));
console.log(removeStr([1, "a", "b", 0, 15]));
console.log(removeStr([1, 2, "aasf", "1", "123", 12]));
