/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let w = x = 0;
    let y = z = Infinity;

    for (const n of nums) {
        if (n < y) {
            [z, y] = [y, n];
        } else if (n < z) {
            z = n;
        }

        if (n > w) {
            [x, w] = [w, n];
        } else if (n > x) {
            x = n;
        }
    }
    return w * x - y * z;
};