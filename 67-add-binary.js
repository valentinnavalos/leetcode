/**
    Given two binary strings a and b, return their sum as a binary string.

    example 1:
    input => a = '11', b = '1'
    output => '100'

    example 2:
    input => a='1010', b='1011'
    output => '10101'

 * @param {string} a
 * @param {string} b
 * @return {string}

    Time complexity: O(n + m)

    Use two pointers (i and j) to ease de movement trough the a and b binary numbers.

    Iterate from the end of the numbers, so on each iteration the pointer decreases by one.

    With (sum % 2) the remainder will be 0 or 1.
    
    And using (sum / 2) we calculate the carry.

 */
var addBinary = function (a, b) {
  let resultArray = [];
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const aNumber = i >= 0 ? Number(a[i]) : 0;
    const bNumber = j >= 0 ? Number(b[j]) : 0;

    const sum = aNumber + bNumber + carry;

    resultArray.push(sum % 2);

    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  const result = resultArray.reverse().join("");

  return result;
};
