// . Write a function that takes an array of numbers as input and returns the sum of array
// elements which are multiples of 3. (Score 2)
// Examples
// getSum([1, 3, 8, 5, 9]) ➞ 12
// getSum([1, 2, 3, 4, 5]) ➞ 3
// getSum([27, 15, 7, 1, 4]) ➞ 42

function sumOfMultiple3(arr){
    let result=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%3===0){
            result+=arr[i]
        }
    }
    return result;
}

console.log(sumOfMultiple3([1, 3, 8, 5, 9]));
console.log(sumOfMultiple3([1, 2, 3, 4, 5]));
console.log(sumOfMultiple3([27, 15, 7, 1, 4]));
