/**
 * 
 * Instructions:
 * 
 * Given two promises promise1 and promise2, return a new promise. 
 * promise1 and promise2 will both resolve with a number. The returned
 * promise should resolve with the sum of the two numbers.
 * 
 * ---
 * 
 * Brief explanation:
 * 
 * We create a new Promise that will fulfill both pending promises.
 * Once fulfilled, it sums the values.
 * 
 * ---
 * 
 * Time complexity: O(1)
 * 
 * Note: total waiting time is max(t1, t2), where t1 and t2 are the
 * waiting times for each promise. Promise.all method runs them concurrently.
 * 
 * It isn't an O(n + m) scenario because there aren't any (n or m) inputs
 * to measure.
 * 
 * 
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(
    (values) => values[0] + values[1],
  );
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
