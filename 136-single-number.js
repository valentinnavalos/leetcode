/**
 * 
 * Instructions:
 * 
 * Given a non-empty array of integers nums, every element appears twice
 * except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use
 * only constant extra space.
 * 
 * ---
 * 
 * Time complexity: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const result = [];
  const uniques = new Map();

  for (const num of nums) {
    if (uniques.get(num)) {
      uniques.delete(num);
    } else {
      uniques.set(num, 1);
    }
  }

  uniques.forEach((value, key) => result.push(key));

  return result[0];
};
