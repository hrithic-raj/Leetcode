/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let flag=true;
    return function(...args){
        if(flag){
            flag=false
            return fn(...args);           
        }
    }
};

// Test case 1
const fn1 = (a, b, c) => (a + b + c);
const onceFn1 = once(fn1);
console.log(onceFn1(1, 2, 3)); // Output: 6
console.log(onceFn1(2, 3, 6)); // Output: undefined

// Test case 2
const fn2 = (a, b, c) => (a * b * c);
const onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4)); // Output: 140
console.log(onceFn2(2, 3, 6)); // Output: undefined
console.log(onceFn2(4, 6, 8)); // Output: undefined