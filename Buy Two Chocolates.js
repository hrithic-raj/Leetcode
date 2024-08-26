/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    let sum=prices[0]+prices[1];
    if(sum<=money){
        return money-sum;
    }
    return money;
};

// Example 1
const prices1 = [1, 2, 2];
const money1 = 3;
console.log(buyChocolates(prices1, money1)); // Output: 0

// Example 2
const prices2 = [3, 2, 3];
const money2 = 3;
console.log(buyChocolates(prices2, money2)); // Output: 3