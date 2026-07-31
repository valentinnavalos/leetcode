/**
 * 
 * Instructions:
 * 
 * Given an array nums with n objects colored red, white, or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order red,
 * white, and blue.
 * 
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
 * respectively.
 * 
 * You must solve this problem without using the library's sort function.
 * 
 * ---
 * 
 * Time complexity: O(n)
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let current = 0;
  let right = nums.length - 1;

  while (current <= right) {
    if (nums[current] === 0) {
      let aux = nums[left];
      nums[left] = nums[current];
      nums[current] = aux;

      left++;
      current++;
    } else if (nums[current] === 1) {
      current++;
    } else {
      // nums[current] === 2
      let aux = nums[right];
      nums[right] = nums[current];
      nums[current] = aux;

      right--;
    }
  }
};
