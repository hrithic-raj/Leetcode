/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let result=x;
        for(let i=functions.length-1; i>=0; i--){
            result=functions[i](result);
        }
        return result;
    }
};


const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const composed1 = compose(functions1);
console.log(composed1(4)); // Output: 65

const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composed2 = compose(functions2);
console.log(composed2(1)); // Output: 1000

const functions3 = [];
const composed3 = compose(functions3);
console.log(composed3(42)); // Output: 42