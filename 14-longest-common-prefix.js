/**
 * @param {string[]} strs
 * @return {string}

    Time complexity: O(n * m)

    n: strs length
    m: shorter word length
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    const char = firstWord[i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return firstWord.substring(0, i);
      }
    }
  }

  return firstWord;
};
