/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const res = [];
  for (let i = 0; i < operations.length; i++) {
    if (/\d+/gi.test(operations[i])) {
      res.push(Number(operations[i]));
    } else if (operations[i] === "C") {
      res.splice(res.length - 1, 1);
    } else if (operations[i] === "D") {
      res.push(res[res.length - 1] * 2);
    } else {
      res.push(res[res.length - 1] + res[res.length - 2]);
    }
  }
  return res.length ? res.reduce((prev, next) => prev + next) : [];
};
