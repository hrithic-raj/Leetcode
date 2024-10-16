// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function findPrefix(arr){
    let result=[];
    // for(let i=0; i<arr.length; i++){
        // for(let j of arr[i+1]){
        //     if(arr[i].match(arr[i+1][j])){
        //         result.push(j)
        //         console.log(arr[i+1]);
        //     }else{
        //         return ''
        //     }
        // }
        
        // let word=arr[i].split('')
        // for(let x of word){
        //     // console.log(x);
        //     if(arr[i].match(x)){
        //         console.log(x);
        //     }
        // }

        

    // }

    // arr.forEach((value,index)=>{
    //     let word=arr[index+1]
    //     if(value.match(word)){
    //         console.log(value);
    //     }
    // })

    for(let i=0; i<arr.length; i++){
        for(let x in arr[i]){
            for(let y in arr[i+1]){
                if(arr[i+1][y].match(arr[i][x])){
                    // console.log(arr[i][x])
                    result.push(arr[i][x])
                }    
            }
        }

    }

    return result.join('')
}

console.log(findPrefix(["flower","flow","flight"]));
console.log(findPrefix(["dog","racecar","car"]));