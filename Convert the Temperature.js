/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let x = celsius * 1.80;
    return [celsius+273.15,x+32.00]
};

console.log(convertTemperature(36.50));
console.log(convertTemperature(122.11));
