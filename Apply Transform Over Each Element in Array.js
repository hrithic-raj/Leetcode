/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    ar=[];    
    for(let i=0; i<arr.length; i++){
        ar.push(fn(arr[i],i))
    }
    return ar;
};


const arr = [1,2,3], fn = function plusone(n) { return n + 1; }
const newArray = map(arr, fn);
console.log(newArray);

arr1 = [1,2,3], fn1 = function plusI(n, i) { return n + i; }
const newArray1 = map(arr1, fn1);
console.log(newArray1);

arr2 = [10,20,30], fn2 = function constant() { return 42; }
const newArray2 = map(arr2, fn2);
console.log(newArray2);