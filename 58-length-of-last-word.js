/**
 * @param {string} s
 * @return {number}

    58. Length of Last Word

    Time Complexity: O(n)

    Reverse iterate over the string s until the current character is a space.

    We can also face trailing spaces at the end of the string s,
    which will be skipeed at the initial loops of the reverse for.

    In the case the string s is a single word without spaces,
    the loop will iterate through all characters and return the final
    count outside the loop.
 */
var lengthOfLastWord = function (s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (count === 0) continue;
      return count;
    } else {
      count++;
    }
  }

  return count;
};
