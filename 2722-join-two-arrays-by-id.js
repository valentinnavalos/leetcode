/**
 * 
 * Instructions:
 * 
 * Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the
 * two inputs arrays will contain an id field that has an integer value. 
 * 
 * joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of
 * joinedArray should be the length of unique values of id. The returned array should be sorted
 * in ascending order based on the id key.
 * 
 * If a given id exists in one array but not the other, the single object with that id should be
 * included in the result array without modification.
 * 
 * If two objects share an id, their properties should be merged into a single object:
 *      If a key only exists in one object, that single key-value pair should be included in the object.
 *      If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 * 
 * ---
 * 
 * Time complexity: O((n + m)log(n + m))
 * 
 * Due to the .sort time complexity is O(n log n), where n is (n + m)
 * 
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    map.set(current.id, current);
  }

  for (let j = 0; j < arr2.length; j++) {
    const current = arr2[j];
    const extraKeys = [];

    // join stored keys
    const stored = map.get(current.id);
    if (stored) {
      const storedKeys = Object.keys(stored);
      const currentKeys = Object.keys(current);

      // discover which one is the extra key
      for (let i = 0; i < storedKeys.length; i++) {
        const storedKey = storedKeys[i];

        if (!currentKeys.includes(storedKey)) {
          extraKeys.push(storedKey);
        }
      }
    }

    for (let i = 0; i < extraKeys.length; i++) {
      const extraKey = extraKeys[i];
      current[extraKey] = stored[extraKey];
    }

    map.set(current.id, current);
  }

  map.forEach((value) => result.push(value));

  result.sort((a, b) => a.id - b.id);

  return result;
};
