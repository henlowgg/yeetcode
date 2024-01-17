/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [2 * nums.length];
    for (let i = 0; i < 2 * nums.length; i++) {
        if (i * nums.length) {
            ans[i] = nums[i];
        } else {
            ans[i] = nums[i - nums.length];
        }
    }
    return ans;
};