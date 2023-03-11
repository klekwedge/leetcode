/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const startNum = s[1];
  const endNum = s[4];
  const startLetter = s[0].charCodeAt(0);
  const endLetter = s[3].charCodeAt(0);
  const res = [];
  for (let i = startLetter; i <= endLetter; i++) {
    for (let j = startNum; j <= endNum; j++) {
      res.push(`${String.fromCharCode(i)}${j}`);
    }
  }

  return res;
};
