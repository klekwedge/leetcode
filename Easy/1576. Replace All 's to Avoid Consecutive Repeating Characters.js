/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  for (let i = 0; i < s.length; i++) {
    let currentChar = 97;

    if (s[i] === "?" && i === 0) {
      while (true) {
        s = String.fromCharCode(currentChar) + s.slice(1);
        currentChar++;
        if (s[i] !== s[i + 1]) {
          break;
        }
      }
    } else if (s[i] === "?" && i === s.length - 1) {
      while (true) {
        s = s.slice(0, s.length - 1) + String.fromCharCode(currentChar);
        currentChar++;
        if (s[i] !== s[i - 1]) {
          break;
        }
      }
    } else if (s[i] === "?") {
      while (true) {
        s = s.slice(0, i) + String.fromCharCode(currentChar) + s.slice(i + 1);
        currentChar++;
        if (s[i] !== s[i - 1] && s[i] !== s[i + 1]) {
          break;
        }
      }
    }
  }

  return s;
};
