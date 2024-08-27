// 2.Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The
// returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// Eg
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// function operations(num){
//         let x=Math.sqrt(num);
//         let y=Math.floor(x);
//         return y;
// }


function operations(num){
    let result=0;
    for(let i=0; i<=num; i++){
        if(i*i<=num){
            result=i;
        }
    }
    return result;
}
console.log(operations(4));
console.log(operations(13));
console.log(operations(15));
console.log(operations(49));