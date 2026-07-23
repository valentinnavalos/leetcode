/**
 * 
    Given an integer array nums sorted in non-decreasing order, remove the duplicates
    in-place such that each unique element appears only once. The relative order of
    the elements should be kept the same.

    Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates,
    return the number of unique elements k.

    The first k elements of nums should contain the unique numbers in sorted order. The
    remaining elements beyond index k - 1 can be ignored.

    ---

    Iterate over the nums array, storing the unique numbers in a set

    Place each unique number in the position indicated by the variable k.

    k --> index where the next unique number will be placed.

    ---

    Time Complexity: O(n)

 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;

  const existing = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!existing.has(nums[i])) {
      existing.add(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
