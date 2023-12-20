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