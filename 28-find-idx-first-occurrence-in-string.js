/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 
    Time Complexity = O(n * m)

 */
var strStr = function (haystack, needle) {
  if (!haystack.length) return -1;
  if (needle === "") return 0;

  // stop iterating if the remaining haystack are fewer than the needle
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }

  return -1;
};
