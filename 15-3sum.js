/**
 * 
 * Instructions:
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such
 * that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * ---
 * 
 *  Time complexity: O(n * n)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []

    nums.sort((a, b) => a - b)

    for (let left=0; left<nums.length -2; left++) {

        if (left > 0 && nums[left] === nums[left -1]) continue;

        let pivot = left + 1;
        let right = nums.length -1;


        while (pivot < right) {

            const sum = nums[left] + nums[pivot] + nums[right]

            if (sum === 0) {
                result.push([nums[left], nums[pivot], nums[right]])

                while (pivot < right && nums[pivot] === nums[pivot +1]) pivot++
                while (pivot < right && nums[right] === nums[right -1]) right--

                pivot++
                right--
            } else if (sum < 0) {
                pivot++
            } else {
                right--
            }

        }

    }

    return result;
};