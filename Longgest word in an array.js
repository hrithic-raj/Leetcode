// Finds the longest word within the array. (Score 3) 
// Examples: const words = ['apple', 'banana', 'cherry', 'blueberry']; 
// Output: 'blueberry' 


function longestWord(arr){
    let longest='';
    for(let x of arr){
        if(x.length>longest.length){
            longest=x;
        }
    }
    return longest;
}
console.log(longestWord(['apple', 'banana', 'cherry', 'blueberry']));
