/**
 * 
 * Instructions:
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward and
 * backward. Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * ---
 * 
 * Time Complexity: O(n)
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const phraseArray = s.split("");

  let left = 0;
  let right = phraseArray.length - 1;

  while (left < right) {
    const leftCharacter = phraseArray[left].toLowerCase();
    const rightCharacter = phraseArray[right].toLowerCase();

    if (leftCharacter === " " || !/^[a-z0-9]$/i.test(leftCharacter)) {
      left++;
      continue;
    }
    if (rightCharacter === " " || !/^[a-z0-9]$/i.test(rightCharacter)) {
      right--;
      continue;
    }

    if (leftCharacter !== rightCharacter) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
