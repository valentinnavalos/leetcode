/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = s.split("");
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let pendingDiscount = 0;

  for (let i = 0; i < romans.length; i++) {
    const currentValue = values[romans[i]];
    const nextValue = values[romans[i + 1]] || null;

    if (nextValue && nextValue <= currentValue) {
      total += currentValue - pendingDiscount;
      pendingDiscount = 0;
    } else if (!nextValue) {
      total += currentValue - pendingDiscount;
      pendingDiscount = 0;
    } else {
      pendingDiscount += currentValue;
    }
  }

  return total;
};
