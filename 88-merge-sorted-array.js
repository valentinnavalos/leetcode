/**
 * 
 * Instructions:
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two
 * integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be stored inside
 * the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements
 * denote the elements that should be merged, and the last n elements are set to 0 and should be
 * ignored. nums2 has a length of n.
 * 
 * ---
 * 
 * Brief explanation:
 * 
 * Considering that both arrays are sorted, we create two pointers: last1 and last2.
 * 
 * These vbles point to the last valid number of each array.
 * 
 * Inside the for loop, we iterate through the nums1 array starting from the end of the
 * array (where the empty positions are placed)
 * 
 * For each position, we check which last valid number is greater, and place it in the current
 * zero position.
 * 
 * ---
 * 
 * Time complexity: O(z), where z = nums1.length
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let last2 = n -1;
    let last1 = m -1;

    for (let i=nums1.length -1; i>=0 && last2 >=0; i--) {
        if (nums1[last1] === nums2[last2]) {
            nums1[i] = nums2[last2]
            last2--
        } else if (nums1[last1] > nums2[last2]) {
            nums1[i] = nums1[last1]
            last1--;
        } else {
            nums1[i] = nums2[last2];
            last2--;
        }
    }

};