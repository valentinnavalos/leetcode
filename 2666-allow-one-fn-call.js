/**
 * 
 * Instructions:
 * 
 * Given a function fn, return a new function that is identical to the original function except
 * that it ensures fn is called at most once.
 * 
 * The first time the returned function is called, it should return the same result as fn.
 * 
 * Every subsequent time it is called, it should return undefined.
 * 
 * ---
 * 
 * A closure is an inner function that keeps access to variables in its outer scope,
 * even after the outer fn has finished executing.
 * 
 * Here, the inner fn keeps access to hasBeenCalled vble across multiple calls.
 * 
 * ---
 * 
 * Time complexity: O(1)
 * 
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }

    return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
