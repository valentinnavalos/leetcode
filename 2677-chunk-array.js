/**
 * 
 * Instructions:
 * 
 * Given an array arr and a chunk size size, return a chunked array.
 * 
 * A chunked array contains the original elements in arr, but consists of subarrays each
 * of length size. The length of the last subarray may be less than size if arr.length
 * is not evenly divisible by size.
 * 
 * Please solve it without using lodash's _.chunk function.
 * 
 * ---
 * 
 * Time complexity: O(n)
 * 
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const result = [];

  let chunk = [];
  for (let i = 0; i < arr.length; i++) {
    if (chunk.length === size) {
      result.push(chunk);
      chunk = [];
    }

    chunk.push(arr[i]);
  }

  if (chunk.length) {
    result.push(chunk);
  }

  return result;
};
