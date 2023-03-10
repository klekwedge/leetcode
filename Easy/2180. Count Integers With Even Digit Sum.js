/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    if (
      String(i)
        .split("")
        .map((item) => +item)
        .reduce((prev, next) => prev + next) %
        2 ===
      0
    ) {
      counter++;
    }
  }

  return counter;
};
