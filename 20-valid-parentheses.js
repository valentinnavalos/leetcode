/**
 * @param {string} s
 * @return {boolean}

    Complexity: O(n)

    Reasoning:

        there are two types of bracket characters: "openers" and "closer".

        when an opener appears, the following bracket must be the
        corresponding closer.

        also, it could be multiple brackets opened.

        but should be closed in order.

 */
var isValid = function (s) {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // open characters: ( { [
  const openers = Object.keys(pairs);

  // close characters: ) } ]
  const closers = Object.values(pairs);

  // chars opened and not yet closed.
  let openedBrackets = [];

  // chars that must appear next to close correctly.
  let expectedClosers = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // if char is an opener
    if (openers.includes(char)) {
      // include it into the already openeds.
      openedBrackets.push(char);

      // add the needed char to close properly.
      expectedClosers.unshift(pairs[char]);
    } else if (closers.includes(char)) {
      if (!openedBrackets.length) {
        // found a closing bracket with no matching opener.
        return false;
      }

      // check if this char is the next closer expected.
      if (char !== expectedClosers[0]) {
        return false;
      }

      expectedClosers.shift();
      openedBrackets.pop();
    }
  }

  return !openedBrackets.length;
};
