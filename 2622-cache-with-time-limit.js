/**
 * 
 * Instructions:
 * 
 * Write a class that allows getting and setting key-value pairs, however a time
 * until expiration is associated with each key.
 * 
 * The class has three public methods:
 * 
 *      - set(key, value, duration): accepts an integer key, an integer value, and
 *        a duration in milliseconds. Once the duration has elapsed, the key should
 *        be inaccessible. The method should return true if the same un-expired key
 *        already exists and false otherwise. Both the value and duration should be
 *        overwritten if the key already exists.
 * 
 *      - get(key): if an un-expired key exists, it should return the associated
 *        value. Otherwise it should return -1.
 * 
 *      - count(): returns the count of un-expired keys.
 * 
 * ---
 * 
 * Brief explanation:
 * 
 * We built the cache using a Map where each key stores an object { value, expiration }
 * 
 * In the set method, the expiration value is calculated by adding duration to the current timestamp.
 * 
 */

var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const cached = this.cache.get(key);
  const newValue = { value, expiration: Date.now() + duration };

  this.cache.set(key, newValue);
  return Boolean(cached && cached.expiration >= Date.now());
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const cached = this.cache.get(key);
  if (cached && cached.expiration > Date.now()) {
    return cached.value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;

  const allCached = this.cache.values();
  allCached.forEach((cached) => {
    if (cached.expiration >= Date.now()) count++;
  });

  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
