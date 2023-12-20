/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let min = Infinity;
    let n = prices.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let cost = prices[i] + prices[j];

            if (cost < min) {
                min = cost;
            }
        }
    }
    if (min <= money) {
        return money - min;
    } else {
        return money;
    }
};

// assume min cost to be infinite
// init num of chocolates 
// check every pair of chocolates
// sum price of first two chocolates
// if sum less than min cost, update min cost

// buy chocolates if theres enough money
// return amount of money left
// cannot buy chocolates so return initial amount of money

// O(n2) time complexity with O(1) mem complexity