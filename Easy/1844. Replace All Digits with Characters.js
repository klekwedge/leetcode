/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  return s.replace(/[a-z]\d/gi, (match) => {
    return (
      match[0] + String.fromCharCode(match.charCodeAt(0) + Number(match[1]))
    );
  });
};
