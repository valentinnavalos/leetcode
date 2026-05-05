/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const xValues = nums.slice(0, n);
  const yValues = nums.slice(n);

  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(xValues[i], yValues[i]);
  }

  return result;
};
