/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(' ').filter(val=>val!=='').length
};

console.log(countSegments("Hello, my name is John")); //5
console.log(countSegments("Hello")); //1
console.log(countSegments('')); //0