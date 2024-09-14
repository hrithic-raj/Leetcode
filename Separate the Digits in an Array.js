/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result=[];
    for(let x of nums){
        result.push(...x.toString().split('').map(Number))
    }
    return result
};

// Example 1
let nums1 = [13, 25, 83, 77];
console.log(separateDigits(nums1));  // [1, 3, 2, 5, 8, 3, 7, 7]

// Example 2
let nums2 = [7, 1, 3, 9];
console.log(separateDigits(nums2));  // [7, 1, 3, 9]