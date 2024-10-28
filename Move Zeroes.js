/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    for(let x=0; x<nums.length; x++){
        if(nums[x]!==0){
            nums[index] = nums[x];
            index++;
        }
    }
    for(let y=index; y<nums.length; y++){
        nums[y]=0;
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0,0,1]));
