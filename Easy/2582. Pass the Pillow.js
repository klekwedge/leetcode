/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let current = 1;
  let back = false;

  for (let i = 0; i < time; i++) {
    if (current === n) {
      current--;
      back = true;
    } else if (current === 1) {
      current++;
      back = false;
    } else if (!back) {
      current++;
    } else if (back) {
      current--;
    }
  }

  return current;
};
