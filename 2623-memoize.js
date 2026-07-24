/**
 * 
 * Instructions:
 * 
 * Given a function fn, return a memoized version of that function.
 * 
 * A memoized function is a function that will never be called twice with the same inputs. Instead it
 * will return a cached value.
 * 
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 *      - sum accepts two integers a and b and returns a + b. Assume that if a value has already been
 *        cached for the arguments (b, a) where a != b, it cannot be used for
 *        the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate
 *        calls should be made.
 *      - fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 *      - factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 * 
 * ---
 * 
 * Brief explanation:
 * 
 * We use a map for memoization. On each call to the memoized fn, it checks
 * internally if there is any memoized value already cached for the given key.
 * 
 * We build the key just by turning the args as String.
 * 
 * ---
 * 
 * Time complexity:
 *  Memoized: O(1)
 *  Not memoized: O(fn)
 * 
 * The memoization reduce the time complexity to O(1), we need to consider
 * the needed serialization of the arguments to build the key. Due to the
 * quantity of args it 2 at most, we could summarize at O(1).
 * 
 * The time complexity of the memoized fn still exists, so to keep it in
 * the count we finally met at [O(1) + O(fn)].
 * 
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map = new Map();
    
    return function(...args) {
        const key = String(args)
        if (map.has(key)) {
            return map.get(key)
        } else {
            const response = fn(...args)
            map.set(key, response)
            return response;
        }
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */