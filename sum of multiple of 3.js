// Write a function that takes an array of numbers as input and returns the 
// sum of array elements which are multiples of 3. (Score 2)  
// Examples: getSum([1, 3, 8, 5, 9]) ➞ 12  
// getSum([1, 2, 3, 4, 5]) ➞ 3  
// getSum([27, 15, 7, 1, 4]) ➞ 42 

function sumMulti3(arr){
    let sum = 0;
    for(let x of arr){
        if(x%3===0){
            sum+=x
        }
    }
    return sum;
}

console.log(sumMulti3([1, 3, 8, 5, 9]));
console.log(sumMulti3([1, 2, 3, 4, 5]));
console.log(sumMulti3([27, 15, 7, 1, 4]));
