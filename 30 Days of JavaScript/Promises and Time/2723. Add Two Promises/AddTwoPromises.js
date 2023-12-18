/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */


// use the Promise.all() method and await 
// waiting for both promises to resolve

// once resolved the values are retrieved and stored in the variables val1 and val2, then a new promise is returned with the sum of val1 and val2


// Time: O(max(promise1 time, promise2 time)) which just means the time complexity is determined by the longest running promise since Promise.all() method waits for both promises to resolve concurrently