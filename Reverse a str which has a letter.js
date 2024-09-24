// 3. Write a function that reverses all the words in a sentence that start with a particular
// letter.(score 2)

// Examples :
// specialReverse("word searches are super fun", "s") ➞ "word sehcraes are repus fun"
// specialReverse("first man to walk on the moon", "m") ➞ "first nam to walk on the noom"
// specialReverse("peter piper picked pickled peppers", "p") ➞ "retep repip dekcip delkcip sreppep"


function specialReverse(str,ltr){
    result=str.split(' ')
    let final=[]
    for(let i=0; i<result.length; i++){
        // console.log(result[i])
        if(result[i][0]===ltr){
            // console.log(result[i])
            final.push(result[i].split('').reverse().join(''))
        }
        else{
            final.push(result[i])
        }
    }
    return final.join(' ')
}
console.log(specialReverse("word searches are super fun", "s"))
console.log(specialReverse("first man to walk on the moon", "m"))