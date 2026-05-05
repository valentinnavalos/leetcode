/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const stringX = String(x);
  const reversedArray = [];

  for (let i = stringX.length - 1; i >= 0; i--) {
    reversedArray.push(stringX[i]);
  }

  const reversedString = reversedArray.join("");

  if (stringX === reversedString) return true;
  return false;
};
