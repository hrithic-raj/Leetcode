/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for( let x in nums){
       if(nums.indexOf(nums[x])===nums.lastIndexOf(nums[x])){
           return nums[x]
       }
    }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([1,4,5,1,2,4,5]));
console.log(singleNumber([1]));