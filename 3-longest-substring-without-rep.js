var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  const substringSet = new Set();

  for (let i = 0; i < s.length; i++) {
    substringSet.add(s[i]);

    let j = i + 1;
    while (j < s.length && !substringSet.has(s[j])) {
      substringSet.add(s[j]);
      j++;
    }

    const substringSize = substringSet.size;
    if (substringSize > longest) {
      longest = substringSize;
    }

    substringSet.clear();
  }

  return longest;
};

const main = function () {
  const s1 = "abcabcbb";
  const s2 = "dvdf";

  const response1 = lengthOfLongestSubstring(s1);
  console.log(`response 1, expected: 3, received: ${response1}`);

  const response2 = lengthOfLongestSubstring(s2);
  console.log(`response 2, expected: 3, received: ${response2}`);
};

main();
