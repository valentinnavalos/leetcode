/**
 * Instructions:
 * 
 * You are given a large integer represented as an integer array digits, where
 * each digits[i] is the ith digit of the integer. The digits are ordered from
 * most significant to least significant in left-to-right order. The large
 * integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * ---
 * 
 * Thinking:
 * 
 * Iterate from the last element of the digits array.
 * 
 * If we don't need to carry, just increment the current digit by one and return the array.
 * 
 * If a carry is needed, set the current digit to 0, increment the next number and check again.
 * 
 * If the loop finishes without returning the expected result, it means that
 * all the digits are 0s, which means a 1 at the front is needed.
 * 
 * ---
 * 
 * Time complexity: O(n)
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const nextNumber = digits[i] + 1;
    if (nextNumber < 10) {
      digits[i] = nextNumber;
      return digits;
    }

    digits[i] = 0;
  }

  return [1, ...digits];
};
