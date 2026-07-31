/**
 * 
 * Instructions:
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such
 * that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * 
 * Find two lines that together with the x-axis form a container, such that the container
 * contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * ---
 * 
 * Brief explanation:
 * 
 * Use two pointers to iterate over the array from both ends.
 * 
 * For each pair (left, right), calculate the area using the min height of the two.
 * 
 * If the area is greater than max, update max.
 * 
 * Then move the pointer with the lower height, always searching for a
 * larger container.
 * 
 * ---
 * 
 * Time complexity: O(n)
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);

    const area = minHeight * (right - left);
    if (area > max) {
      max = area;
    }

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};
