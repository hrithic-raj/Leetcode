/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkArray=[];
    for(let i=0; i<arr.length; i+=size){
        const chunk=arr.slice(i,i+size);
        chunkArray.push(chunk);
    }
    return chunkArray;
};

// Example 1:
console.log(chunk([1, 2, 3, 4, 5], 1)); // Output: [[1], [2], [3], [4], [5]]

// Example 2:
console.log(chunk([1, 9, 6, 3, 2], 3)); // Output: [[1, 9, 6], [3, 2]]

// Example 3:
console.log(chunk([8, 5, 3, 2, 6], 6)); // Output: [[8, 5, 3, 2, 6]]

// Example 4:
console.log(chunk([], 1)); // Output: []