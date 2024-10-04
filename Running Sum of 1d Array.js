/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result =[];
    let sum=0;
    for(let i=0; i<nums.length; i++){
        sum=nums.slice(0,i+1).reduce((val,tot)=>val+tot)
        result.push(sum)
    }
    return result;
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))