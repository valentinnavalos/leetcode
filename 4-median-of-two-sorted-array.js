var findMedianSortedArrays = function (nums1, nums2) {
  const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);

  const halfIdx = Math.floor(mergedNums.length / 2);
  if (mergedNums.length % 2 === 0) {
    return (mergedNums[halfIdx - 1] + mergedNums[halfIdx]) / 2;
  } else {
    return mergedNums[halfIdx];
  }
};

const main = function () {
  const nums1 = [1, 2, 3, 4, 5];
  const nums2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  const response1 = findMedianSortedArrays(nums1, nums2);
  console.log(`response 1, expected: 9, received: ${response1}`);
};

main();
