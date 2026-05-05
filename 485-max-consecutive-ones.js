/**
 * @param {number[]} nums
 * @return {number}

    Time Complexity => O(n)
    n = nums length
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let counter = 0;
  let isCounting = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > max) {
      max = counter;
    }
  }

  return max;
};
