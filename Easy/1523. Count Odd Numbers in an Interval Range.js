/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  low = low % 2 ? low : low + 1;
  let counter = 0;

  for (let i = low; i <= high; i += 2) {
    counter++;
  }

  return counter;
};
