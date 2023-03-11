/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else {
      const lastEl = stack.pop();

      if (bracket !== obj[lastEl]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
